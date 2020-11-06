import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TodoList from './components/TodoList.jsx';
import Footer from './components/Footer';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <BrowserRouter>
      <div className="m-5">
        <TodoInput />
        <TodoList />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
