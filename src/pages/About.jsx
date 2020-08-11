import React from 'react';

export default function About() {
  return (
    <div className='about-div'>
      <div className='aboutme'>
        <h1 className='has-text-weight-semibold is-size-2-mobile is-size-2-touch is-size-1-tablet is-size-1-desktop is-size-1-widescreen is-size-1-fullhd'>
          About Me
        </h1>
        <p className='is-size-6-mobile is-size-6-touch is-size-5-tablet is-size-4-desktop is-size-3-widescreen is-size-3-fullhd'>
          Hello, I am a self-taught web developer from Hanover, Germany. My
          interest in web development started around 2 years ago and since then
          I have been creating applications for myself.
        </p>
      </div>
      <div className='skills'>
        <h1 className='has-text-weight-semibold is-size-2-mobile is-size-2-touch is-size-1-tablet is-size-1-desktop is-size-1-widescreen is-size-1-fullhd'>
          Skills
        </h1>
        <div className='figures is-size-3-mobile is-size-2-touch is-size-3-tablet is-size-1-desktop is-size-1-widescreen is-size-1-fullhd'>
          <figure>
            <i className='fab fa-html5'></i>
            <figcaption className='is-size-7-mobile is-size-7-touch is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-4-fullhd'>
              HTML5
            </figcaption>
          </figure>
          <figure>
            <i className='fab fa-css3-alt'></i>
            <figcaption className='is-size-7-mobile is-size-7-touch is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-4-fullhd'>
              CSS3
            </figcaption>
          </figure>
          <figure>
            <i className='fab fa-js'></i>
            <figcaption className='is-size-7-mobile is-size-7-touch is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-4-fullhd'>
              JavaScript
            </figcaption>
          </figure>
          <figure>
            <i className='fab fa-react'></i>
            <figcaption className='is-size-7-mobile is-size-7-touch is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-4-fullhd'>
              React
            </figcaption>
          </figure>
          <figure>
            <i className='fab fa-sass'></i>
            <figcaption className='is-size-7-mobile is-size-7-touch is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-4-fullhd'>
              Sass
            </figcaption>
          </figure>
        </div>
      </div>
      <div className='current'>
        <h1 className='has-text-weight-semibold is-size-2-mobile is-size-2-touch is-size-1-tablet is-size-1-desktop is-size-1-widescreen is-size-1-fullhd'>
          Currently Learning
        </h1>
        <div className='figures is-size-3-mobile is-size-2-touch is-size-3-tablet is-size-1-desktop is-size-1-widescreen is-size-1-fullhd'>
          <figure>
            <i class='fab fa-php'></i>
            <figcaption className='is-size-7-mobile is-size-7-touch is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-4-fullhd'>
              PHP{' '}
            </figcaption>
          </figure>
          <figure>
            <i class='fab fa-laravel'></i>
            <figcaption className='is-size-7-mobile is-size-7-touch is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-4-fullhd'>
              Laravel{' '}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
