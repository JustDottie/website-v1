import React from 'react';

export default function Resume() {
  return (
    <div className='resume'>
      <object src='Template.pdf' type='application/pdf'>
        <embed src='Template.pdf' type='application/pdf' />
      </object>
    </div>
  );
}
