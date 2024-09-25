import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl sm:text-3xl text-center sm:text-left font-bold">
          Subskrypcja wygasła... 😢
        </h1>
        <h2 className="text-xl sm:text-2xl text-center sm:text-left">
          Upewnij się, że usługa została opłacona i spróbuj ponownie.
        </h2>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
