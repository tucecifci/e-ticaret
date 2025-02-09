import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function OrderCompletedPage() {
  return (
    <div className="flex flex-col items-center leading-7 h-screen !mt-20">
      <CheckCircleIcon className="text-green-600 !text-5xl" />
      <h1 className="text-3xl font-bold !mt-5 tracking-widest md:text-3xl lg:text-4xl xl:text-5xl ">
        Thanks!
      </h1>
      <p className="text-md text-gray-600 sm:max-w-2/5 text-justify !mt-6 ">
      Your order has been successfully received. Our team will process your order as soon as possible. We have sent all the details regarding your order to your email address. If you have any questions about your order, please do not hesitate to contact us.
      </p>
      <div className="absolute right-10 bottom-10">
        <ArrowRightAltIcon />
        <a href="/" className=" hover:underline">
          Homepage
        </a>
      </div>
    </div>
  );
}

export default OrderCompletedPage;
