'use client';

import { useRouter } from "next/navigation";

function BackButton() {
    const router = useRouter();
    return (
        <button className="bg-amber-800 text-white px-5 py-2 rounded-md" onClick={()=>router.push('/dashboard')}>back</button>
    )
}

export default BackButton
