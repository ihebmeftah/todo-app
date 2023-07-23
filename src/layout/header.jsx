import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../secuirty/authcontext";

export default function HeaderComponent() {
    const authcontext = useContext(AuthContext)
    console.log(++authcontext.number)
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
    <div className="container">
        <div className="row">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/welcome">Home</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/listTodos">Todos</Link></li>
                    </ul>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item fs-5"><Link className="nav-link" to="/authentification">Login</Link></li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="/authentification">Logout</Link></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

  );
}
