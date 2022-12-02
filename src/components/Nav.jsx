import logo from '../images/react-icon.png'

const Nav = () => (
    <nav>
        <div className="nav-logo">
            <img className="logo-icon" src={logo} />
            <h3>ReactFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
    </nav>
)

export default Nav