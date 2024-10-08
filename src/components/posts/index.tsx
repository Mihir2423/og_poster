import { Camera, CircleArrowOutUpRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { FormModal } from "@/components/modals";
import { Post } from "./post";

export const Posts = ({ data }: { data: PostProps[] }) => {
  return (
    <div>
      {Array.isArray(data) &&
        (data.length === 0 ? (
          <div className="flex flex-col items-center gap-3 pt-10">
            <div className="border-[2px] p-4 border-black rounded-full">
              <Camera size={42} />
            </div>
            <h1 className="text-black">No Posts Yet</h1>
            <FormModal>
              <Button variant="custom">
                Create One <CircleArrowOutUpRight size={20} />
              </Button>
            </FormModal>
          </div>
        ) : (
          data.map((item, index) => (
            <div key={index} className="flex flex-col gap-6">
              <Post item={item} main={true} />
            </div>
          ))
        ))}
    </div>
  );
};
