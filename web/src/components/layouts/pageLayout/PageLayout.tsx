import Header from '@/components/layouts/header/Header';
import SideBar from '@/components/layouts/sideBar/SideBar';

const PageLayout = () => {
  return (
    <div className='flex'>
      <Header
        logoText='Logo'
        buttonText={['新規登録', 'ログイン']}
        buttonLink={['/register', '/login']}
      />
      <SideBar />
      <main className='flex-1'>main</main>
    </div>
  );
};

export default PageLayout;
