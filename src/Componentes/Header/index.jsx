import { Link } from "react-router-dom";
import Menus from "../Menus";

function Header() {

	const menus = [
		{
			menu:"Home",
			linkTo: "/"
		},
		{
			menu:"Sobre",
			linkTo: "/sobre"
		},
		{
			menu:"Serviços",
			linkTo: "/servicos"
		},
		{
			menu:"Contato",
			linkTo: "/contato"
		}
	]

  return (
    <header>
      <h1>Meu site</h1>
      <nav>
      <ul>
		<Menus dataMenus={menus}/>
	  </ul>
      </nav>
    </header>
  );
}

export default Header;