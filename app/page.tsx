"use client";
import About from "@/components/About";
import Eyes from "@/components/Eyes";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import Projects from "../components/Projects";
import Card from "../components/Card";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  const bhim = { name: "RohanKachhap", age: 23, scid: 2213129 };
  return (
    <>
      <LandingPage bhim={bhim} />

      <Marquee />
      <About />

      <Eyes />

      <Projects />
      <Card />
    </>
  );
}
