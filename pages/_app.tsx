import type { AppProps } from 'next/app'
import "../styles/Navbar.scss"
import "../styles/Intro.scss";
import "../styles/IntroImages.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
