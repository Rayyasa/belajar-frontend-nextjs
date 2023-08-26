import { Dispatch, SetStateAction, useState } from "react";
import Button from "../components/Latihan2";
import { Hasil } from "../page";
interface CardProps {
  mata_pelajaran: string;
  nilai: string;
  onDelete: () => void;
}



const Card: React.FC<CardProps> = ({ mata_pelajaran, nilai, onDelete }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-4">
      <h5 className="">Mata Pelajaran: {mata_pelajaran}</h5>
      <h5 className="">Nilai: {nilai}</h5>
      <div className="px-3 py-3">
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Card;
