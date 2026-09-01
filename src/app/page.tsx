import Profile from "@/components/profile";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">
        Ilmuwan yang luar biasa
      </h1>

      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}