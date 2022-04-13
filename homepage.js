










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
          {[<li>Ada Lovelace</li>, <li>Grace Hopper</li>, <li>Margaret Hamilton</li>]}
        </ul>
      </div>
    )
  }

ReactDOM.render(<HomePage />, app)