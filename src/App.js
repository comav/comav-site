import Menu from './components/menu';
import Avatar from './components/avatar';
import Projects from './screens/projects';

import './App.css';
import './common.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="first-screen">
        <Avatar />
        <p className="opacity-change">Scroll further</p> 
      </div>
      <Projects />
      </div>
  );
}

export default App;
