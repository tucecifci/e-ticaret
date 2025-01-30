import './App.css'
import './index.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import React from 'react'; // React'i açıkça import edin
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';


function App() {

  return (
    <PageContainer>
      <Header />
      <RouterConfig />
      <Loading />
    </PageContainer>
  )
}

export default App
