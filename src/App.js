import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import menu from './menu.png'
function App() {
  return (
    <>
      <header class="header">
          <a href="#home" class="logo" id='lien'>Julie <span>Iarisoa</span></a>
          <nav class="navbar">
              <a href="#home" class="active" id='lien'>Home</a>
              <a href="#about" id='lien'>About</a>
              <a href="#skills" id='lien'>Skills</a>
              <a href="#project" id='lien'>Project</a>
              <a href="#contact" id='lien'>Contact</a>
              <img src={menu} className='menu_image' alt='Menu'/>
          </nav>
      </header>
    </>
  );
}

export default App;
