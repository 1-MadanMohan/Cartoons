import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import add from './add'
import Card from './Card'



function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: 'blue' }}><i>Nostalgic Cartoons</i></h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        
        <Card
          img="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7895972_b_v13_aa.jpg" 
          desc="Alien Force made us feel older too — darker stories, epic battles, and pure childhood magic"
        />

        <Card 
          img="https://m.media-amazon.com/images/I/81aRXFZ6d-L._UF1000,1000_QL80_.jpg"
          desc="Swinging through the city, Spider-Man made us believe anyone could be a hero."
        />

        <Card 
          img="https://i.pinimg.com/474x/0f/b1/69/0fb169517f06026db75b21eb7fd9e534.jpg"
          desc="Endless chases and hilarious fights we never got tired of. Tom & Jerry was pure childhood laughter."
        />

        <Card
          img="https://i.pinimg.com/736x/ef/2b/04/ef2b045bce82875d5cef98aa835b5548.jpg"
          desc="Doraemon’s gadgets made us dream of having a robot friend from the future."
        />
       
        <Card
          img="https://m.media-amazon.com/images/M/MV5BMTcyYTIwOWMtYTFjNS00NTA1LWE5ODItMmY4MjEwMTYxYjg5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          desc="Johnny Test’s crazy inventions and adventures kept our childhood wild and fun."
        />
        
        <Card
          img="https://m.media-amazon.com/images/I/51-X9QkeCPL.jpg"
          desc="Shinchan’s naughty jokes and mischief always left us laughing endlessly."
        />
      
        <Card 
          img="https://images.justwatch.com/poster/274866967/s718/jackie-chan-adventures.jpg"
          desc="Jackie Chan Adventures gave us thrilling fights mixed with magical adventures."
        />

        <Card
          img="https://m.media-amazon.com/images/M/MV5BODhiMjZkNDAtM2VhMS00ODQ5LTg1N2MtMDkyZWNhNjUwYzgzXkEyXkFqcGc@._V1_.jpg"
          desc="Ultra B was the cute blue alien buddy who turned every day into an adventure."
        />

        <Card
          img="https://m.media-amazon.com/images/M/MV5BMTgwOTgwNDk4OV5BMl5BanBnXkFtZTgwMTY3NDY3NzE@._V1_.jpg"
          desc="Roll No. 21 brought fun and mischief with Krishna’s clever tricks in school."  
        />

        <Card 
          img="https://m.media-amazon.com/images/I/71Q05OflpZL._UF894,1000_QL80_.jpg"
          desc="Chhota Bheem’s adventures in Dholakpur made every childhood day exciting and brave."
        />

        <Card
          img="https://m.media-amazon.com/images/I/81SKx9yhAiL._UF1000,1000_QL80_.jpg"
          desc="Krishna and Balarama’s playful adventures taught us friendship, mischief, and heroism."
        />

        <Card 
          img="https://m.media-amazon.com/images/M/MV5BYWVjODZjNDgtYjk4ZS00OTg5LTg5NDQtZDMxZDQ4ZmM5MGJmXkEyXkFqcGc@._V1_.jpg"
          desc="Ben 10 let us imagine turning into aliens and saving the world as a kid."
        />

      </div>
    </div>
  )
}

export default App
