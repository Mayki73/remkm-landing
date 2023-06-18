import React from "react";
import clsx from "clsx";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  textClassName?:string;
}

const Button: React.FC<IProps> = ({ children, className,textClassName, ...props }) => {
  return (
    <button
      className={clsx(
        "text-center text-black text-[14px] border border-black p-2 px-5 bg-white shadow-md shadow-black rounded-lg hover:bg-white/80 laptop:text-[18px] hover:scale-110",
        className
      )}
      {...props}
    >
      <p className={clsx("max-w-[100px]", textClassName)}>{children}</p>
    </button>
  );
};

export default Button;
