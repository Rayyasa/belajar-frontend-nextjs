"use client"
import Button from "./Latihan2";
import { Dispatch, SetStateAction } from "react";
interface TambahProps {
  count : number;
  setCount : Dispatch<SetStateAction<number>>;
}

const Tambah : React.FC<TambahProps> = ({count, setCount}) => {
  return (
    <section className="border shadow-lg">
      <h1>{count}</h1>
      <Button
        title="tambah"
        colorSchema="red"
        onClick={()=> {
          setCount((c: number) => c + 1);
        }}
      />
    </section>
  )
}
export default Tambah;