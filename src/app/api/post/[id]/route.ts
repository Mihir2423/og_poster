import { connectToDB } from "@/lib/db";
import Post from "@/lib/models/post.model";

export async function GET(req: Request, context: { params: { id: string } }) {
  try {
    await connectToDB();
    const { id } = context.params;
    const post = await Post.findById(id);
    if (!post) {
      return new Response(JSON.stringify({ error: "Post not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}