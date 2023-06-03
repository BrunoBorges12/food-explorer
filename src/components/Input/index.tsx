import { useFormContext } from "react-hook-form";

type propsInput = {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
};

function Input({ type, name, label, placeholder = "" }: propsInput) {
  const { register } = useFormContext();
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
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder && placeholder}
      />
    </div>
  );
}

export default Input;
