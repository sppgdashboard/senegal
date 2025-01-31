export function WelcomeSkeleton() {
  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow bg-white w-full p-6">
      <div className="grid gap-2">
        <h1 className="bg-gray-300 animate-pulse w-[200px] h-[40px]"></h1>
        <h1 className="bg-gray-300 animate-pulse w-[150px] h-[30px]"></h1>
      </div>
    </section>
  );
}
export function ProfileSkeleton() {
  return (
    <div className="w-full bg-white inline-flex flex-col p-6 items-center rounded-2xl  justify-center border bg-card text-card-foreground shadow gap-4">
      <div
        className={` bg-gray-400 rounded-full border-gray-400 border-2 w-[150px] h-[150px] overflow-hidden flex justify-center items-center animate-pulse`}
      ></div>
      <h1 className="bg-gray-300 animate-pulse w-[200px] h-[40px]"></h1>
      <div className="flex flex-wrap justify-center items-start gap-2">
        <h1 className="bg-gray-300 animate-pulse w-[100px] h-[20px]"></h1>
        <h1 className="bg-gray-300 animate-pulse w-[100px] h-[20px]"></h1>
      </div>
    </div>
  );
}
