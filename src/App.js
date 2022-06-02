import Header from './Components/Header/Header';
import './App.css';
import Slideone from './Components/Body/slideone/Slideone';
import Slidetwo from './Components/Body/slidetwo/Slidetwo';
import Slidethree from './Components/Body/slidethree/Slidethree';
import Slidefour from './Components/Body/SlideFour/Slidefour';
import Slidefive from './Components/Body/slideFive/Slidefive';

function App() {
  return (
    <div className="App">
      <Slideone></Slideone>
      <Slidetwo></Slidetwo>
      <Slidethree></Slidethree>
      <Slidefour></Slidefour>
      <Slidefive></Slidefive>
    </div>
  );
}

export default App;
