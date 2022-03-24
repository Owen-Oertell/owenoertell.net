import './cm/Serif/cmun-serif.css';
import './App.css';
import mathcalO from './mathcalO.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoodreadsG, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <img src={mathcalO} alt="" />
      <h3>Hello! My name is Owen Oertell.</h3>
      <p>I am a computer science, math, and quantitative finance enthusiast.</p>

      <div className='text'>
        <p className='info'>I am a senior at Chamblee High School, looking to double major in mathematics and computer science.</p>
        <p className='info'>I work as head of engineering at <a className='hyper' href='https://ystemandchess.com'>Y STEM and Chess</a>, a researcher at Dickson Lab (Georgia Institute of Technology), and co-founder of <a className='hyper' href='https://prepbyai.com'>PrepByAI</a>.</p>
      </div>

      <div className='links'>
        <a className='link github' href='https://github.com/owen-oertell'>
          <span >
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>

        <a className='link linkedin' href='https://www.linkedin.com/in/owen-oertell/'>
          <span>
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </a>

        <a className='link goodreads' href='https://www.goodreads.com/honoredtarget'>
          <span>
            <FontAwesomeIcon icon={faGoodreadsG} />
          </span>
        </a>

        <a className='link email' href='mailto:owen@oertell.net'>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </a>

        <a className='link resume' href='https://resume.owenoertell.com'>
          <span>
            CV / Resumé
          </span>
        </a>

        <a className='link resume' href='https://blog.owenoertell.com'>
          <span>
            Blog
          </span>
        </a>

      </div>

      <hr />

      <div className="footer">
        &copy; {new Date().getFullYear()} Owen Joshua Oertell
        <a className='hyper grey' href='mailto:owen@oertell.net'>owen@oertell.net</a>
      </div>
    </div>
  );
}

export default App;
