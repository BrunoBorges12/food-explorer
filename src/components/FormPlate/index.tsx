/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "../Container";
import { RxCaretLeft } from "react-icons/rx";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Input } from "antd";

import { useForm, FormProvider } from "react-hook-form";
import { InputAntd } from "../InputAntd";
import axios from "axios";
import { useState } from "react";
const { TextArea } = Input;

interface formData {
  price: string;
  name: string;
  file: Blob;
  description: string;
}
export const FormPlate = () => {
  const methods = useForm<formData>();
  const [isNotFile, setIsNotFile] = useState(true);

  const onSubmit = (data: formData) => {
    if (!data.file) {
      return;
    }

    const bodyFormData = new FormData();
    bodyFormData.append("price", data.price);
    bodyFormData.append("name", data.name);
    bodyFormData.append("description", data.description);
    bodyFormData.append("file", data.file);
    axios.post("http://127.0.0.1:5000/api/product", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  return (
    <Container>
      <div className="flex flex-col mt-10 font-poppins text-light-300">
        <div className=" flex items-center cursor-pointer">
          <RxCaretLeft className=" w-10 h-10" />
          <span className="  font-bold leading-160% text-lg">Volta</span>
        </div>
        <h1 className=" text-xl font-medium mt-6 mb-8">Adicionar prato</h1>
        <FormProvider {...methods}>
          <form
            className=" max-w-[1120px] w-full"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className=" flex  items-center  relative flex-wrap gap-8">
              <div className=" flex flex-col gap-3 ">
                <label
                  className=" font-roboto text-[16px] leading-160% text-light-400"
                  htmlFor="name"
                >
                  Image do prato
                </label>
                <Upload
                  className=" flex items-center  "
                  beforeUpload={(file) => {
                    setIsNotFile(false);
                    methods.setValue("file", file);
                  }}
                  multiple={false}
                >
                  <Button
                    className=" flex items-center  text-light-100    h-[38px] "
                    icon={<UploadOutlined className="text-[24px]" />}
                  >
                    Seleciona uma Imagem
                  </Button>
                </Upload>
              </div>

              <InputAntd
                label={"Nome"}
                className="w-[432px]"
                name="name"
                htmlFor="name"
                type="text"
              />
              <InputAntd
                className="w-[100px]"
                name="price"
                htmlFor="price"
                label={"Preço"}
                type="number"
              />
              <TextArea
                onChange={(event) => {
                  methods.setValue("description", event.target.value);
                }}
                className=" bg-dark-800 text-light-100"
                rows={4}
              />
            </div>
            <Button type="primary" disabled={isNotFile}>
              Enviar
            </Button>
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};
