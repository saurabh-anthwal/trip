import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center">
        <Image
          src="/404/wrong.png"
          alt="soon"
          width={588}
          height={250}
          className=""
        />
        <p className="text-black text-lg mb-8">
          Your desired page was not found!
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
        >
          Return to the main page
        </Link>
      </div>
    </div>
  );
}
