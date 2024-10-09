import { useState } from "react";
import arrow from "./assets/double.png";
import "./main.css";
import node from "./assets/node.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import postgres from "./assets/postgres.png";
import css from "./assets/css.png";
import html from "./assets/html.png";
import python from "./assets/python.png";
import flask from "./assets/flask.png";


function Main() {
  const [showKnowMe, setShowKnowMe] = useState(true);
  const [cloudsUp, setCloudsUp] = useState(false);

  const technologies = ['JavaScript', 'React', 'PostgreSql', 'CSS', 'HTML', 'Node.js', 'Python',  'Flask'];

  const logos = [js, react, postgres, css, html, node, python,  flask];


  const handleNewPage = () => {
    setShowKnowMe(false); // Esconde o botão
    setCloudsUp(true); // Anima as nuvens subindo e a tela ficando branca
  };

  return (
    <div className={`container ${cloudsUp ? "clouds-up" : ""}`}>
      <div className="main-container">
        
        {showKnowMe && (<div className="animated-text apresentation">
          <span>Hi, I'm Davi!</span>
        </div>)}
        {showKnowMe && (<div className="animated-text iam">
          <span>I am a full stack developer</span>
        </div>)}
        {showKnowMe && (
          <div onClick={handleNewPage} className="animated-text know-me">
            <span>Get to know me better</span>
            <img src={arrow} alt="Arrow" />
          </div>
        )}
      </div>

      <div className={`backgroundContainer`}>
        <section>
          <div className="air air1"></div>
          <div className="air air2"></div>
          <div className="air air3"></div>
          <div className="air air4"></div>
        </section>
      </div>

     {showKnowMe && (<div className="bubble-container">
        {technologies.map((tech, index) => (
          <div key={index} className={`bubble bubble-${index + 1}`}>
            <img src={logos[index]} alt={`${tech} logo`} />
            {tech}
          </div>
        ))}
      </div>)}
    </div>
  );
}

export default Main;
