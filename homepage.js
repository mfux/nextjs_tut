










const app = document.getElementById('app');
      
function Header(props) {
return <h1>{props.title}</h1>
}

function HomePage() {
return (
    <div>
    {/* Nesting the Header component */}
    <Header title="React 🥶 "/>
    </div>
)
}

ReactDOM.render(<HomePage />, app)