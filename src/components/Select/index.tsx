import React, { useState } from "react";
import { Radio, Select, Space } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import type { SelectProps, RadioChangeEvent } from "antd";

import { useFormContext, Controller } from "react-hook-form";
import classNames from "classnames";

type propsSelectAntd = {
  label: string;
  htmlFor: string;
  className?: string;
  name: string;
  options: { value: string; label: string }[];
};
const SelectAntd = ({
  label,
  htmlFor,
  className,
  name,
  options,
}: propsSelectAntd) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  console.log(errors);
  const styleTaiwind =
    "text-white [&>*:nth-child(1)]:bg-dark-800 [&>*:nth-child(1)]:text-light-100  [&>*:nth-child(2)]:text-light-100 [&>*:nth-child(2)]:bg-dark-800 [&>*:nth-child(3)]:text-light-100   placeholder:text-light-500 placeholder:font-roboto";
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
        render={({ field: { onChange } }) => {
          return (
            <Select
              size={"large"}
              defaultValue="Selecione um valor"
              onChange={onChange}
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
