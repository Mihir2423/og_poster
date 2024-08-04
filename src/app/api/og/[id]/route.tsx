import Image from "next/image";
import { ImageResponse } from "next/og";

export async function GET(req: Request, context: any) {
  console.log("Full context:", JSON.stringify(context, null, 2));

  try {
    const { id } = context.params || {};

    // Fetch post data from the internal API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post/${id}`
    );
    const post = await response.json();

    if (response.status !== 200) {
      throw new Error(post.error || "Failed to fetch post");
    }

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 40,
            color: "black",
            background: "white",
            width: "100%",
            height: "100%",
            padding: "50px 200px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: 32,
            }}
          >
            {post.title || "No Title Provided"}
          </h1>
          <h1
            style={{
              fontSize: 32,
              transform: "translateY(-60px)",
            }}
          >
            {post.description?.length > 30 ? post.description.substring(0, 30) + "..." : post.description  || "No Description Provided"}
          </h1>
          {post?.image && (
            <img
              src={post.image}
              alt="image"
              width={360}
              height={360}
              style={{ borderRadius: 20, transform: "translateY(-60px)" }}
            />
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error: any) {
    console.error("Error generating OG image:", error);
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 40,
            color: "black",
            background: "white",
            width: "100%",
            height: "100%",
            padding: "50px 200px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          👋 Something Went Wrong: {error.message}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
