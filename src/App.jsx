import './App.css'
import './index.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import React from 'react'; // React'i açıkça import edin
import ProductList from './components/ProductList';


function App() {

  return (
    <PageContainer>
      <Header />
      <ProductList />
    </PageContainer>
  )
}

export default App
