/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useFormContext, Controller } from "react-hook-form";
import { Input, InputNumber } from "antd";
import classNames from "classnames";
import { useEffect } from "react";

type propsInputAntd = {
  name: string;
  htmlFor: string;
  className: string;
  type: string;
  label: string;
  required: boolean;
  placehold?: string;
  value?: string;
};
export const InputAntd = ({
  name,
  htmlFor,
  className,
  type,
  label,
  required,
  placehold,
  value,
}: propsInputAntd) => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  useEffect(() => {
    if (value) {
      setValue(name, value);
    }
  }, [value, setValue]);
  console.log(name, getValues(name));
  return (
    <div className=" flex flex-col  gap-1">
      <label
        className=" font-roboto text-[16px] leading-160% text-light-400"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <Controller
        defaultValue={value ? value : ""}
        control={control}
        name={name}
        rules={{ required: required }}
        render={() => {
          if (type === "text") {
            return (
              <Input
                status={errors[name] ? "error" : ""}
                placeholder={placehold ? placehold : ""}
                className={classNames(
                  "  bg-dark-800 text-white  placeholder:text-light-500 placeholder:font-roboto",
                  className
                )}
                onChange={(e) => setValue(name, e.target.value)}
                size="large"
                id={htmlFor}
                name={name}
                value={getValues(name)}
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
                onChange={(valueNow) => setValue(name, valueNow)}
                controls={false}
                size="large"
                value={getValues(name)}
                formatter={(valueNow) =>
                  `R$ ${
                    getValues(name) === null ? valueNow : getValues(name)
                  }`.replace(/([0-9]{2})$/g, ",$1")
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
