"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { type BaseSyntheticEvent } from "react";

const fileschema = z.object({
  forwardFiles: z
  .instanceof(FileList)
  .optional(),
})

type fileform = z.infer<typeof fileschema>



export default function HomePage() {
  const {
    register,
    handleSubmit
  } = useForm<fileform>({
    resolver: zodResolver(fileschema)
  })

  function onSubmit(data: fileform , e?: BaseSyntheticEvent) {
    e?.preventDefault()
    console.log(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" {...register("forwardFiles")} multiple />
      <button type="submit">Submit</button>
      </form>
    </main>
  );
}
