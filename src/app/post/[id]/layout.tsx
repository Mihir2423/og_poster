import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/${id}`);
  const data = await post.json();
  const title = data.title || "Generated OG of your posts";

  return {
    title: `OG POSTER | ${title}`,
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/og/${id}`,
          alt: "Generated OG of your posts",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
