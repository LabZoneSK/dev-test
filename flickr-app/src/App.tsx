import React from 'react';
import './styles/style.scss';
import CardList from './components/CardList'
import Header from './components/Header'
import Footer from './components/Footer'
import cardListSaga from './store/reducers/cardListSaga'
import { sagaMiddleware } from './store/store'

function App() {
  sagaMiddleware.run(cardListSaga)

  return (
    <div className="App">
      <Header/>
      <CardList columnsPerRow={3}/>
      <Footer/>
    </div>
  );
}

export default App;
