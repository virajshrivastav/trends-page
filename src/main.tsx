import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";
import App from "./App";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="zomato-trends-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <App />
      </TooltipProvider>
    </ThemeProvider>
  </React.StrictMode>
);

