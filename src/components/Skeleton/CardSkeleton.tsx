export function LoadingCard() {
  return (
    <li
      key={1}
      className="rounded-xl border bg-card text-card-foreground shadow bg-white"
    >
      <Loading />
      <div className="p-6 py-2">
        <p></p>
      </div>
      <div className="p-6 flex flex-row items-center justify-between space-y-0 py-2">
        <h3 className="tracking-tight text-sm font-medium"></h3>
      </div>
    </li>
  );
}

export function LoadingCards({ numOfCard = 4 }) {
  const cards = Array(numOfCard).fill("");
  return (
    <div className=" grid grid-cols-fluid gap-4 w-full">
      {cards?.map((card, index) => (
        <div
          key={index}
          className="rounded-xl border bg-card text-card-foreground shadow bg-white"
        >
          <Loading />
          <div className="p-6 py-2">
            <p></p>
          </div>
          <div className="p-6 flex flex-row items-center justify-between space-y-0 py-2">
            <h3 className="tracking-tight text-sm font-medium"></h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Loading() {
  return (
    <div className="flex  gap-8 items-center p-8">
      <h3 className="tracking-tight text-base font-semibold ">Loading...</h3>
      <div className="flex gap-1">
        <div className="animate-spin bg-[#0D9EDA] w-2 h-2"></div>
        <div className="animate-spin bg-[#13B04B] w-2 h-2"></div>
        <div className="animate-spin bg-[#F5A623] w-2 h-2"></div>
        <div className="animate-spin bg-[#DA121A] w-2 h-2"></div>
      </div>
    </div>
  );
}
