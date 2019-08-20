import React, {Component} from 'react';
import './App.css';

function Word({title, isActive}) {
  return (
    <div className={isActive ? "word active" : "word"}>{title}</div>
  )
};


export default Word;
