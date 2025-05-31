import "@/app/globals.css";
import { ibmPlexSans, ibmPlexMono } from "@/app/fonts";

export const metadata = {
  title: "Better Chat - Fast Summarization",
  icons: {
    icon: "/images/converted.ico",
    shortcut: "/images/converted.ico",
  },
  description:
    "Better Chat is an AI-powered chatbot that allows you to chat with your data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased bg-neutral-50`}
      >
        {children}
      </body>
    </html>
  );
}
