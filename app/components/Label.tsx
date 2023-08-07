interface LabelProps {
  htmlFor: string;
  isRequired?: boolean;
  title:string
} 

const Label : React.FC<LabelProps> = ({htmlFor, isRequired = false, title}) => {
  return (
    <label htmlFor={htmlFor}>
      {title} {isRequired && <span className="text-red-600">*</span>}
    </label>
  )
}
export default Label;