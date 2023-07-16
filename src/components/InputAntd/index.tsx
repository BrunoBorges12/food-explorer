/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useFormContext, Controller } from "react-hook-form";
import { Input, InputNumber } from "antd";
import classNames from "classnames";

type propsInputAntd = {
  name: string;
  htmlFor: string;
  className: string;
  type: string;
  label: string;
};
export const InputAntd = ({
  name,
  htmlFor,
  className,
  type,
  label,
}: propsInputAntd) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  console.log(errors);
  return (
    <div className=" flex flex-col  gap-3">
      <label
        className=" font-roboto text-[16px] leading-160% text-light-400"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange } }) => {
          if (type === "text") {
            return (
              <Input
                status={errors[name] ? "error" : ""}
                className={classNames(
                  "  bg-dark-800 text-white  placeholder:text-light-500 placeholder:font-roboto",
                  className
                )}
                onChange={onChange}
                size="large"
                id={htmlFor}
                name={name}
              />
            );
          } else {
            return (
              <InputNumber
                status={errors[name] ? "error" : ""}
                className={classNames(
                  "  bg-dark-800 text-white  placeholder:text-light-500 placeholder:font-roboto",
                  className
                )}
                onChange={(value) => onChange(value)}
                controls={false}
                size="large"
                formatter={(value) =>
                  `R$ ${value}`.replace(/([0-9]{2})$/g, ",$1")
                }
                parser={(displayValue) =>
                  displayValue
                    ? displayValue?.replace(/\R\$\s?|(,*)/g, "")
                    : "0"
                }
                placeholder="Nome do prato"
                id={htmlFor}
                name={name}
              />
            );
          }
        }}
      />
    </div>
  );
};
