import { useSelector } from "react-redux";
import AppRouter from "./routes";
import { useEffect } from "react";
import { RootState } from "./store";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "system");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);
  return <AppRouter />;
}

export default App;
