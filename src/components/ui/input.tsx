import type { FC, ChangeEvent } from "react";
import clsx from "clsx";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({
  label,
  placeholder = "",
  value,
  type = "text",
  onChange,
  className,
  name,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          className="block mb-1 text-sm font-medium text-text"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className={clsx([
          className,
          "block w-full px-2 py-1 border-black border-2 rounded-md placeholder-text/60 transition duration-150 ease-in-out bg-banana outline-blue",
        ])}
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
