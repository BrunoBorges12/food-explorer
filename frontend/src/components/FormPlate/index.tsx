/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "../Container";
import { RxCaretLeft } from "react-icons/rx";
import {
  UploadOutlined,
  PlusOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Upload, Input, notification, Spin } from "antd";

import { useForm, FormProvider } from "react-hook-form";
import { InputAntd } from "../InputAntd";
import axios from "axios";
import { useEffect, useState } from "react";
import SelectAntd from "../Select";
const { TextArea } = Input;
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import getProduct from "@/fetch/product";

interface formData {
  price: string;
  name: string;
  file: Blob;
  category: string;
  description: string;
}
type propsFormaPlate = {
  update?: boolean;
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const FormPlate = ({ update }: propsFormaPlate) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const methods = useForm<formData>();
  const [isNotFile, setIsNotFile] = useState(true);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const { data: client } = useSession();

  const router = useRouter();

  const [api, contextHolder] = notification.useNotification();
  const onSubmit = async (data: formData) => {
    setLoading(true);
    if (!data.file) {
      alert("aqui");
      return;
    }

    const bodyFormData = new FormData();
    bodyFormData.append("price", data.price);
    bodyFormData.append("name", data.name);
    bodyFormData.append("category", data.category);
    bodyFormData.append("description", data.description);
    bodyFormData.append("file", data.file);

    try {
      if (!update) {
        const result = await axios.post(
          "http://127.0.0.1:5000/api/product",
          bodyFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + client?.acessToken,
            },
          }
        );
        if (result.status === 200) {
          api.open({
            message: "Dados Salvo com sucesso",
          });
        }
      } else {
        const update = await axios.put(
          `http://127.0.0.1:5000/api/product/${
            router.query.slug && router.query.slug[0]
          }`,
          bodyFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + client?.acessToken,
            },
          }
        );
        if (update.status === 200) {
          api.open({
            message: "Dados Salvo com sucesso",
          });
        }
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      api.open({
        message: `Ocorreu um  erro`,
      });
    }
  };
  const handlePreview = async (file: UploadFile) => {
    console.log("ok");
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
  };
  const uploadButton = (
    <div className=" text-red-800  hidden">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };

  useEffect(() => {
    if (update) {
      setLoading(true);
      const fetchData = async () => {
        if (router.query.slug) {
          const response = await fetch(
            `http://127.0.0.1:5000/api/product/${router.query.slug[0]}`,
            {
              headers: {
                Authorization: "Bearer " + client?.acessToken,
                "content-Type": "application/json",
              },
            }
          );
          const json = await response.json();
          console.log(json);
          setProduct(json);
          setFileList([
            {
              uid: "-1",
              name: "image.png",
              status: "done",
              // @ts-ignore
              url: `http://127.0.0.1:5000/upload/${json.img}`,
            },
          ]);
          setLoading(false);

          methods.setValue("description", json.description);
        }
      };

      fetchData();
    }
    if (update) {
      setIsNotFile(false);
    }
  }, [router]);
  return (
    <Spin wrapperClassName="z-[9] " spinning={loading} size="large">
      <Container className="py-24 ">
        {contextHolder}
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
              <div className=" flex  lg:items-center w-full  relative flex-wrap gap-5 flex-col lg:flex-row">
                {update && (
                  <div className=" flex flex-col gap-3 ">
                    <label
                      className=" font-roboto text-[16px] leading-160% text-light-400"
                      htmlFor="name"
                    >
                      Image do prato
                    </label>
                    <Upload
                      beforeUpload={(file) => {
                        setIsNotFile(false);
                        methods.setValue("file", file);
                      }}
                      data={{}}
                      onDrop={(file) => {
                        console.log(file);
                      }}
                      listType="picture-circle"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                  </div>
                )}
                <InputAntd
                  // @ts-ignore

                  value={product?.name}
                  label={"Nome"}
                  className="lg:w-[300px] w-full "
                  name="name"
                  placehold={"Ex: Salada"}
                  required={true}
                  htmlFor="name"
                  type="text"
                />
                <SelectAntd
                  value={
                    // @ts-ignore
                    product?.category
                  }
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
                  // @ts-ignore

                  value={product?.price ? product.price : ""}
                  className="lg:w-[223px] w-full"
                  name="price"
                  required={true}
                  htmlFor="price"
                  label={"Preço"}
                  type="number"
                />{" "}
                {!update && (
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
                )}
                <TextArea
                  onChange={(event) => {
                    methods.setValue("description", event.target.value);
                  }}
                  value={methods.getValues("description")}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  className=" bg-dark-800 text-light-100 placeholder:text-light-400"
                  rows={4}
                />
              </div>
              <div className=" flex   lg:justify-end">
                <Button
                  className="bg-tomato-400  mt-5  w-full rounded-[5px]  text-light-100 font-poppins lg:mt-6 lg:w-auto "
                  size="large"
                  loading={loading}
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
    </Spin>
  );
};
