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

//State

// "use client";
// import { useState } from "react";
// import Button from "./components/Latihan2";
// import InputText from "./components/Latihan1";
// import Label from "./components/Label";

// export type Identitas = {
//   nama: string;
//   sekolah: string;
//   umur: number | null;
//   alamat? : string;
// };

// export type Hasil = {
//   mata_pelajaran: string;
//   nilai: number | null;
// };

// const Home = () => {
//   let [message, setMessage] = useState("hai!");
//   let [count, setCount] = useState(0);
//   let [isLogin, setIslogin] = useState(false);
//   let [profile, setProfile] = useState<Identitas>({
//     nama: "Rayya",
//     umur: 16,
//     sekolah: 'Smk mq',
//   });
//   let [hasil, setHasil] = useState<Hasil[]>([
//     {
//       mata_pelajaran: "Matematika",
//       nilai: 80,
//     },
//     {
//       mata_pelajaran: "Fisika",
//       nilai: 90,
//     },
//     {
//       mata_pelajaran: "Kimia",
//       nilai: 95,
//     },
//   ]);
//   return (
//     <main className="space-y-5">
//       <h1 className="text-center">Hello World!</h1>
//       <h1 className="text-lg m-2">{message}</h1>
//       <h1 className="text-red-500 font-bold text-2xl">
//         Nama adalah : {profile.nama}, sekolah di {profile.sekolah} dan berumur {" "} {profile.umur} dan rumah di {profile.alamat || "-"}
//       </h1>
//       <Button
//         title="tambah alamat"
//         colorSchema="red"
//         variant="solid"
//         onClick={() => {
//           setProfile((prevProfile) => {
//             return {
//               ...prevProfile,
//               nama: "Rayya Disayidan",
//               alamat: "Jakut",
//             }
//           })
//         }}
//       />
//       <Button
//         title="Kembali ke Default"
//         colorSchema="blue"
//         variant="solid"
//         onClick={() => {
//           setProfile((prevProfile) => {
//             return {
//               nama: "Rayya",
//               sekolah: "Smk mq",
//               umur: 16
//             }
//           })
//         }}
//       />

//       <div className="">
//         <h2>Daftar Nilai</h2>
//         {}
//       </div>

//       <div>
//       <Button
//         title="Rayya"
//         colorSchema="red"
//         variant="solid"
//         onClick={() => {
//           setMessage("Hello Rayya!");
//         }}
//       />
//       <Button
//         title="Hilmi"
//         colorSchema="blue"
//         variant="solid"
//         onClick={() => {
//           setMessage("Hello Hilmi!");
//         }}
//       />
//       </div>
//       <h1 className="text-lg m-2">{count}</h1>
//       <Button
//         title="tambah"
//         colorSchema="red"
//         variant="solid"
//         onClick={() => {
//           setCount((prevCount) => {
//             console.log("State Saat ini", prevCount);
//             return prevCount + 1;
//           });
//         }}
//       />
//       <Button
//         isDisabled={count === 0 ? true : false}
//         title="Kurang"
//         colorSchema="blue"
//         variant="solid"
//         onClick={() => {
//           setCount((prevCount) => prevCount - 1);
//         }}
//       />

//       <h1 className="text-lg m-2 text-red-500">{isLogin ? "Sudah Login" : "Belum Login"}</h1>
//       <Button
//         title="LogOut"
//         variant="solid"
//         colorSchema="red"
//         onClick={() => {
//           setIslogin(false);
//         }}
//       />
//       <Button
//         title="Login"
//         variant="solid"
//         colorSchema="blue"
//         onClick={() => {
//           setIslogin(true);
//         }}
//       />
//           <Button
//           title={isLogin ? "Sign Out" : "Sign In"}
//           colorSchema={isLogin ? "red" : "blue"}
//           variant="solid"
//           onClick={() => {
//             setIslogin(!isLogin);
//           }}
//         />
//     </main>
//   );
// };
// export default Home;

//Latihan State

// "use client";
// import { useState } from "react";
// import BelajarState from "./components/module/belajarState";
// import Card from "./components/latihan/Card";
// import Button from "./components/Latihan2";
// import InputText from "./components/Latihan1";
// import exp from "constants";

// export type Identitas = {
//   nama :string;
//   sekolah: string;
//   umur: number | null;
// };

// export type Hasil = {
//   mata_pelajaran: string;
//   nilai: number | null;
// };

// const Home = () => {
//   let [tanggal, setTanggal] = useState(0);
//   let [bulan, setBulan] = useState('Agustus');

//   return (
//     <main className="space-y-5 m-4">
//       <h1>Latihan</h1>
//       <Card
//         bulan={bulan}
//         tanggal={tanggal}
//         setTanggal={setTanggal}
//         setBulan={setBulan}
//       />
//       <Button
//         onClick={() => {
//           setTanggal((c) => c + 1);
//         }}
//         colorSchema="blue"
//         title="tambah"
//       />
//       <Button
//       isDisabled={tanggal === 0 ? true : false}
//         onClick={() => {
//           setTanggal((c) => c - 1);
//         }}
//         colorSchema="red"
//         title="kurang"
//       />
//       <InputText
//         id="bulan"
//         name={"bulan"}
//         value={bulan}
//         onChange={(e) => {
//           setBulan(e.target.value);
//         }}
//       />
//     </main>
//   );
// };
// export default Home;

"use client"; // gunakan use client karena ada onChange pda komponen
import { useState } from "react";
import Button from "./components/Latihan2";
import Kartu from "./components/Kartu";
import { json } from "stream/consumers";
import { data } from "autoprefixer";

// export type Identitas = {
//   nama: string;
//   sekolah: string;
//   umur: number | null;
// };

// export type Hasil = {
//   mata_pelajaran: string;
//   nilai: number | null;
// };

// export type Buah = {
//   nama_buah: string;
// }

// const Home = () => {
//   let [message, setMessage] = useState("hai"); // jika string, dengan data awal "hai"
//   let [count, setCount] = useState(0); // jika number , dengan data awal 0
//   let [isLogin, setIsLogin] = useState(false); // jika booelan, dengan data awal false
//   let [profile, setProfile] = useState<Identitas>({
//     // jika sebuah object
//     nama: "Rayya Disayidan",
//     sekolah: "SMK Madinatul Qur'an",
//     umur: 16,
//   });

//   let [hasil, setHasil] = useState<Hasil[]>([
//     {
//       mata_pelajaran: "Matematika",
//       nilai: 80,
//     },
//     {
//       mata_pelajaran: "Fisika",
//       nilai: 90,
//     },
//     {
//       mata_pelajaran: "Kimia",
//       nilai: 95,
//     },
//   ]); // jika sebuah array dengan data awal array kosong

//   let bilangan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   // let buah = ["Apel", "Pisang", "Mangga", "Pir"];

//   let [buah, setBuah] = useState<Buah[]>([
//     {
//       nama_buah: "apel"
//     },
//     {
//       nama_buah: "Mangga"
//     },
//     {
//       nama_buah: "Pisang"
//     },
//     {
//       nama_buah: "Durian"
//     },
//   ])

//   return (
//     <main className="space-y-5">
//       <h1>Hello World</h1>
//       <p>message addalah {message}</p>{" "}
//       <Button
//         title="Hello"
//         variant="solid"
//         colorSchema="blue"
//         onClick={() => {
//           setMessage("Hello");
//         }}
//       />
//       <Button
//         title="Salam"
//         variant="outline"
//         colorSchema="blue"
//         onClick={() => {
//           setMessage("Assalamualaikum");
//         }}
//       />
//       <p>Count adalah {count}</p>
//       <Button
//         title="Tambah"
//         variant="solid"
//         colorSchema="blue"
//         onClick={() => {
//           setCount((prevCount) => prevCount + 1);
//         }}
//       />
//       <Button
//         title="Kurang"
//         isDisabled={count < 1}
//         variant="solid"
//         colorSchema="red"
//         onClick={() => {
//           setCount((prevCount) => prevCount - 1);
//         }}
//       />
//       <p> {isLogin ? "Sudah Login" : "Belum Login"}</p>
//       <Button
//         title="Login"
//         isDisabled={isLogin === true}
//         variant="solid"
//         colorSchema="blue"
//         onClick={() => {
//           setIsLogin(true);
//         }}
//       />
//       <Button
//         title="Logout"
//         isDisabled={isLogin === false}
//         variant="solid"
//         colorSchema="red"
//         onClick={() => {
//           setIsLogin(false);
//         }}
//       />
//       <div className="flex flex-col">
//         <h5>Nama : {profile.nama}</h5>
//         <h5>Sekolah : {profile.sekolah}</h5>
//         <h5>Umur : {profile.umur}</h5>
//       </div>
//       <Button
//         title="Ubah Nama"
//         variant="solid"
//         colorSchema="blue"
//         onClick={() => {
//           setProfile((prevProfile) => {
//             return {
//               ...prevProfile,
//               nama: "Ilham Maulana Fikri",
//             };
//           });
//         }}
//       />
//       <Button
//         title="Update"
//         variant="solid"
//         colorSchema="blue"
//         onClick={() => {
//           setProfile((prevProfile) => {
//             return {
//               ...prevProfile,
//               sekolah: "SMK MADINATULQURAN",
//             };
//           });
//         }}
//       />
//       <Button
//         title="Kembali Ke Default"
//         variant="solid"
//         colorSchema="red"
//         onClick={() => {
//           setProfile((prevProfile) => {
//             return {
//               nama: "Rayya Disayidan",
//               sekolah: "SMK Madinatul Qur'an",
//               umur: 16,
//             };
//           });
//         }}
//       />
//       <div className="m-2">
//         <h2>Daftar Nilai</h2>
//         {hasil.map((n, index) => (
//           <section key={index}>
//             <h5>Nama Mata pelajaran : {n.mata_pelajaran} </h5>
//             <h5>Nilai : {n.nilai} </h5>
//           </section>
//         ))} 
        
//         <div>
//           <Button
//           title="Tambah"
//           variant="solid"
//           colorSchema="blue"
//           onClick={() => {
//             setHasil((prevHasil) => {
//               return [
//                 ...prevHasil,
//                 {
//                   mata_pelajaran: "B. Indonesia",
//                   nilai: 100,
//                 },
//                 {
//                   mata_pelajaran: "Pemograman Dasar",
//                   nilai: 95,
//                 },
//               ];
//             });
//           }}
//         />
//         <Button
//           title="Kurang"
//           isDisabled={hasil.length <= 1}
//           variant="solid"
//           colorSchema="red"
//           onClick={() => {
//             setHasil((prevHasil) => {
//               prevHasil.pop();
//               return [...prevHasil];
//             });
//           }}
//         />
//         </div>

//         {/* {bilangan.map((item, index) => (
//           <h1 key={index}>{item}</h1>
//         ))} */}
        
//         {buah.map((i ,index) =>(
//           <section key={index}>
//             <h6>Nama Buah index ke {index} adalah {i.nama_buah}</h6>
//           </section>
//         ))}
      
//       <Button
//           title="Tambah Buah"
//           variant="solid"
//           colorSchema="blue"
//           onClick={() => {
//             setBuah((prevBuah) => {
//               return [
//                 ...prevBuah,
//                 {
//                   nama_buah: "Kiwi"
//                 },
//                 {
//                  nama_buah: "Dukuh"
//                 },
//                 {
//                   nama_buah: "Mengkudu"
//                 },
//                 {
//                  nama_buah: "Sirsak"
//                 },
//               ];
//             });
//           }}
//         />
//            <Button
//           title="Kurangi Buah"
//           isDisabled={buah.length <= 1}
//           variant="solid"
//           colorSchema="red"
//           onClick={() => {
//             setBuah((prevBuah) => {
//               prevBuah.pop();
//               return [...prevBuah];
//             });
//           }}
//         />
       
//       </div>
//     </main>
//   );
// };

// export default Home;


export type Hasil = {
  mata_pelajaran : string;
  nilai: string;
};

const Home = () => {
  let [data, setData] = useState<Hasil>({
    mata_pelajaran: "",
    nilai: "",
  });

  let [pelajaran, setPelajaran] = useState<Hasil[]>([
    {
      mata_pelajaran: "kimia",
      nilai: "70",
    },
  ]);

  return (
    <main className="space-y-5">
      {/* <h1>Latihan</h1> */}
      {JSON.stringify(data)}
      {/* <Card mata_pelajaran="Matematika" nilai={90} /> */}

      {pelajaran.map((item, i) => {
        return (
          <Kartu
            mata_pelajaran={item.mata_pelajaran}
            nilai={item.nilai}
            key={i}
          />
        );
      })}

      <div className="flex flex-grid gap-5">
        <Button
          title="Fisika"
          variant="solid"
          colorSchema="blue"
          isDisabled={data.mata_pelajaran=== "fisika"}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                mata_pelajaran: "fisika",
              };
            });
          }}
        />
        <Button
          title="Biologi"
          isDisabled={data.mata_pelajaran === "biologi"}
          variant="solid"
          colorSchema="green"
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                mata_pelajaran: "biologi",
              };
            });
          }}
        />
        <Button
          title="Kimia"
          isDisabled={data.mata_pelajaran === "kimia"}
          variant="solid"
          colorSchema="red"
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                mata_pelajaran: "kimia",
              };
            });
          }}
        />
      </div>

      <div className="flex flex-grid gap-5">
        <Button
          title="70"
          colorSchema="red"
          variant="solid"
          isDisabled={data.nilai === "70"}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                nilai: "70",
              };
            });
          }}
        />
        <Button
          title="80"
          colorSchema="red"
          variant="solid"
          isDisabled={data.nilai === "80"}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                nilai: "80",
              };
            });
          }}
        />
        <Button
          title="90"
          colorSchema="blue"
          variant="solid"
          isDisabled={data.nilai === "90"}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                nilai: "90",
              };
            });
          }}
        />
        <Button
          title="100"
          colorSchema="green"
          variant="solid"
          isDisabled={data.nilai === "100"}
          onClick={() => {
            setData((prev) => {
              return {
                ...prev,
                nilai: "100",
              };
            });
          }}
        />
      </div>

      <Button
        title="Simpan"
        colorSchema="red"
        variant="solid"
        isDisabled={data.mata_pelajaran == "" || data.nilai == ""}
        onClick={() => {
          setPelajaran((prev) => {
            return [
              ...prev,
              {
                mata_pelajaran: data.mata_pelajaran,
                nilai: data.nilai,
              },
            ];
          });
          setData((prev) => {
            return {
              ...prev,
              mata_pelajaran: "",
              nilai: "",
            };
          });
        }}
      />

</main> 
  )
}
export default Home;