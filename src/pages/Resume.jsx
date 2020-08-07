import React from 'react';

export default function Resume() {
  return (
    <div className='resume'>
      <h1
        className='
        has-text-weight-semibold
        is-size-2-mobile
        is-size-2-touch
        is-size-1-tablet
        is-size-1-desktop
        is-size-1-widescreen
        is-size-1-fullhd'>
        Education
      </h1>
      <ul className='uni'>
        <li className='is-size-6-mobile is-size-6-touch is-size-5-tablet is-size-4-desktop is-size-3-widescreen is-size-3-fullhd'>
          Leibniz University Hannover{' '}
          <img
            src='https://www.countryflags.io/de/flat/64.png'
            alt='germanyFlag'></img>
          <ul className='sub-list'>
            <li className='is-size-7-mobile is-size-7-touch is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-4-fullhd'>
              B.Sc. in Computer Science
            </li>
          </ul>
        </li>
        <li className='is-size-6-mobile is-size-6-touch is-size-5-tablet is-size-4-desktop is-size-3-widescreen is-size-3-fullhd'>
          Purdue University{' '}
          <img
            src='https://www.countryflags.io/us/flat/64.png'
            alt='usaFlag'></img>
          <ul className='sub-list'>
            <li className='is-size-7-mobile is-size-7-touch is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-4-fullhd'>
              2 Years of Computer Science as Undergraduate
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
