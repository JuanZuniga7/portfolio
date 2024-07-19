'use server';
import CodeWindowButton from "@/home/components/CodeWindowButton";
import Code from "@/home/components/Code";

export default async function IDE() {

    return (
        <section
            className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r
            to-[#0a0d37] h-fit w-full">
            <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row justify-end space-x-2">
                    <CodeWindowButton color="bg-green-400"/>
                    <CodeWindowButton color="bg-sky-400"/>
                    <CodeWindowButton color="bg-red-400"/>
                </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-3 lg:px-6 py-3 lg:py-6">
                <Code/>
            </div>
        </section>
    )
}