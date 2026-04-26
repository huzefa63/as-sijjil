'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProtectRoutes() {
    const router = useRouter();
    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        if (!jwt) return router.push("/signin");
    },[router]);
}

export default ProtectRoutes;
