import React from "react";
import { SnackbarProvider } from "notistack";
import RouteWrapper from "./routes/RouteWrapper";
import queryClient from "./constants/query-client";
import "tailwindcss/tailwind.css";
import LanguageProvider from "./providers/LanguageProvider";
import { QueryClientProvider } from "@tanstack/react-query";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          autoHideDuration={3000}
        >
          <RouteWrapper />
        </SnackbarProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
