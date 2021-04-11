import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{ breakpoints: ["376px", "769px", "1441px"] }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
