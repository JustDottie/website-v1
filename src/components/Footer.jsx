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
        <ul>
          <li>
            <a
              className='socialLink'
              href='https://github.com/JustDottie'
              target='_blank'
              rel='noopener noreferrer'>
              <i class='fab fa-github-square' />
            </a>
          </li>
          <li>
            <a
              className='socialLink'
              href='https://www.linkedin.com/in/arwin-mavaji-7ab8661b3/'
              target='_blank'
              rel='noopener noreferrer'>
              <i class='fab fa-linkedin' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
