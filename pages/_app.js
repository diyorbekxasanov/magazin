import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { GlobalStyle } from "../styles/globalStyle";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></Script>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
