"use client";
import { useEffect, useState,useRef } from "react";
import InputText from "@/app/components/Latihan1";
import Button from "@/app/components/Latihan2";
export const BelajarEffect = () => {
  let [message, setMessage] = useState("UseEffect belum berjalan");
  let [count, setCount] = useState(0);
  let [change, setChange] = useState(false);
  let [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    setCount((c) => c + 1)
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId); 
      console.log("UseEffect sudah berjalan");
    };
  },[message,change, currentTime]);
  return (
    <section>
      <p>UseEffect Berjalan : {count}</p>
      <p>{change ? "sudah" : "belum"}</p>
      <p>{currentTime.toLocaleTimeString()}</p>
      <div className="text-red-500 font-bold">{message}</div>
      <InputText 
        value={message}
        id="text"
        name="text"
        onChange={(e) => {
          setMessage(e.target.value)
        }}
      />
      
      <Button 
        title="ubah change"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setChange(!change)
        }}
      />
        


    </section>
  );
};
