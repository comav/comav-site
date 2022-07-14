import FirstScreen from './screens/firstScreen';
import ProjectsScreen from './screens/projectsScreen';

import Menu from './components/menu';

import './App.css';
import './common.css';

function App() {

  return (
    <div className="App">
      <Menu />
      <FirstScreen />
      <ProjectsScreen />
    </div>
  );
}

export default App;
