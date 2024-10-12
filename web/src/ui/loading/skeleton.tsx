export function LoadingSkelton() {
  return (
    <div className='grid-cols-26 m-2 grid gap-1'>
      {Array.from({ length: 156 }).map((_, index) => (
        <div key={index} className='flex justify-center bg-blue-400 '>
          <div className='animate-pulse bg-gray-500' />
        </div>
      ))}
    </div>
  );
}
