import { Posts } from "@/components/posts";
import { PostSkeleton } from "@/components/posts/post-skeleton";
import { Wrong } from "@/components/posts/wrong";
import { getPosts } from "@/lib/actions/post.action";
import { Suspense } from "react";

export default async function Home() {
  const data = await getPosts();
  if (!data.success || !data.data) {
    return (
      <Wrong />
    );
  }

  return (
    <main className="flex justify-center py-20 min-h-screen">
      <Suspense
        fallback={
          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, index) => (
              <PostSkeleton key={index} />
            ))}
          </div>
        }
      >
        <Posts data={data?.data} />
      </Suspense>
    </main>
  );
}
