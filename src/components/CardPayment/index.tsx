import { QRCode } from "antd";
import React from "react";
import { MdOutlinePix } from "react-icons/md";
export const CardPayment = () => {
  return (
    <div>
      <h1 className="  text-xl  text-light-300 mb-8">Pagamento</h1>
      <div className="  lg:w-[530px] h-[445px]  rounded-[0px_0px_8px_8px] border  border-dark-600">
        <div className=" flex">
          <span className=" py-3 w-[237px] cursor-pointer rounded-[0px_0px_8px_8px] px-4 flex   h-[81px] border-left border-light-600 bg-dark-800  gap-2  items-center justify-center">
            <MdOutlinePix></MdOutlinePix>

            <span className=" font-roboto">Pix</span>
          </span>
          <span className=" py-3 px-4 flex  w-[237px] h-[81px] gap-2  items-center justify-center">
            Crédito
          </span>
        </div>
        <div className="flex justify-center  items-center h-full pb-[5.75rem]">
          <QRCode
            size={250}
            color="#76797B"
            className="text-light-100"
            value={"ok você caiu" || "-"}
          />
        </div>
      </div>
    </div>
  );
};
