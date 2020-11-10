import logo from './logo.svg';
import './App.css';
import License from './Components/License'
function App() {

  // const image = public/my-pic.jpeg

  return (
    <div>
      <License image={'./my-pic.jpeg'} name='Jordan Long' state='California' address='3073 Santa Paula Drive' age='25'/>
    </div>
  );
}

export default App;
