'use server';
import Background from "@/common/components/Background";
import "./globals.css";

export default async function Root({children}:{children: React.ReactNode}) {
    return(
        <html>
            <body className="w-screen h-screen overflow-hidden bg-primary lg:p-5 font-serif
                text-white">
                <Background />
                {children}
            </body>
        </html>
    )
}