import Menu from './components/menu';
import Avatar from './components/avatar';
import Projects from './screens/projects';
import ContactMe from './components/contact';

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
      <h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt dapibus felis, nec sollicitudin leo condimentum nec. Nulla eget scelerisque ipsum. Maecenas varius pharetra diam, at eleifend eros aliquet at. Duis a viverra nulla. Suspendisse risus urna, interdum ac sollicitudin ac, dictum id lacus. Ut vitae libero felis. Duis sit amet turpis in nibh tristique pulvinar et a ligula. Suspendisse ligula tortor, molestie quis justo id, mollis iaculis mi. In ac est eleifend lectus mollis volutpat. Nulla tristique augue turpis, at pulvinar risus molestie id.

        Praesent est odio, sagittis eu tincidunt vel, ultrices nec lorem. Vestibulum enim mauris, varius sit amet diam id, eleifend dignissim libero. Ut ultricies congue enim non tempus. Vestibulum nec pellentesque turpis. Quisque in risus egestas, dapibus leo non, dapibus ex. Aliquam ornare in erat in vulputate. Sed nec eros accumsan nulla semper interdum tincidunt nec odio.
      </h1>
      <ContactMe />
    </div>
  );
}

export default App;
