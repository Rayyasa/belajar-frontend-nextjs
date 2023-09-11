"use client";
import { useRef } from "react";
import Button from "@/app/components/Latihan2";
import InputText from "@/app/components/Latihan1";

export const BelajaruseReff = () => {
  const targetAbout = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    targetAbout.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  };

  const mouseEnter = () => {
    const text = document.createElement("div");
    text.className = "text-white bg-red-500 p-2";
    const textnode = document.createTextNode('Selamat datang');
    text.appendChild(textnode);
    targetAbout.current?.appendChild(text);
  };



  return (
    <section className="h-screen w-screen">
      <nav className="h-[50px]">
        <Button colorSchema="blue" variant="solid" title="Home" />
        <Button colorSchema="red" variant="solid" title="Content" />
        <Button
          colorSchema="green"
          variant="solid"
          title="About"
          onClick={scrollToAbout}
        />
      </nav>
      <section className="h-[90%] overflow-auto">
        <div className="min-h-screen bg-red-500 flex items-center justify-center">
          <h1 className="text-white">Home </h1>
        </div>
        <div className="min-h-screen bg-blue-500 flex items-center justify-center">
          <h1 className="text-white">Content </h1>
        </div>
        <div
        onMouseEnter={mouseEnter}
          ref={targetAbout}
          className="min-h-screen bg-yellow-500 flex items-center justify-center"
        >
          <h1 className="text-white">About </h1>
        </div>
      </section>
    </section>
  );
};
