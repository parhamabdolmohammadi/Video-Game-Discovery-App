import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: {
    //   retry: 3, //if a query fails react will retry that 3 more times
    //   cacheTime: 300_000, //if a query has no observer(no component is using that) that query is considered inactive and garbage collected
    //   staleTime: 10 * 1000, //how long a data is considered fresh this has the default value of zero which means the moment we get the data is treated as old so the next time we need the same piece of data react query will refresh fresh data from the backend
    //   refetchOnWindowFocus: false, //the default value is true
    //   refetchOnReconnect: false, //default value is true, if the client goes offline and come back online react query will refetch our query
    //   refetchOnMount: true, //default value is true our queries should be refetched when a component mounts for the first time
    // },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        ></ColorModeScript>
        <App />
        <ReactQueryDevtools />
      </ChakraProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
