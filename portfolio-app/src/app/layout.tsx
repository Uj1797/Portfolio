import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ujjwal Sharma | Data Engineer & Full Stack Developer",
  description: "Portfolio of Ujjwal Sharma - Data Engineer and Full Stack Developer specializing in database optimization, analytics platforms, and scalable web applications. Experience with React, Python, PostgreSQL, and GenAI technologies.",
  keywords: ["Data Engineer", "Full Stack Developer", "React", "Python", "PostgreSQL", "Data Science", "Portfolio"],
  authors: [{ name: "Ujjwal Sharma" }],
  openGraph: {
    title: "Ujjwal Sharma | Data Engineer & Full Stack Developer",
    description: "Transforming data into insights, and ideas into scalable solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
