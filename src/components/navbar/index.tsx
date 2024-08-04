import React from "react";
import { Plus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormModal } from "@/components/modals";
type Props = {};

export const Navbar = (props: Props) => {
  return (
    <nav className="top-0 left-0 z-[99] fixed flex justify-between items-center border-gray-300 bg-white p-3 border-b w-full">
      <div className="flex items-center gap-2">
        <Zap />
        <h1>Posts</h1>
      </div>
      <div>
        <FormModal>
          <Button variant="custom">
            <Plus size={18} />
            <span>Create Post</span>
          </Button>
        </FormModal>
      </div>
    </nav>
  );
};
