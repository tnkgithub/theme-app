/* eslint-disable tailwindcss/no-custom-classname */
import SearchBox from '@/components/elements/searchBox/SearchBox';

const SideBar = () => {
  return (
    <aside className='w-300 top-100 md:top-150 lg:top-100 fixed z-10 h-screen border-r border-gray-300'>
      <div className='flex flex-col items-center'>
        <div className='w-280 container mx-auto my-4 flex flex-col items-center border-b py-8'>
          <div className='w-full py-8 text-left text-xl font-bold'>
            <p>類似資料の絞り込み</p>
          </div>
          <div className='w-250 text-md py-8 '>
            <ul className='grid gap-12'>
              <li>画像</li>
              <li>タイトル</li>
              <li>物体名</li>
            </ul>
          </div>
        </div>
        <div className='w-280 container mx-auto my-4 flex flex-col items-center border-b py-8'>
          <div className='w-full py-8 text-xl font-bold'>
            <p>絞り込み</p>
          </div>

          <div className='w-250 text-md py-8 '>
            <ul className='grid gap-12'>
              <li>画像が類似する資料</li>
              <li>タイトルが類似する資料</li>
              <li>同じ物体を含む資料</li>
            </ul>
          </div>
        </div>
        <div className='my-4 py-8'>
          <SearchBox placeholder='絞り込み' buttonText='絞り込み' />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
