import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function OrderCompletedPage() {
  return (
    <div className="flex flex-col items-center leading-7 h-screen !mt-20">
      <CheckCircleIcon className="text-green-600 !text-5xl" />
      <h1 className="text-5xl font-bold !mt-5 tracking-widest">
        Teşekkür Ederiz!
      </h1>
      <p className="text-md text-gray-600 max-w-2/5 text-justify !mt-6 ">
        Siparişiniz başarıyla alınmıştır. Ekibimiz siparişinizi en kısa sürede
        işleme alacaktır. Siparişinizle ilgili tüm detayları e-posta adresinize
        gönderdik. Eğer siparişinizle ilgili herhangi bir sorunuz varsa, lütfen
        bizimle iletişime geçmekten çekinmeyin.
      </p>
      <div className="absolute right-10 bottom-10">
        <ArrowRightAltIcon />
        <a href="/" className=" hover:underline">
          Anasayfaya Dön
        </a>
      </div>
    </div>
  );
}

export default OrderCompletedPage;
