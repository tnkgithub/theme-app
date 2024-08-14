import Header from '@/components/layouts/header/Header';
import SideBer from '@/components/layouts/sideBar/SideBar';
import HomeCard from './homeCard/HomeCard';

export default function Home() {
  return (
    <>
      <header className='sticky top-0 w-full'>
        <Header logoText='Archive App' />
      </header>
      <main>
        <div className='flex max-h-screen'>
          <div className='sticky left-0 top-0 border-r'>
            <SideBer
              buttonText={['画像一覧', 'タイトル一覧', 'オブジェクト一覧']}
            />
          </div>
          <div className='flex flex-col p-4'>
            <HomeCard
              title='画像一覧'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
              imagePath=''
            />
            <HomeCard
              title='タイトル一覧'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
              imagePath=''
            />
            <HomeCard
              title='タイトル一覧'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
              imagePath=''
            />
          </div>
        </div>
      </main>
    </>
  );
}
