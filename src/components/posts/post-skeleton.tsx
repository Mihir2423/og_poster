import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export const PostSkeleton = (props: Props) => {
  return (
    <Skeleton className="bg-gray-400 shadow-gray-200 shadow-md my-6 p-4 rounded-xl w-[380px] h-fit">
      <div className="z-[10] flex justify-between items-center">
        <Skeleton className="rounded-full size-[18px]" />
        <Skeleton className="w-[4px] h-[15px]" />
      </div>
      <div className="flex justify-center py-2 w-full">
        <Skeleton className="rounded-md w-[360px] h-[270px]" />
      </div>
      <div className="flex flex-col gap-2 border-gray-400 mt-3 pt-3 border-t">
        <Skeleton className="rounded-md w-20 h-[18px]" />
        <Skeleton className="rounded-md w-32 h-[18px]" />
      </div>
    </Skeleton>
  );
};
