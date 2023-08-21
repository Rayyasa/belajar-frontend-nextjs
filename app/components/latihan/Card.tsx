import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Latihan2";

interface CardProps {
  tanggal : number;
  bulan: string;
  setTanggal: Dispatch<SetStateAction<number>>;
  setBulan: Dispatch<SetStateAction<string>>;
};

const Card:React.FC<CardProps> = ({
  tanggal,
  bulan,
  setTanggal,
  setBulan,
}) => {
  return (
    <section className="m-2 w-48 flex flex-col justify-center items-start rounded-lg shadow-md">
      <div className="w-48 p-3 flex bg-red-500 rounded-t-lg items-center justify-center">
          <p className="w-48 text-center text-white mx-auto">{bulan}</p>
      </div>
      <div className="w-48 p-4 items-center justify-center pt-4">
        <p className="text-9xl text-center">{tanggal}</p>
      </div>
      <div className="mb-3 flex justify-center items-center mx-auto">
          <Button
            title="Clear"
            colorSchema="red"
            variant="outline"
            onClick={() => {
              setTanggal(0);
              setBulan("Agustus");
            }}
          />
      </div>
    </section>
  )
}
export default Card;