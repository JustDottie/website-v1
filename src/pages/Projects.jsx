import React from 'react';
import Card from '../components/Card';

export default function Projects() {
  return (
    <div className='projects'>
      <Card
        name='Pokédex'
        github='https://github.com/JustDottie/pokedex-react'
        imgUrl='https://pngimg.com/uploads/pokeball/pokeball_PNG30.png'
        demoUrl='https://pokedex-arwin.netlify.app/'
        skills='React PokéAPI Bootstrap Sass'
      />
      <Card
        name='Covid19-Map'
        github='https://github.com/JustDottie/covid19-react'
        imgUrl='https://pngimg.com/uploads/virus/virus_PNG53.png'
        demoUrl='https://covid19-arwin.netlify.app/'
        skills='React disease.sh-API Material-UI Sass'
      />
    </div>
  );
}
