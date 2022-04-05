import { HashRouter } from 'react-router-dom';

import Header from './components/header/index';
import Footer from './components/footer/index';
import Routs from './router/index'

import './css/App.css';

function App() {
  return (
    <div className="app">
     <HashRouter>
      <Header/>
      <div className="main">
       <Routs/>
      </div>
      <Footer/>
     </HashRouter>
    </div>
  );
}

export default App;
