import './assets/css/style.css'
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
function App() {

  return (
    <>
      <div className='box'>
      <div id="container">
          <Header text="Creating a Simple React Application"/>
          <div className='mainContent'>
            <Content/>
          </div>
          <Footer wish="I want to be a good Software Engineer"/>
      </div>
      </div>
    </>
  )
}

export default App
