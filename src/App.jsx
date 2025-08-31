import React from 'react';
import './App.css';
import Card from './Card';
import cartoons from './data'; // import the data

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: 'blue' }}><i>Nostalgic Cartoons</i></h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {cartoons.map((cartoon, index) => (
          <Card key={index} img={cartoon.img} desc={cartoon.desc} />
        ))}
      </div>
    </div>
  );
}

export default App;
