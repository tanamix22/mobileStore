import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout';

function Layout( { children }  ) {

  return (
    <div className='layout'>
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout