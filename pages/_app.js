import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Layout/Header";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </SWRConfig>
    </SessionProvider>
  );
}
