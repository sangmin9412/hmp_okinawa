import { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Hyundai Mobility Passport in Okinawa",
  description: "",
  openGraph: {
    url: "https://hyundaimobilitypassport.com/okinawa/jp",
    //title: '공유시 보여질 제목',
    //description: '공유시 보여질 설명',
    images: [
      {
        url: `${process.env.PUBLIC_URL}/images/share_thumbnail_v2.png`,
        width: 1200,
        height: 628
      }
    ],
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
