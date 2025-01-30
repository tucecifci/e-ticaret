import './App.css'
import './index.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import React from 'react'; // React'i açıkça import edin
import RouterConfig from './config/RouterConfig';


function App() {

  return (
    <PageContainer>
      <Header />
      <RouterConfig />
    </PageContainer>
  )
}

export default App
