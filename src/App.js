import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Todos from './components/todos/Todos';
//import TodoList from './components/todos/TodoList';

function App() {
  return (
    <>
    <Navbar />
      <Switch>    {/*Switch and Route acts as links/connections to the pages */}
        <Route exact path='/' render={() => <Home />} />  
        <Route exact path='/todos' render={() => <Todos />} />
        <Route exact path='/about' render={() => <About />} />
      </Switch>
    <Footer />
    </>
  );
}

export default App;
