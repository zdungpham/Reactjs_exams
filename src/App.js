import logo from './logo.svg';
import './App.css';
import ListOfBook from './component/page/ListOfBook';
import Addbook from './component/page/AddBook';

function App() {
  return (
    <div className="App">
      <ListOfBook/>
      <Addbook/>
    </div>
  );
}

export default App;
