'use server'
import Image from 'next/image'
import React from 'react'
import { redirect } from "next/navigation";
import { login } from "@src/lib";
import sppg from "@public/icons/sppg_text.svg"

export default async function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
    <section className="bg-[#F5F6FA] p-4 h-[80%] grid gap-8 rounded-lg">
      <Image
        priority
        src={sppg}
        alt="close sidebar"
        className="fill-blue-500"
      />
      <div>

      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/dashboard");
        }}
        className="grid gap-8"
      >
        <div className="grid gap-2">
          <label htmlFor="matric_number">Matric Number</label>
          <input
            type="text"
            name="matric_number"
            required
            className="p-2"
            placeholder="SCX/XXXX/XXX"
          />
        </div>
        <button
          className="bg-gradient-to-r to-[#13B04B] from-[#0D9EDA] text-white px-4 py-2 rounded-lg hover:scale-105 duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </section>
  </main>
  )
}
