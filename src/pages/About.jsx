import React from 'react';

export default function About() {
  return (
    <div className='about-div text-is-centered'>
      <div className='aboutme'>
        <h1>About Me</h1>
      </div>
      <div className='skills'>
        <figure>
          <i className='fab fa-html5'></i>
          <figcaption>HTML5</figcaption>
        </figure>
        <figure>
          <i className='fab fa-css3-alt'></i>
          <figcaption>CSS3</figcaption>
        </figure>
        <figure>
          <i className='fab fa-js'></i>
          <figcaption>JavaScript</figcaption>
        </figure>
        <figure>
          <i className='fab fa-react'></i>
          <figcaption>React</figcaption>
        </figure>
        <figure>
          <i className='fab fa-sass'></i>
          <figcaption>Sass</figcaption>
        </figure>
      </div>
    </div>
  );
}
