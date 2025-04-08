import './App.css';
import User from "./comments"
import "./index.css"
// import images
import sheepicon from "./images/sheep_icon.svg"
import avocadoicon from "./images/avocado_icon.svg"
import businessmanicon from "./business_man_icon.svg"

function App() {
  return (
    <>
      <h1>User Comments</h1>
    <main className='maincontainer'>
      <User image={sheepicon} username="Mr. Sheep" date="04/06/25" usercomment="Great Job!"/>
      <User image={avocadoicon} username="Guacamole" date="04/02/25" usercomment="Well Done!"/>
      <User image={businessmanicon} username="Mr. Elon Musk" date="04/11/25" usercomment="Fantastic!"/>
    </main>
    </>
  );
}

export default App;
