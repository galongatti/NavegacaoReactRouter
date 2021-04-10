import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = (props) => (
	<aside className="Menu">
		<nav>
			<ul>
				<li>
					<Link to="/">Inicio</Link>
				</li>
				<li>
					<Link to="/about">Sobre</Link>
				</li>
				<li>
					<Link to="/param/123">Parametro #01</Link>
				</li>
				<li>
					<Link to="/param/teste">Parametro #02</Link>
				</li>
				<li>
					<Link to="/naoExiste">Não existe</Link>
				</li>
			</ul>
		</nav>
	</aside>
);

export default Menu;