import { FamilyProvider } from "./FamilyProfile";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Each page load starts a fresh, signed-in demonstration account.
try {
  localStorage.removeItem("sel-account-email-bindings");
  localStorage.removeItem("sel-view-permissions");
  sessionStorage.removeItem("sel-account-session");
} catch {
  // The prototype also runs when browser storage is unavailable.
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FamilyProvider><App /></FamilyProvider>
  </React.StrictMode>,
);
