import React from 'react';

export default function Footer() {
  return (
    <div className='footer-div'>
      <div className='footer-left'>
        <p>
          Created using{' '}
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'>
            React
          </a>{' '}
          and{' '}
          <a href='https://bulma.io/' target='_blank' rel='noopener noreferrer'>
            Bulma
          </a>
          .
        </p>
      </div>
      <div className='footer-right'>
        <p>
          <a
            href='https://github.com/JustDottie/website-v1'
            target='_blank'
            rel='noopener noreferrer'>
            Source Code
          </a>
        </p>
      </div>
    </div>
  );
}
