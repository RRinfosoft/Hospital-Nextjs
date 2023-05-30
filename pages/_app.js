import '@/styles/globals.css'
import Link from 'next/link';
import Header from './Header/Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App({ Component, pageProps }) {
  return<>
<Header/>

  <Component {...pageProps} />
  
  <Footer/>
  </> 
}


