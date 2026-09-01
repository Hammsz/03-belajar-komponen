import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">
        Ilmuwan yang luar biasa
      </h1>

      <Gallery />
    </section>
  );
}