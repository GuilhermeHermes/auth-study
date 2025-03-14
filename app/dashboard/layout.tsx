import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function dashboardLayout({
    children    
}: {
    children: React.ReactNode}) {
  return (

    <html lang="en">
      <body>
        <div className="space-y-6 text-center gap-11">
        {children}
        </div>
        </body>
    </html>
  );
}
