import { useState } from "react";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
