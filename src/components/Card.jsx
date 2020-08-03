import React from 'react';
import './Card.scss';

export default function Card() {
  return (
    <div className='cardEffect'>
      <div className='face face1'>
        <div className='content'>
          <img
            src='https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true'
            alt=''
          />
          <h3>Design</h3>
        </div>
      </div>
      <div className='face face2'>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
            cumque minus iste veritatis provident at.
          </p>
          <a href='https://youtube.com'>Read More</a>
        </div>
      </div>
    </div>
  );
}
