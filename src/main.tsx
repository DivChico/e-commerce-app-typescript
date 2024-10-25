import { createRoot } from "react-dom/client";
import MainLayout from "./layouts/MainLayout/MainLayout";
import "./index.css";
import AppRouter from "@routes/AppRouter";
createRoot(document.getElementById("root")!).render(<AppRouter />);
