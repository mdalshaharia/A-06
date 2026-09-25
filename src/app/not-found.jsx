import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b0d12] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#C2F800]">
          Error 404
        </p>

        <h1 className="mt-4 mb-4 text-5xl font-bold font-oswald">
          Page Not Found
        </h1>
        <Link
          href="/"
          className="text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

