/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Select } from "antd";

import { useFormContext, Controller } from "react-hook-form";
import classNames from "classnames";

type propsSelectAntd = {
  label: string;
  htmlFor: string;
  className?: string;
  name: string;
  options: { value: string; label: string }[];
  value?: string;
};
const SelectAntd = ({
  label,
  htmlFor,
  className,
  name,
  options,
  value,
}: propsSelectAntd) => {
  const {
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  const styleTaiwind =
    "text-white [&>*:nth-child(1)]:bg-dark-800 [&>*:nth-child(1)]:text-light-100  [&>*:nth-child(2)]:text-light-100 [&>*:nth-child(2)]:bg-dark-800 [&>*:nth-child(3)]:text-light-100   placeholder:text-light-500 placeholder:font-roboto";

  useEffect(() => {
    if (value) {
      setValue(name, value);
    }
  }, [value]);
  return (
    <div className=" flex flex-col  gap-1">
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
        render={() => {
          return (
            <Select
              value={getValues(name)}
              size={"large"}
              defaultValue="Selecione um valor"
              onChange={(value) => setValue(name, value)}
              style={{ width: 200 }}
              options={options}
              className={classNames(styleTaiwind, className)}
              status={errors[name] ? "error" : ""}
            />
          );
        }}
      />
    </div>
  );
};

export default SelectAntd;
