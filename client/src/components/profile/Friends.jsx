export default function Friends() {
  return (
    <div>
      <span className="font-semibold text-xl">Amigos</span>
      <div className="flex gap-2.5 items-center overflow-hidden">
        <img
          className="w-[40px] h-full rounded-full border-2 border-pink-500"
          src="/img/profile_default.webp"
          alt={"Amigo 1"}
          loading="lazy"
        />
        <img
          className="w-[40px] h-full rounded-full border-2 border-pink-500"
          src="/img/profile_default.webp"
          alt={"Amigo 2"}
          loading="lazy"
        />
        <img
          className="w-[40px] h-full rounded-full border-2 border-pink-500"
          src="/img/profile_default.webp"
          alt={"Amigo 3"}
          loading="lazy"
        />
        <img
          className="w-[40px] h-full rounded-full border-2 border-pink-500"
          src="/img/profile_default.webp"
          alt={"Amigo 4"}
          loading="lazy"
        />
      </div>
    </div>
  );
}
