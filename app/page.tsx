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
// Function Component
export default function Home() {
return (
    <div className=''>
      <NavBar/>
      <Main/>
      <Container>
      <Latihan nama={'Rayya'} kelas={'XI-RPL'} ttl={'Jakarta, 16 November 2006'} umur={16} isSiswa={true}/>
      {/* <Latihan nama={'Rayya'} kelas={'XI-RPL'} ttl={'Jakarta, 16 Novemver 2006'} umur={16} isSiswa/>
      <Latihan nama={'Rayya'} kelas={'XI-RPL'} ttl={'Jakarta, 16 Novemver 2006'} umur={16} isSiswa={false}/> */}
      <Button title={'Simpan'} isDisabled={false}/>
      <Button title={'Hapus'} isDisabled={true}/>
      <Note title={'Belajar Next Js'}  status={'warning'}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse soluta rerum assumenda atque voluptas obcaecati debitis placeat ad molestias nam.</p>
        <Button title={'simpan'} isDisabled={true}/>
      </Note>
      <Note title={'Belajar React Js'}  status={'success'}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum possimus ex dolore error itaque velit eius doloribus voluptatibus non ipsam!</p>
        <Button title={'Simpan'} isDisabled/>
      </Note>
      <Note title={'Belajar Flutter'}  status={'error'}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum possimus ex dolore error itaque velit eius doloribus voluptatibus non ipsam!</p>
        <Button title={'Simpan'} isDisabled={false}/>
      </Note>
      </Container>
      <Footer/>
    </div>
  )
}