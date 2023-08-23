import { Dispatch, SetStateAction, useState } from "react";
import Button from "../components/Latihan2";
import { Hasil } from "../page";
interface CardProps {
  mata_pelajaran : string;
  nilai: string;
};

const Card:React.FC<CardProps> = ({
  mata_pelajaran,
  nilai,
}) => {
  return (
    <section className="m-4 my-10  shadow-lg shadow-slate-400">
      <div className="flex flex-col m-4 py-3 px-3">
        <h1>Mata Pelajaran : {mata_pelajaran}</h1>
        <p>Nilai : {nilai}</p>
      </div>
      <div className="px-3 py-3">
        <Button
          title="Hapus"
          colorSchema="red"
          variant="solid"
        />
      </div>
    </section>
  )
}
export default Card;