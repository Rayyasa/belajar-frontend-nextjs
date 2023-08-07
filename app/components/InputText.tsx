import clsx from "clsx";

interface InputProps {
  isError?: boolean;
  messageError?: string;
}

const InputText: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ messageError = 'wajib diisi', isError = false, ...props }) => {
  return (
    <section>
      <input
        className={clsx(`w-full h-8 border rounded px-2`, {
          "border-red-500" : isError === false,
          "border-gray-700" : isError === true,
        })}
        {...props}
      />
      {isError === true? (
        <p className="text-red-500 font-bold">{messageError}</p>
      ) : (
        <></>
      )
      }


    </section>
  );
};

export default InputText;
