import { CONTACT } from "./content";

export type SendResult = { ok: boolean; activation: boolean };

/** Sends an enquiry to the owner's email. Uses Web3Forms when a key is set, otherwise FormSubmit. */
export async function sendEnquiry(p: { subject: string; name: string; email?: string; phone?: string; text: string; fields: Record<string, string> }): Promise<SendResult> {
  try {
    if (CONTACT.web3formsKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: CONTACT.web3formsKey, subject: p.subject, from_name: "Shri Jaya Website", name: p.name, ...(p.email ? { email: p.email } : {}), phone: p.phone || "-", message: p.text, botcheck: "" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!data.success) console.error("Web3Forms:", data.message);
      return { ok: !!data.success, activation: false };
    }
    const res = await fetch(CONTACT.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: p.subject, _template: "table", _captcha: "false", ...p.fields, ...(p.email ? { email: p.email } : {}) }),
    });
    const data = await res.json().catch(() => ({}));
    const ok = res.ok && (data.success === true || data.success === "true");
    const msg = String(data.message || "");
    if (!ok) console.error("FormSubmit:", msg);
    return { ok, activation: !ok && /activat/i.test(msg) };
  } catch (e) {
    console.error("Enquiry failed:", e);
    return { ok: false, activation: false };
  }
}
