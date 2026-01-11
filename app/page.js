import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 py-24 px-10 bg-[#F2E0B2]/90 rounded-lg shadow">
        <Image
          src="/images/book1.jpg"
          alt="Brewed Tales"
          width={120}
          height={160}
          priority
        />

        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[#311313]">
            Welcome to Brewed Tales
          </h1>
          <p className="mt-4 text-[#62261F]">
            A cozy online bookstore with hand-picked recommendations for every
            reader to get started on their journey of learning new things.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/books"
            className="flex h-12 items-center justify-center rounded-full bg-[#62261F] px-6 text-[#F2E0B2] hover:bg-[#311313]"
          >
            Browse Books
          </Link>

          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border border-[#62261F] px-6 text-[#62261F] hover:bg-[#E6AD53]/40"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}