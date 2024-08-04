import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, ShareIcon, UserCircle } from "lucide-react";
import Link from "next/link";
import { DeletePost } from "./delete-post";
import { ErrorImage } from "./error-image";

export const Post = ({ item, main }: { item: PostProps; main: boolean }) => {
  return (
    <div className="shadow-gray-200 shadow-md my-6 p-4 rounded-xl w-[380px]">
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
            <DeletePost id={item._id} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {item?.image && (
        <Link
          href={`/post/${item._id}`}
          className="flex justify-center py-2 w-full"
        >
          <ErrorImage image={item.image} />
        </Link>
      )}
      <Link
        href={`/post/${item._id}`}
        className="flex flex-col border-gray-400 mt-3 pt-3 border-t"
      >
        <h1 className="text-base text-black">{item.title}</h1>
        <p className="text-gray-900 text-sm">{item.description}</p>
      </Link>
    </div>
  );
};
