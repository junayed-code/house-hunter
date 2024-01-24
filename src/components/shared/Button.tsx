import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "1v" | "2v";
  outline?: boolean;
  children: React.ReactNode;
  className?: string;
}

function Button({
  children,
  variant = "1v",
  outline = false,
  className = "",
  ...rest
}: Readonly<Props>) {
  return (
    <button
      {...rest}
      className={"p-[0.4em_1.125em] rounded-3xl active:scale-95 duration-100 "
        .concat(
          variant === "1v"
            ? outline
              ? "border-[1.5px] border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-slate-100"
              : "bg-indigo-500 text-slate-100"
            : ""
        )
        .concat(
          variant === "2v"
            ? outline
              ? "border-[1.5px] border-emerald-400 text-emerald-500 hover:text-slate-800 hover:bg-emerald-400"
              : "bg-emerald-400 text-slate-800"
            : ""
        )
        .concat(className && " " + className)}
    >
      {children}
    </button>
  );
}

export default Button;
