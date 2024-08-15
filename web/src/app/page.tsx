import Header from '@/components/layouts/header/Header';
import HomeCard from './homeCard/HomeCard';

type HomeProps = {
  logoText: string;
  pageTitle: string[];
  cardText: string[];
  cardImagePath: string[];
};

const Home = ({ logoText, pageTitle, cardText, cardImagePath }: HomeProps) => {
  return (
    <>
      <header className='sticky top-0 w-full'>
        <Header logoText={logoText} buttonText={pageTitle} />
      </header>
      <main>
        {/* <div className='container mx-auto my-0 flex h-full flex-col items-center justify-between space-y-8 p-10 xl:my-6 xl:flex-row xl:space-y-0'> */}
        <div className='container mx-auto flex h-full flex-wrap items-center justify-center p-10 lg:justify-between'>
          {pageTitle.map((title, index) => (
            <HomeCard
              title={title}
              description={cardText[index]}
              imagePath={cardImagePath[index]}
              key={index}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;

// 初期値を設定
Home.defaultProps = {
  logoText: 'Archive App',
  pageTitle: ['画像一覧', 'タイトル一覧', '物体名一覧'],
  cardText: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.',
  ],
  cardImagePath: ['', '', ''],
};
