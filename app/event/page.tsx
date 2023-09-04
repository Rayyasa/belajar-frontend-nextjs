"use client"; // gunakan use client karena ada onChange pda komponen
import { useState,ChangeEvent } from "react";
import Button from "../components/Latihan2";
import InputText from "../components/Latihan1";

// const Home = () => {
//   let [message, setMessage] = useState("hai"); // jika string, dengan data awal "hai"
//   let [count, setCount] = useState(0); // jika number , dengan data awal 0

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   const decrement = () => {
//     setCount((c) => c - 1);
//   };

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
//       <div>{count}</div>
//       <Button
//         title="Tambah"
//         variant="solid"
//         colorSchema="blue"
//         onClick={increment}
//       />
//       <Button
//         title="Kurang"
//         variant="solid"
//         colorSchema="red"
//         onClick={decrement}
//       />
//     </main>
//   );
// };

// export default Home;




const Home = () => {
  let [message, setMessage] = useState("hai"); // jika string, dengan data awal "hai"
  let [count, setCount] = useState(0); // jika number , dengan data awal 0

  let [payload, setPayload] = useState({
    name: "",
    password: "",
    email : "",
    alamat : ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPayload(() => {
      return {
        ...payload,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <main className="space-y-5 p-10">
      {JSON.stringify(payload)}

      <InputText
        id="name"
        name="name"
        value={payload.name}
        onChange={handleChange}
      />
      <InputText
        id="password"
        name="password"
        value={payload.password}
        onChange={handleChange}
      />
       <InputText
        id="email"
        name="email"
        value={payload.email}
        onChange={(e)=> {
          handleChange(e)
        }}
      />
       <InputText
        id="alamat"
        name="alamat"
        value={payload.alamat}
        onChange={(e)=> {
          handleChange(e)
        }}
      />
    </main>
  );
};

export default Home;