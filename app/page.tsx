"use client";
import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LangProvider } from "@/lib/lang";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TwoWays from "@/components/TwoWays";
import Process from "@/components/Process";
import Garments from "@/components/Garments";
import FabricReel from "@/components/FabricReel";
import About from "@/components/About";
import Order from "@/components/Order";
import Footer from "@/components/Footer";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const done = useCallback(() => setLoading(false), []);
  return (
    <LangProvider>
      <SmoothScroll />
      <Cursor />
      <AnimatePresence>{loading && <Loader onDone={done} />}</AnimatePresence>
      <Nav />
      <main>
        <Hero ready={!loading} />
        <Marquee />
        <TwoWays />
        <Process />
        <Garments />
        <FabricReel />
        <About />
        <Order />
      </main>
      <Footer />
    </LangProvider>
  );
}
