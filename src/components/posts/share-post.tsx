"use client";

import React from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { ShareIcon } from "lucide-react";
import { toast } from "sonner";

type Props = {
  id: string;
};

export const SharePost = ({ id }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_API_URL}/post/${id}`
    );
    toast.success("Link copied");
  };
  return (
    <DropdownMenuItem
      onClick={handleCopy}
      className="flex justify-between items-center w-full"
    >
      Share <ShareIcon size={14} />
    </DropdownMenuItem>
  );
};
