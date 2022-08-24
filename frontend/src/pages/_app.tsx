import React from "react";
import { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/tailwind.css";
import "../styles/styles.css";
// import { QueryClient, QueryClientProvider } from "react-query";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from "@tanstack/react-query";

// import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import { appWithTranslation } from "@i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
