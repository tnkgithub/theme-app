export function LoadingSkelton() {
  return (
    <div className='grid-cols-26 m-2 grid gap-1'>
      {Array.from({ length: 156 }).map((_, index) => (
        <div
          key={index}
          className='h-[162px] w-[120px] animate-pulse bg-gray-500'
        ></div>
      ))}
    </div>
  );
}
