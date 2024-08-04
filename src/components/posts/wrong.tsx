import { CircleXIcon } from "lucide-react";
import React from "react";

type Props = {};

export  const Wrong = (props: Props) => {
  return (
    <main className="flex justify-center py-20 min-h-screen">
      <div className="flex flex-col justify-center items-center gap-2">
        <CircleXIcon size={32} />
        <h1>Something Went Wrong!</h1>
      </div>
    </main>
  );
};
