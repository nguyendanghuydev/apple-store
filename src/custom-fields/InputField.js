import { useField,ErrorMessage } from "formik";
function InputField({ label, type, ...props }) {
  const [field] = useField(props);
  const { name } = field;

  return (
    <div className="form__controls">
      <label htmlFor={name}>{label}</label>
      <input type={type} {...field} />
      <ErrorMessage component="div" name={name} className="error" ></ErrorMessage>
    </div>
  );
}

export default InputField;
