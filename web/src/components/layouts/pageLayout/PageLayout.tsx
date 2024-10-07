import Header from '@/components/layouts/header/Header';
import SideBar from '@/components/layouts/sideBar/SideBar';

const PageLayout = () => {
  return (
    <div className='flex'>
      <Header
        logoText='Logo'
        buttonText={['新規登録', 'ログイン']}
        onClickHandler={() => {}}
      />
      <SideBar />
    </div>
  );
};

export default PageLayout;
