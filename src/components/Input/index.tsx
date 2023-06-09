/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type propsInput = {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  required: boolean;
  minLength?: number;
};

function Input({
  type,
  name,
  label,
  placeholder = "",
  required,
  minLength,
}: propsInput) {
  const {
    register,
    formState: { errors },
    setError,
  } = useFormContext();

  useEffect(() => {
    if (errors[name]?.type === "minLength") {
      console.log(errors);
      setError(name, { message: `tamanho minimo ${minLength} caracteres` });
    }
  }, [errors[name]]);

  return (
    <div className=" flex  flex-col  gap-2 relative  w-full">
      <label
        className="  text-light-400 text-base leading-140% "
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className=" relative  focus:border-light-200 rounded-lg  opacity-80 w-full  focus:shadow-2xl focus:shadow-dark-800  text-light-100  placeholder:text-light-400 bg-dark-900 gap-4 py-3 px-[14px]"
        {...register(name, { required, minLength: minLength })}
        type={type}
        name={name}
        placeholder={placeholder && placeholder}
        autoComplete="on"
      />
      {errors[name] && !errors[name]?.message && (
        <span className=" text-tomato-100 font-roboto text-xs">
          Por favor, preencha esse campo
        </span>
      )}
      {errors[name]?.message ? (
        <span className=" text-tomato-100 font-roboto text-xs capitalize">
          {errors[name]?.message as unknown as string}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Input;
