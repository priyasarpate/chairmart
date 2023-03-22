import type { AppProps } from 'next/app'
import "../styles/Navbar.scss"
import "../styles/Intro.scss";
import "../styles/IntroImages.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
