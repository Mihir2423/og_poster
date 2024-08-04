"use client";

import { deletePost } from "@/lib/actions/post.action";
import { Delete, Loader2 } from "lucide-react";
import React, { useTransition } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

type Props = {
  id: string;
};

export const DeletePost = ({ id }: Props) => {
  const [isPending, startTransition] = useTransition();
  const handleDelete = async () => {
    startTransition(() => {
      deletePost(id).then((data) => {
        if (!data.success) {
          alert(data.message);
        }
      });
    });
  };
  return isPending ? (
    <Loader2 className="animate-spin" size={14} />
  ) : (
    <DropdownMenuItem
      onClick={() => {
        if (!isPending) {
          handleDelete();
        }
      }}
      className="flex justify-between items-center w-full"
    >
      Delete <Delete size={14} />
    </DropdownMenuItem>
  );
};
