import Button from "../Latihan2";

interface BelajarProps {
  handleSubmit: (a:number, b: string) => void;
}

const BelajarEvent : React.FC<BelajarProps> = ({handleSubmit}) => {
  return (
    <section>
      <h1>Belajar Event</h1>
      <Button 
        title="tes"
        colorSchema="green"
        onClick={()=> {
          handleSubmit(200,'Ilham')
        }}
      />
    </section>
  );
};
export default BelajarEvent;