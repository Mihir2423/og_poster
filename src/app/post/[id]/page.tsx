import { Post } from "@/components/posts/post";
import { PostSkeleton } from "@/components/posts/post-skeleton";
import { Wrong } from "@/components/posts/wrong";
import { getPostById } from "@/lib/actions/post.action";
import React, { Suspense } from "react";

const PostDetailPage = async ({ params }: ParamsProps) => {
  const data = await getPostById(params.id);
  if (!data.success || !data.data) {
    return <Wrong />;
  }
  return (
    <main className="flex justify-center items-center h-screen">
      <Suspense fallback={<PostSkeleton />}>
        <Post item={data.data} main={false} />
      </Suspense>
    </main>
  );
};

export default PostDetailPage;
