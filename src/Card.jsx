function Card(props) {
  return (
    <div style={{ padding: 10, border: "2px solid black", width: 250, margin: "2px" }}>
      <div style={{ width: 250, height: 350 }}>
        <img 
          style={{ width: "100%", height: "100%" }}
          src={props.img} 
          alt="Movie Poster" 
        />
      </div>
      <p>{props.desc}</p>
    </div>
  )
}


export default Card;