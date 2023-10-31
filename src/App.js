import './App.css';
import Details from './components/details/Details';
import Header from './components/header/Header';
import Pictogram from './reusables/pictogram/Pictogram';
import Modal from './components/modal/Modal';

function App() {
  return (
    <div className="App">
      <Modal />
      <div className='App-containment container'>
        <Header />
        <main className='d-md-flex pt-md-5'>
          <Pictogram />
          <Details />
        </main>
      </div>
    </div>
  )
}

export default App;
