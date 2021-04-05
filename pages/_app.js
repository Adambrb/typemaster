import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{ breakpoints: ["375px", "768px", "1440px"] }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
