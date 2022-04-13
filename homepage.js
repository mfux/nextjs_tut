










const app = document.getElementById('app');
      
function Header(props) {
return <h1>{props.title}</h1>
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
  
    return (
      <div>
        <Header title="Develop. Preview. Ship. 🚀" />
        <ul>
          {names.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    )
  }

ReactDOM.render(<HomePage />, app)