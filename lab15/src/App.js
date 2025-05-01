import './App.css';
import {useState} from 'react'

function App() {
  // set up an initial counter for the slice
  // let counter = 1
  // set up state
  const [counter, setCounter] = useState(1)
  // list of three messages
  const messages = ["I think, therefore I am", "I have a dream", "The only thing we have to fear is fear itslef"]

  // set state for open and close button
  const [isopen, setIsopen] = useState(true)

  // function to open a 'read more' paragraph
  const readmore = function(){
    setIsopen(!isopen)
  }

  return (
    <>
      <h1 className="title">Slice App by Makhai Morgan</h1>
      <section className="slicewrapper">
        <div className="numberWrapper">
          <div className={counter==1? "active":""}><p>1</p></div>
          <div className={counter==2? "active":""}><p>2</p></div>
          <div className={counter==3? "active":""}><p>3</p></div>
        </div>
        <p className="msg"><em>{messages[counter-1]}</em></p>
        <div className="btngroup">
          <button onClick={function(){if(counter>1)setCounter(counter-1)}}>Previous</button>
          <button onClick={function(){if(counter<messages.length)setCounter(counter+1)}}>Next</button>
        </div>
      </section>

      <h1 className='title'>Open and close button</h1>
      <div>
        <p><b>rapper (Pop Smoke)</b>, His early life and rap career</p>
        <button className='readmore_btn' onClick={readmore} >{isopen?"Hide":"Read More"}</button>
      </div>

      <section className='hideentext'>
        {
        (isopen) &&
        <p>Bashar Barakah Jackson (July 20, 1999 – February 19, 2020), known professionally as Pop Smoke, was an American rapper.Born and raised in Brooklyn, New York City, he rose to fame with the release of his 2019 singles "Welcome to the Party" and "Dior". He frequently collaborated with UK drill artists and producers, who employed more minimal and aggressive instrumentation than American drill artists from Chicago, reintroducing the sound as Brooklyn drill.Following his rise to fame, record producer Rico Beats introduced Pop Smoke to Steven Victor in April 2019. Victor would later have Pop Smoke sign a recording contract with Victor Victor Worldwide and Republic Records. He released his debut mixtape Meet the Woo in July 2019.His second mixtape, Meet the Woo 2, was released on February 7, 2020, and debuted at number seven on the Billboard 200, becoming the rapper's first top-10 project in the United States.Twelve days after the mixtape's release, Pop Smoke was murdered during a home invasion in Los Angeles. Fellow New York rapper 50 Cent served as executive producer for his posthumous debut studio album, Shoot for the Stars, Aim for the Moon (2020), which debuted atop the Billboard 200; all 19 of its tracks entered the Billboard Hot 100. The album also spawned the singles "For the Night" (featuring DaBaby and Lil Baby) and "What You Know Bout Love". The following year, Republic released Pop Smoke's second studio album, Faith (2021).</p>
      }
      </section>
    </>
  );
}

export default App;
