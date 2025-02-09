import "./App.css";
import "./index.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import React from "react"; // React'i açıkça import edin
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <PageContainer>
      <ToastContainer position="top-right" autoClose={1000} />

      <Header />
      <RouterConfig />
      <Loading />
    </PageContainer>
  );
}

export default App;
