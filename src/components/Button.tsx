import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-xl bg-dark-500 px-8 py-4 text-white-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
