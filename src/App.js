import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import menu from './menu.png'
import moi from './image/mm.jpg'
import img1 from './image/capture/img1.PNG'
import img2 from './image/capture/img2.PNG'
import img3 from './image/capture/img3.PNG'
import img4 from './image/capture/img4.PNG'
import React, {useState, useEffect} from 'react';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1,img2,img3,img4];
  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex)=>(prevIndex+1)%images.length);
    }, 4000);
    return () =>clearInterval(interval);
  }, [images])

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

      <section>
        <div className='section1' id='home'>
          <div className='myself'>
            <h1 className='title'>Hey, je m'appelle Julie</h1>
            <h3 class="text-animation">Je suis une <span></span></h3>
            <p>Etudiante à l'Ecole Nationale d'Informatique <br/> Tanambao FIANARANTSOA. <br/> En troisième année de licence professionnel.</p>
          </div>
          <img src={moi} className='moi' alt='Moi'/>
        </div>

        <div className='section2' id='skills'>
          <center><br/><br/><br/><br/><br/><br/>
            <h1>Mes compétences</h1>
          </center>
        </div>

        <div className='section3' id='project'>
          <center><br/><br/><br/><br/><br/><br/>
            <h1>Mes Projets</h1>
            <div className='bloc_projet'>
              <div>
                <img src={images[currentImageIndex]} alt="Image du diaporama"/>
                <span>
                  <p>Loremqklmhsv jkmjzakldfhq hekhdfgsdgfsgfdgfg gfrgetgzgrevz 'greggezrgz </p>
                  <p>Loremqklmhsv jkmjzakldfhq hekhdfgsdgfsgfdgfg gfrgetgzgrz </p>
                  <p>Loremqklmhsv jkmjzakldfhgfrgetgzgrevz 'greggezrgz </p>
                </span>
              </div>
              <div>
                <img src={images[currentImageIndex]} alt="Image du diaporama"/>
                <span>
                  <p>Loremqklmhsv jkmjzakldfhq hekhdfgsdgfsgfdgfg gfrgetgzgrevz 'greggezrgz </p>
                  <p>Loremqklmhsv jkmjzakldfhq hekhdfgsdgfsgfdgfg gfrgetgzgrz </p>
                  <p>Loremqklmhsv jkmjzakldfhgfrgetgzgrevz 'greggezrgz </p>
                </span>
              </div>
            </div> 
            <div className='bloc_projet'>
              <div>
                <img src={images[currentImageIndex]} alt="Image du diaporama"/>
                <span>
                  <p>Loremqklmhsv jkmjzakldfhq hekhdfgsdgfsgfdgfg gfrgetgzgrevz 'greggezrgz </p>
                  <p>Loremqklmhsv jkmjzakldfhq hekhdfgsdgfsgfdgfg gfrgetgzgrz </p>
                  <p>Loremqklmhsv jkmjzakldfhgfrgetgzgrevz 'greggezrgz </p>
                </span>
              </div>
              <div>
                <img src={images[currentImageIndex]} alt="Image du diaporama"/>
                <span>
                  <p>Loremqklmhsv jkmjzakldfhq hekhdfgsdgfsgfdgfg gfrgetgzgrevz 'greggezrgz </p>
                  <p>Loremqklmhsv jkmjzakldfhq hekhdfgsdgfsgfdgfg gfrgetgzgrz </p>
                  <p>Loremqklmhsv jkmjzakldfhgfrgetgzgrevz 'greggezrgz </p>
                </span>
              </div>
            </div>
          </center>
        </div>


        <div className='section4' id='contact'>
          <center><br/><br/><br/><br/><br/><br/>
            <h1>Contactez-moi</h1>
          </center>
        </div>

      </section>
    </>
  );
}

export default App;
