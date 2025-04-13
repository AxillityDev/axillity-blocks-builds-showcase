
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from "./components/ui/toaster";

const rootElement = document.getElementById("root");

// Check if root element exists to prevent errors
if (!rootElement) {
  console.error("Root element not found");
} else {
  createRoot(rootElement).render(
    <>
      <App />
      <Toaster />
    </>
  );
}
