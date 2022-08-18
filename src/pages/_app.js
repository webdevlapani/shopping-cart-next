import { ThemeProvider } from "@mui/material";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import theme from "../theme";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
