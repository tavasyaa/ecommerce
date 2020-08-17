import React from 'react';
import '../App.css';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class Navigationbar extends React.Component {
	render(){
		return(
			<div>
				<Navbar type="dark" theme="primary" expand="md">
					<NavbarBrand href="#">Café Du Jour</NavbarBrand>
				</Navbar>
			</div>
		)
	}
}

export default Navigationbar;