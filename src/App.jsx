import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Banner />
        <ProductList />
      </div>
      <Footer />
    </>
  )
}

export default App
