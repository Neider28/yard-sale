import { useRouter } from 'next/router';
import { Footer } from '@components/Footer.jsx';
import { Header } from '@components/Header.jsx';

const Layout = ({ children }) => {
  const router = useRouter();
  const routes = ['/', '/checkout', '/my_account', '/my_orders'];

  return (
    <div>
      {
        routes.includes(router.pathname) && (<Header />)
      }
      {children}
      {
        routes.includes(router.pathname) && (<Footer />)
      }
    </div>
  );
};

export { Layout };