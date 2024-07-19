'use server';
import Background from "@/common/components/Background";
import "./globals.css";

export default async function Root({children}:{children: React.ReactNode}) {
    return(
        <html>
            <body className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary p-5 font-serif
                gap-5 flex items-center justify-center text-white">
                <Background />
                {children}
            </body>
        </html>
    )
}