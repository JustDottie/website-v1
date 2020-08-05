import React, { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
  render() {
    return (
      <div className='cardEffect'>
        <div className='face face1'>
          <div className='content'>
            <img src={this.props.imgUrl} alt='' />
            <h3>{this.props.name}</h3>
          </div>
        </div>
        <div className='face face2'>
          <div className='content'>
            <ul>
              {this.props.skills.split(' ').map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className='links'>
              <a href={this.props.github}>
                <i class='fab fa-github-square'></i>
              </a>
              <a href={this.props.demoUrl} className='demo'>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
