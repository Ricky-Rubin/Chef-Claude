import { createRoot } from "react-dom/client"
import { App } from "/src/App.jsx"

const theRender = createRoot(document.getElementById('root'));
theRender.render(
  <App />
);
