"use client";
import Button from "./Latihan2";
import { Dispatch, SetStateAction } from "react";

interface KurangProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const Kurang: React.FC<KurangProps> = ({count,setCount})=>{
  return (
    <section className="border shadow-lg">
      <h1>{count}</h1>
      <Button
        title="kurang"
        colorSchema="blue"
        isDisabled={count === 0 ? true : false}
        onClick={() => {
          setCount((e:number) => e -1 )
        }}
      />
    </section>
  )
}
export default Kurang