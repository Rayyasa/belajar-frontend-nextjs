// 'use client'
// import Image from 'next/image'
// import React from 'react';
// import './globals.css';
// import NavBar from './components/nav';
// import Main from './components/main';
// import Footer from './components/footer';
// import Latihan from './components/Latihan';
// import Button from './components/Button';
// import Note from './components/Note';
// import Container from './components/container';
// import InputText from './components/InputText';

// // Function Component
// export default function Home() {
// return (
//   <main className="space-y-5">
//   <h1>Hello World</h1>

//   <InputText
//         placeholder="username"
//         type="text"
//         isError
//         messageError="Username not empty"
//       />
//       <InputText placeholder="******" type="passoword" isError />
//       <InputText
//         value={12}
//         onChange={() => {
//           console.log("ok");
//         }}
//       />

//   <Button title="Simpan" isDisabled={false} />
//   <Button title="cancel" isDisabled={true} />
//   <Note title="Belajar ReactJS" status="warning">
//     <p>Saya belajar React</p>
//   </Note>
//   <Note title="Belajar TypeScript" status="warning">
//     <div className="bg-blue-500">
//       <p className="text-white">Saya sedang belajar TypeScript</p>
//     </div>
//   </Note>

//   <Note title="Belajar NestJS" status="warning">
//     <div className="bg-green-500">
//       <p className="text-white">
//         Saya sedang belajar NestJS untuk menjadi backend developer
//       </p>
//     </div>
//   </Note>

//   <Note title='Belajar Front End' status='success'>
//     <div className="bg-slate-500">
//       <p className="text-white">
//         Saya sedang belajar Front End Development
//       </p>
//     </div>
//   </Note>
//   <Note title='Belajar Front End' status='error'>
//     <div className="bg-slate-500">
//       <p className="text-white">
//         Saya sedang belajar Front End Development
//       </p>
//     </div>
//   </Note>

// </main>
//   );
// }

//

"use client";
import { useState } from "react";
import Button from "./components/Latihan2";
import InputText from "./components/Latihan1";
import Label from "./components/Label";

export type Identitas = {
  nama: string;
  sekolah: string;
  umur: number | null;
};

export type Hasil = {
  mata_pelajaran: string;
  nilai: number | null;
};

const Home = () => {
  let [message, setMessage] = useState("hai!");
  let [count, setCount] = useState(0);
  let [isLogin, setIslogin] = useState(false);
  return (
    <main className="space-y-5">
      <h1 className="text-center">Hello World!</h1>
      <h1 className="text-lg m-2">{message}</h1>
      <Button
        title="Rayya"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setMessage("Hello Rayya!");
        }}
      />
      <Button
        title="Hilmi"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setMessage("Hello Hilmi!");
        }}
      />
      <h1 className="text-lg m-2">{count}</h1>
      <Button
        title="tambah"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setCount((prevCount) => {
            console.log("State Saat ini", prevCount);
            return prevCount + 1;
          });
        }}
      />
      <Button
        isDisabled={count === 0 ? true : false}
        title="Kurang"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      />

      <h1 className="text-lg m-2 text-red-500">{isLogin ? "Sudah Login" : "Belum Login"}</h1>
      <Button
        title="LogOut"
        variant="solid"
        colorSchema="red"
        onClick={() => {
          setIslogin(false);
        }}
      />
      <Button
        title="Login"
        variant="solid"
        colorSchema="blue"
        onClick={() => {
          setIslogin(true);
        }}
      />
          <Button 
          title={isLogin ? "Sign Out" : "Sign In"}
          colorSchema={isLogin ? "red" : "blue"}
          variant="solid"
          onClick={() => {
            setIslogin(!isLogin);
          }}
        />
    </main>
  );
};
export default Home;
