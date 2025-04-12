
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force refresh of modules
createRoot(document.getElementById("root")!).render(<App />);
