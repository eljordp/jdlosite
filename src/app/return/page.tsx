"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ReturnContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (sessionId) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {status === "loading" && (
          <p className="text-text-secondary text-lg">Loading...</p>
        )}
        {status === "success" && (
          <>
            <div className="text-5xl mb-6">&#10003;</div>
            <h1 className="text-3xl font-bold text-text mb-3">
              You&apos;re in.
            </h1>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
              Payment received. I&apos;ll reach out within 24 hours with your
              course access and next steps. Check your email.
            </p>
            <Link
              href="/"
              className="inline-block py-3 px-8 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              Back to Home
            </Link>
          </>
        )}
        {status === "error" && (
          <>
            <div className="text-5xl mb-6">&#8212;</div>
            <h1 className="text-3xl font-bold text-text mb-3">
              Something went wrong
            </h1>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
              No worries — reach out at jordan@jdlo.online and we&apos;ll sort
              it out.
            </p>
            <Link
              href="/"
              className="inline-block py-3 px-8 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              Back to Home
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default function ReturnPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex items-center justify-center">
          <p className="text-text-secondary text-lg">Loading...</p>
        </div>
      }
    >
      <ReturnContent />
    </Suspense>
  );
}
