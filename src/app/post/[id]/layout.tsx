import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  return {
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
