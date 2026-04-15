import Link from "next/link"
import BackButton from "./_components/BackButton"

function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-3">
            <h1 className="font-bold text-amber-800 tracking-wider text-2xl">Page not found!</h1>
            <BackButton />
        </div>
    )
}

export default Page
