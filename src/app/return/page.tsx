"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";

function ReturnContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [accessUrl, setAccessUrl] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const created = useRef(false);

  useEffect(() => {
    if (created.current) return;
    created.current = true;

    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      setStatus("error");
      return;
    }

    // Get referral code if present
    const refCode = typeof window !== "undefined" ? localStorage.getItem("jdlo_ref") : null;

    // Verify session and create access
    fetch(`/api/return`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, refCode }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.code && data.url) {
          setAccessCode(data.code);
          setAccessUrl(data.url);
          setStatus("success");
        } else if (data.alreadyProcessed) {
          // Session already processed — still show success
          setStatus("success");
        } else {
          setStatus("success"); // Payment went through even if access creation had an issue
        }
      })
      .catch(() => {
        setStatus("success"); // Payment went through, access email will come
      });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <CustomCursor />
      <div className="max-w-md w-full text-center">
        {status === "loading" && (
          <div>
            <p className="text-text-secondary text-sm font-mono mb-2">
              Setting up your access...
            </p>
            <p className="text-text-muted text-[12px]">This takes a moment.</p>
          </div>
        )}
        {status === "success" && (
          <>
            <div className="text-5xl mb-6 text-accent">&#10003;</div>
            <h1 className="text-3xl font-bold text-text mb-3">
              You&apos;re in.
            </h1>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
              Payment received. Check your email for your access link and code.
            </p>

            {accessCode && (
              <div className="mb-6 p-5 border border-border rounded-2xl bg-surface/30">
                <p className="text-text-muted text-[11px] font-mono mb-2">
                  Your access code
                </p>
                <p className="text-text text-xl font-mono tracking-[0.15em] font-bold">
                  {accessCode}
                </p>
                <p className="text-text-muted text-[11px] mt-2">
                  Save this — you&apos;ll need it to access your course.
                </p>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {accessUrl && (
                <Link
                  href={accessUrl}
                  className="inline-block py-3 px-8 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #2997ff, #0a84ff)",
                  }}
                >
                  Start Course →
                </Link>
              )}
              <Link
                href="/my-courses"
                className="text-text-muted text-[13px] font-mono hover:text-accent transition-colors"
              >
                My Courses
              </Link>
              <Link
                href="/"
                className="text-text-muted text-[13px] font-mono hover:text-accent transition-colors"
              >
                Back to Home
              </Link>
            </div>
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
          <p className="text-text-secondary text-sm font-mono">
            Setting up your access...
          </p>
        </div>
      }
    >
      <ReturnContent />
    </Suspense>
  );
}
