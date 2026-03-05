import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Components/Firstcomponent';
import Taskcomponent from './Components/Taskcomponent';
import Recapday1 from './Components/Recapday1';
import Productscomponent from './Components/Productscomponent';
import Secondcomponent from './Components/Secondcomponent';
import Thirdcomponent from './Components/Thirdcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to ReactJS</h1>
      </header>
      <h2>About Me</h2>
      <p>I like reading novels, My favourite characters so far are: Reed Merrick and Lilith Whitlock. My biggest drive in life is making money and living THEE life.</p>
      <h3>Dream Destinations</h3>
      <p>I have always wanted to see the level of dirt in River Hudson. I would like to see the cherry blossoms in Japan.</p>
      <h4>Favourite Artists</h4>
      <p>My favourite artists vary with the type of mood I'm in. For example NF is the best virtual therapist anyone can ask for. But in order to get into it you have to gladly receive the truth unguarded facts he spits out when he raps.</p>

      <Firstcomponent/>
      <Taskcomponent/>
      <Recapday1/>
      <Productscomponent/>
      <Secondcomponent/>
      <Thirdcomponent/>
    </div>
  );
}

export default App;
