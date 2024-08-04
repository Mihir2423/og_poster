import { Post } from "@/components/posts/post";
import React from "react";

type Props = {};

const PostDetailPage = (props: Props) => {
  const data = {
    id: 1,
    title: "Title of the Post",
    image: "/post.png",
    description: "Description about the post, here we will add the content.",
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <Post item={data} />
    </main>
  );
};

export default PostDetailPage;
