import { useState } from 'react'

function Header(props) {
  return <h1>{props.title}</h1>
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
  const [likes, setLikes] = useState(1)

  function handleClick() {
    setLikes(likes*2)
  }
  
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  )
}
