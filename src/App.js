import React from 'react';
import './styles.css';
import resume from './statics/resume.png';
import linkedin from './statics/linkedin.png';
import github from './statics/github.png';

export default function App() {
  return (
    <main className='App'>
      <section>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/jeremyfumeron/'
        >
          <img className='link' alt='LinkedIn' src={linkedin} /> Mon profil
          LinkedIn
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/JFeremy'
        >
          <img className='link' alt='Github' src={github} /> Mes dépôts Git
        </a>
      </section>
      <img className='resume' alt='Mon CV' src={resume} />
    </main>
  );
}
