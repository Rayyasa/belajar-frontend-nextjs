import clsx from "clsx";

interface InputProps {
  id:string;
  value: string;
  name:string;
  isError?:boolean;
  messageError?:string;
}

const InputText : React.FC <InputProps & React.InputHTMLAttributes<HTMLInputElement> > = ({
  messageError = 'Wajib di isi!', isError = false, id, value, name,...props
}) => {
  return (
    <section>
      <input id={id} value={value}  name={name} className={clsx(`w-full h-8 border rounded px-2`, {
        "border-red-600 border-2": isError,
        "border-slate-600" : !isError,
      })} 
      {...props}
      />
      { isError ? (
        <p className="text-red-400 font-extrabold">{messageError}</p>
      ) : (
        <></>
      )}
    </section>
  )
}

export default InputText;
