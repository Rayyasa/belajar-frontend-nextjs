"use client";
import { useEffect, useRef, useState } from "react";
import Button from "@/app/components/Latihan2";
import { useDisClosure } from "@/app/Hook";
import InputText from "@/app/components/Latihan1";
import useDebounce from "@/app/Hook/useDebounce";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisClosure();
  let [keyword, setKeyword] = useState("");
  const { debouncedValue } = useDebounce(keyword, 1000);
  return (
    <section className="h-screen w-screen space-y-5">
      <Button onClick={onOpen} colorSchema="blue" title="open" />
      <Button onClick={onClose} colorSchema="red" title="closed" />
      <InputText
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        id={""}
        name={""}
      />

      {debouncedValue}
      {isOpen ? <p>Open</p> : <p>Close</p>}
    </section>
  );
};

export default Home;
