import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import type { ChangeEvent, FC } from "react";

interface OptionItem {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: OptionItem[];
  name?: string;
  className?: string;
}

export const Select: FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  name,
  className,
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
      <div className="relative cursor-pointer">
        <select
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          className={clsx([
            className,
            "block w-full px-2 py-1 text-text placeholder-text/60 bg-banana border-black border-2 rounded-md outline-blue transition duration-150 ease-in-out appearance-none",
          ])}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};
