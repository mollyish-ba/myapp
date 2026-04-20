import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Firstcomponent from './Components/Firstcomponent';
import Taskcomponent from './Components/Taskcomponent';
import Recapday1 from './Components/Recapday1';
import Productscomponent from './Components/Productscomponent';
import Secondcomponent from './Components/Secondcomponent';
import Thirdcomponent from './Components/Thirdcomponent';
import Fourthcomponent from './Components/Fourthcomponent';
import Fifthcomponent from './Components/Fifthcomponent';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <header className="App-header">
          <h1>Introduction to ReactJS</h1>
        </header>

        {/* Nav links goes here  */}

        <nav>
          <Link to = "/first" > First Component </Link>
          <Link to = "/second" > Second Component </Link>
          <Link to = "/third" > Third Component </Link>
          <Link to = "/recap" > Recap Component </Link>
          <Link to = "/task" > Task Component </Link>
          <Link to = "/products" > Products Component </Link>
          <Link to = "/fourth" > Fourth Component </Link>
          <Link to = "/fifth" > Fifth Component </Link>
        </nav>

        <Routes>
            <Route path ='/first' element = {< Firstcomponent />} />
            <Route path ='/second' element = {< Secondcomponent />} />
            <Route path ='/third' element = {< Thirdcomponent />} />
            <Route path ='/recap' element = {< Recapday1 />} />
            <Route path ='/task' element = {< Taskcomponent />} />
            <Route path ='/products' element = {< Productscomponent />} />
            <Route path ='/fourth' element = {< Fourthcomponent />} />
            <Route path = '/fifth' element = {< Fifthcomponent />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
