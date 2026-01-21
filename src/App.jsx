import { useEffect } from "react";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home";
import { useThemeStore } from "./components/stores/useThemeStore";

function App() {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
