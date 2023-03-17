import './App.css';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import MyProjects from './components/MyProjects/MyProjects';
import Knowledge from './components/Knowledge/Knowledge';
import ImageCard from './components/ImageCard/ImageCard';
import {Grid, Text, Link} from '@chakra-ui/react'

function App() {

  return (
    <div className="app">
      <Header 
        name="Juan Carlos Fernandez" 
        description="Soy desarrollador web FullStack en Madrid" 
        imageUrl="https://img.asmedia.epimg.net/resizer/kbIeQCFfKaUvmmAyMoaMplb8Jm4=/736x414/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/VK43Q4MKYFIEBKXO27TWD2XBQM.jpg"
      />
      <Contact 
        linkedinUrl="https://www.linkedin.com/in/juancfer/"
        githubUrl="https://github.com/Juancfer" 
        email="juanf1986@gmail.com" 
        phone="+34617280108"
      />
      <About 
        name="Juan Carlos Fernandez" 
        description="Soy licenciado en Comunicación Social, especialiasta en periodismo deportivo. Actualmente me dedico al mundo de la antipiratería digital, por lo que me llama más la atención todo lo relacionado con la tecnología y la progaramación, para conocer el trasfondo de todo lo que rodea el ecosistema pirata." 
        employment="Desarrollador Web FullStack" 
        dateBirth="04/12/1986" 
        location="Madrid, España"
      />
      <Text fontSize='3xl' align="center" pb="10">Estos son algunos de mis proyectos:</Text>
      <Grid templateColumns='repeat(2, 1fr)' gap={4} alignItems="center">
        <MyProjects imageUrl="/images/doodle.jpg" title="Doodle" description="Landing page para la web de google usando un diseño espcializado, mediante el uso de css"></MyProjects>
        <MyProjects imageUrl="/images/vicio.jpg" title="Vicio" description="Landing page para el grupo Vicio, realizado en un grid template de ordenación de elementos"></MyProjects>
        <MyProjects imageUrl="/images/starwars.jpg" title="Star Wars" description="Uso de API publica de Star Wars con todos los personajes de las peliculas, ubicaciones y detalles de cada film"></MyProjects>
        <MyProjects imageUrl="/images/rickandmorty.jpg" title="Rick & Morty" description="API publica de Rick & Morty. Un proyecto intenso mediante el uso de javascript puro y Sass"></MyProjects>
      </Grid>
      <Knowledge>
        <Grid templateColumns='repeat(2, 1fr)' gap={4} alignItems="center">
          <ImageCard imageUrl="/images/logohtml.jpg">
            <p>HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. 
              Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para 
              describir la apariencia de una página web (CSS) o la funcionalidad (JavaScript).</p>
            <Link pt="2" color="navy">https://developer.mozilla.org/es/docs/Web/HTML</Link>
          </ImageCard>
          <ImageCard imageUrl="/images/logoreact.png">
            <p>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de 
              facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. </p>
            <Link pt="5" color="navy">https://es.reactjs.org/</Link>
          </ImageCard>
          <ImageCard imageUrl="/images/logocss.png">
            <p>Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir 
              la presentación de documentos HTML o XML (en-US) (incluyendo varios lenguajes basados en XML como SVG, MathML o XHTML)</p>
            <Link pt="5" color="navy">https://developer.mozilla.org/es/docs/Web/CSS</Link>
          </ImageCard>
          <ImageCard imageUrl="/images/logojavascript.png">
            <p>JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte 
              para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).</p>
            <Link pt="5" color="navy">https://developer.mozilla.org/es/docs/Web/JavaScript</Link>
          </ImageCard>
        </Grid>
      </Knowledge>
    </div>
  );
}

export default App;
