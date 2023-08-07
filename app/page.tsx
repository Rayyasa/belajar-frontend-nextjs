'use client'
import Image from 'next/image'
import React from 'react';
import './globals.css';
import NavBar from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import Latihan from './components/Latihan';
import Button from './components/Button';
import Note from './components/Note';
import Container from './components/container';
import InputText from './components/InputText';


// Function Component
export default function Home() {
return (
  <main className="space-y-5">
  <h1>Hello World</h1>

  <InputText
        placeholder="username"
        type="text"
        isError
        messageError="Username not empty"
      />
      <InputText placeholder="******" type="passoword" isError />
      <InputText
        value={12}
        onChange={() => {
          console.log("ok");
        }}
      />


  <Button title="Simpan" isDisabled={false} />
  <Button title="cancel" isDisabled={true} />
  <Note title="Belajar ReactJS" status="warning">
    <p>Saya belajar React</p>
  </Note>
  <Note title="Belajar TypeScript" status="warning">
    <div className="bg-blue-500">
      <p className="text-white">Saya sedang belajar TypeScript</p>
    </div>
  </Note>

  <Note title="Belajar NestJS" status="warning">
    <div className="bg-green-500">
      <p className="text-white">
        Saya sedang belajar NestJS untuk menjadi backend developer
      </p>
    </div>
  </Note>

  <Note title='Belajar Front End' status='success'>
    <div className="bg-slate-500">
      <p className="text-white">
        Saya sedang belajar Front End Development
      </p>
    </div>
  </Note>
  <Note title='Belajar Front End' status='error'>
    <div className="bg-slate-500">
      <p className="text-white">
        Saya sedang belajar Front End Development
      </p>
    </div>
  </Note>

</main>
  );
}