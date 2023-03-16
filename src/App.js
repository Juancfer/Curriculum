import './App.css';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import MyProjects from './components/MyProjects/MyProjects';
import Knowledge from './components/Knowledge/Knowledge';
import ImageCard from './components/ImageCard/ImageCard';

function App() {

  return (
    <div className="app">
      <Header 
        name="Juan Carlos Fernandez" 
        description="Soy desarrollador web FullStack en Madrid" 
        imageUrl="https://img.asmedia.epimg.net/resizer/kbIeQCFfKaUvmmAyMoaMplb8Jm4=/736x414/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/VK43Q4MKYFIEBKXO27TWD2XBQM.jpg"
      />
      <Contact 
        linkedinUrl=""
        githubUrl="" 
        email="" 
        phone=""
      />
      <About 
        name="Juan Carlos Fernandez" 
        description="una descripcion mia" 
        employment="Desarrollador Web FullStack" 
        dateBirth="04/12/1986" 
        location="Madrid, España"
      />
      <div className="projects-list">
        <h2>Estos son algunos de mis proyectos:</h2>
        <MyProjects></MyProjects>
      </div>
      <Knowledge>
        <ImageCard>
          <p>Texto de la imagen</p>
        </ImageCard>
      </Knowledge>
    </div>
  );
}

export default App;
