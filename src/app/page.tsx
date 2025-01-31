import Image from "next/image";
import sppg from "@public/icons/sppg_text.svg";
import { getSession } from "@src/lib";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  if (session === null) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
        <section className="bg-[#F5F6FA] p-4 h-[80%] grid gap-8 rounded-lg">
          <Image
            priority
            src={sppg}
            alt="close sidebar"
            className="fill-blue-500"
          />

          <Link
            className="bg-gradient-to-r text-center to-[#13B04B] from-[#0D9EDA] text-white px-4 py-2 rounded-lg hover:scale-105 duration-300"
            href={"/login"}
          >
            Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <section className="bg-[#F5F6FA] p-4 h-[80%] grid gap-8 rounded-lg">
        <Image
          priority
          src={sppg}
          alt="close sidebar"
          className="fill-blue-500"
        />

        <Link
          className="bg-gradient-to-r text-center to-[#13B04B] from-[#0D9EDA] text-white px-4 py-2 rounded-lg hover:scale-105 duration-300"
          href={"/dashboard"}
        >
          Dashboard
        </Link>
      </section>
    </main>
  );
}
