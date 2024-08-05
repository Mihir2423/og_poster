/* eslint-disable @next/next/no-img-element */
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
        <div tw="flex flex-col gap-2 items-center w-full h-full justify-center p-8 bg-white text-black text-base text-black">
          <div
            tw="shadow-gray-200 shadow-md my-6 p-4 rounded-xl w-[380px] flex flex-col relative"
            style={{
              background:
                "linear-gradient(180deg, rgba(252,244,244,1) 0%, rgba(234,234,247,1) 42%, rgba(0,0,0,0.6031600140056023) 80%)",
            }}
          >
            {post?.image && (
              <div tw="flex justify-center py-2 w-full">
                <img
                  src={post.image}
                  alt="image"
                  onError={(e) => {
                    e.currentTarget.src = "/error-image.png";
                  }}
                  width={300}
                  height={300}
                  tw="rounded-md w-full max-w-[360px] max-h-[300px] object-center"
                />
              </div>
            )}
            <div tw="flex flex-col border-gray-400 mt-3 pt-3 border-t">
              <p tw="text-[16px] p-0 m-0 text-black">
                {post.title || "No Title Provided"}
              </p>
              <p tw="text-[14px] text-gray-900 p-0 m-0">
                {post.description?.length > 40
                  ? post.description.substring(0, 40) + "..."
                  : post.description || "No Description Provided"}
              </p>
            </div>
          </div>
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
