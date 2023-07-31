interface Props {
 nama: string;
 kelas: string;
 ttl:string;
 umur:number;
 isSiswa:boolean;
}

function Latihan(props:Props) {
  return (
    <div className="container border border-red-400 mb-5 pb-5 shadow-lg">
      <dl>
        <dt>Nama: </dt>
        <dd>{props.nama}</dd>
        <dt>Kelas: </dt>
        <dd>{props.kelas}</dd>
        <dt>Tempat Tanggal Lahir: </dt>
        <dd>{props.ttl}</dd>
        <dt>Umur: </dt>
        <dd>{props.umur}</dd>
        <dt>Siswa?</dt>
        <dd>{props.isSiswa ? "iya": "tidak"}</dd>
      </dl>
    </div>
  );
}
export default Latihan;