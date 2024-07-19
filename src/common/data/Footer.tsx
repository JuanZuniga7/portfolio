'use server';

import Link from "next/link";

export default async function Footer(){
    return(
        <footer className="w-full flex items-center px-5 h-14 rounded-xl bg-white justify-between">
            <p className="text-gray-500 text-sm">© 2021 Juan Zuniga</p>
            <div className="flex flex-col items-center">
                <p>Powered with ❤️ by <Link className="text-indigo-600" href="">Rusted.Cor</Link></p>
                <p>Hosted on <Link href="https://vercel.com/" className="text-indigo-600">Vercel</Link></p>
            </div>
        </footer>
    )
}