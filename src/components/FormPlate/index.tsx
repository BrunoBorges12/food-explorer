/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "../Container";
import { RxCaretLeft } from "react-icons/rx";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Input } from "antd";

import { useForm, FormProvider } from "react-hook-form";
import { InputAntd } from "../InputAntd";
import axios from "axios";
import { useState } from "react";
import SelectAntd from "../Select";
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
    console.log(data);
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
      <div className="flex flex-col  font-poppins  text-light-300 lg:mt-8 ">
        <div className=" flex items-center cursor-pointer">
          <RxCaretLeft className=" w-10 h-10" />
          <span className="  font-bold leading-160% text-lg">Volta</span>
        </div>
        <h1 className="   mt-6 mb-5 lg:text-xl     lg:font-medium">
          Adicionar prato
        </h1>
        <FormProvider {...methods}>
          <form
            className=" lg:max-w-[1120px] w-full"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className=" flex  lg:items-center w-full  relative flex-wrap gap-8 flex-col lg:flex-row">
              <InputAntd
                label={"Nome"}
                className="lg:w-[432px] w-full "
                name="name"
                placehold={"Ex: Salada"}
                required={true}
                htmlFor="name"
                type="text"
              />
              <SelectAntd
                label="Categoria"
                htmlFor="category"
                name="category"
                className="lg:w-[332px] w-full"
                options={[
                  { label: "Reifeição", value: "refeicao" },
                  { label: "Sobremesa", value: "sobremesa" },
                  { label: "Bebidas", value: "bebida" },
                ]}
              />
              <InputAntd
                className="lg:w-[223px] w-full"
                name="price"
                required={true}
                htmlFor="price"
                label={"Preço"}
                type="number"
              />{" "}
              <div className=" flex flex-col gap-3 ">
                <label
                  className=" font-roboto text-[16px] leading-160% text-light-400"
                  htmlFor="name"
                >
                  Image do prato
                </label>
                <Upload
                  maxCount={1}
                  className="  flex flex-col    justify-center text-light-100   lg:items-center "
                  beforeUpload={(file) => {
                    setIsNotFile(false);
                    methods.setValue("file", file);
                  }}
                  multiple={false}
                >
                  <Button
                    className=" flex items-center  text-light-100   w-full  h-[38px] lg:w-auto "
                    icon={<UploadOutlined className="text-[24px]" />}
                  >
                    Seleciona uma Imagem
                  </Button>
                </Upload>
              </div>
              <TextArea
                onChange={(event) => {
                  methods.setValue("description", event.target.value);
                }}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                className=" bg-dark-800 text-light-100 placeholder:text-light-400"
                rows={4}
              />
            </div>
            <div className=" flex   lg:justify-end">
              <Button
                className="bg-tomato-400  mt-5  w-full rounded-[5px]  text-light-100 font-poppins lg:mt-6 lg:w-auto "
                size="large"
                htmlType="submit"
                disabled={isNotFile}
              >
                Salva Alteração
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};
