import "../styles/globals.css";
import type { AppProps } from "next/app";
import {Footer, Navbar} from "../components/index";

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer/>
  </div>
);

export default App;
