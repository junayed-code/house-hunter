import { type InputHTMLAttributes } from "react";

interface CustomAttributes {
  label?: string | undefined;
  error?: string | undefined;
}

interface RequiredTypes
  extends Required<
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      "onChange" | "id" | "placeholder" | "value"
    >
  > {}

function Input({
  id,
  name,
  label,
  error,
  type = "text",
  className = "",
  ...rest
}: RequiredTypes & InputHTMLAttributes<HTMLInputElement> & CustomAttributes) {
  return (
    <label htmlFor={id}>
      {label && <span className="sr-only">{label}</span>}
      <input
        {...rest}
        id={id}
        type={type}
        name={name || id}
        className={"bg-transparent text-slate-800 outline-none px-4 py-3 border border-slate-300 focus:border-indigo-400 rounded-md w-full ".concat(
          className
        )}
      />
      {error && <p className="text-rose-500 text-sm pl-1">{error}</p>}
    </label>
  );
}

export default Input;
