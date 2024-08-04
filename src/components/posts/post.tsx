import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Delete, EllipsisVertical, ShareIcon, UserCircle } from "lucide-react";
import Link from "next/link";
import { ErrorImage } from "./error-image";

export const Post = ({ item }: { item: PostProps }) => {
  return (
    <Link
      href={`/post/${item.id}`}
      className="shadow-gray-200 shadow-md my-6 p-4 rounded-xl w-[380px]"
    >
      <div className="z-[10] flex justify-between items-center">
        <UserCircle size={18} />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical size={18} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex justify-between items-center w-full">
              Share <ShareIcon size={14} />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between items-center w-full">
              Delete <Delete size={14} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {item?.image && (
        <div className="flex justify-center w-full">
          <ErrorImage image={item.image} />
        </div>
      )}
      <div className="flex flex-col border-gray-400 mt-3 pt-3 border-t">
        <h1 className="text-base text-black">{item.title}</h1>
        <p className="text-gray-900 text-sm">{item.description}</p>
      </div>
    </Link>
  );
};
