export function LoadingSkelton() {
  return (
    <div className='m-2 grid grid-cols-26 gap-1'>
      {Array.from({ length: 156 }).map((_, index) => (
        <div key={index} className='flex justify-center bg-blue-400 '>
          <div className='bg-gray-500 animate-pulse' />
        </div>
      ))}
    </div>
  );
}
