"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {
  image: string;
};

export const ErrorImage = ({ image }: Props) => {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <Image
      alt="post"
      src={imgSrc}
      width={300}
      height={300}
      className="rounded-md w-full max-w-[360px] max-h-[300px] object-center"
      onError={() => {
        setImgSrc("/error-image.png");
      }}
    />
  );
};
