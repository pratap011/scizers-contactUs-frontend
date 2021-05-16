import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Header from './Components/Header.jsx';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Form/>
      <Banner/>
      </div>
      
    </div>
  );
}

export default App;
