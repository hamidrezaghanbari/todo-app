import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit";
  disabled?: boolean;
  children: string | ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  type = "button",
  disabled = false,
  children,
  className = "",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`font-bold p-3 inline-flex items-center gap-2 justify-center rounded-full bg-primary shadow-md hover:bg-primary-light transition-all duration-200 ${className}`}
      type={type}
      disabled={disabled}
      {...(onClick && { onClick })}
    >
      {children}
    </button>
  );
};

export default Button;
