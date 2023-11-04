import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  name?: string;
  type?: string;
  customClass?: string;
  placeholder?: string;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: any;
  value?: string;
  disabled?: boolean;
  defaultValue?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  type,
  customClass,
  placeholder,
  required,
  register,
  errors,
  value,
  disabled,
  defaultValue,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="w-full">
      {label && (
        <div className="flex gap-1 items-center mb-1">
          <label
            className={`${
              errors?.name
                ? "text-[13px] leading-6 font-inter text-rose-500 font-semibold capitalize"
                : "text-[13px] leading-6 font-inter text-gray-40 font-semibold capitalize"
            }`}
          >
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        </div>
      )}
      {register ? (
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={defaultValue ? defaultValue : null}
          /* onChange={onChange ? onChange : () => {}} */
          className={`${
            customClass
              ? customClass
              : `${
                  errors?.name
                    ? "border-1 w-full bg-red-50 rounded-lg py-2 px-[10px] font-inter text-sm leading-6 placeholder:capitalize text-gray-90 focus:outline-rose-500"
                    : "border w-full bg-gray-5 rounded-lg border-border py-2 px-[10px] font-inter text-sm leading-6 placeholder:capitalize text-gray-90 focus:outline-purple"
                }`
          }`}
          {...register(name ? name : "noName", {
            required: required ? true : false,
          })}
        />
      ) : (
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          className={`${
            customClass
              ? customClass
              : `${
                  errors?.name
                    ? "border-1 w-full bg-red-50 rounded-lg py-2 px-[10px] font-inter text-sm leading-6 placeholder:capitalize text-gray-90 focus:outline-rose-500"
                    : "border w-full bg-gray-5 rounded-lg border-border py-2 px-[10px] font-inter text-sm leading-6 placeholder:capitalize text-gray-90 focus:outline-purple"
                }`
          }`}
          name={name}
          value={value}
          disabled={disabled}
          defaultValue={defaultValue ? defaultValue : null}
          onChange={onChange ? onChange : () => {}}
          required={required ? true : false}
        />
      )}
      {errors?.name && <p className="text-rose-500">{label} is required</p>}
    </div>
  );
};

export default InputField;
