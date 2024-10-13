import Header from '@/components/layouts/header/Header';
import SideBar from '@/components/layouts/sideBar/SideBar';

const PageLayout = () => {
  return (
    <div className='flex'>
      <Header
        logoText='Logo'
        buttonText={['新規登録', 'ログイン']}
        buttonHref={['/signup', '/login']}
      />
      <SideBar posterId='1' isSliderOpen={false} onSliderChange={() => {}} />
    </div>
  );
};

export default PageLayout;
