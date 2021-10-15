import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = props => {
	const { store, actions } = useContext(Context);

	const [clickedDropDown, setClickedDropdown] = useState(false);

	let show = "";
	if (clickedDropDown) show = "show";

	return (
		<nav className="navbar navbar-light header d-flex justify-content-between">
			<div className="container">
				<Link className="navbar-brand text-white" to="/">
					<img
						src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/cfd241b0-85a3-4363-87b1-51c6732af3fd"
						height="100px;"
						width="auto;"
					/>
				</Link>

				<div className="nav-item dropdown">
					<button
						className="nav-link faves btn btn-outline-dark dropdown-toggle"
						type="button"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						onClick={() => setClickedDropdown(!clickedDropDown)}>
						FAVORITES <span className="badge badge-secondary">{store.favorites.length}</span>
					</button>

					<div
						className={store.favorites.length > 0 ? "dropdown-menu " + show : "d-none"}
						aria-labelledby="navbarDropdown">
						{store.favorites.length > 0
							? store.favorites.map((elm, index) => (
									<li
										key={index}
										className="dropdown-item d-flex align-items-center justify-content-between">
										<Link
											to={{
												pathname: `/details/${index + 1}`,
												state: elm
											}}>
											{elm.entity.name}
										</Link>
										&nbsp;&nbsp;
										<i
											className="fas fa-backspace"
											onClick={() => actions.deleteFromFavorites(elm)}
										/>
									</li>
							  ))
							: null}
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	index: PropTypes.number
};

// export const Navbar = props => {
// 	const { store, actions } = useContext(Context);

// 	const [showDropdown, setShowDropdown] = useState(false);
// 	const [clickedDropDown, setClickedDropdown] = useState(false);

// 	let show = "";
// 	if (clickedDropDown) show = "show";

// 	return (
// 		<nav className="navbar navbar-light header d-flex justify-content-between">
// 			<div className="container">
// 				<Link className="navbar-brand text-white" to="/">
// 					<img
// 						src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/cfd241b0-85a3-4363-87b1-51c6732af3fd"
// 						height="100px;"
// 						width="auto;"
// 					/>
// 				</Link>
// 				<a className={"nav-item dropdown " + (showDropdown ? "show" : "")}>
// 					<button
// 						className="faves btn btn-outline-dark nav-link dropdown-toggle"
// 						href="#"
// 						id="navbarDropdown"
// 						role="button"
// 						data-toggle="dropdown"
// 						aria-haspopup="true"
// 						aria-expanded={clickedDropDown}
// 						onClick={() => setClickedDropdown(!clickedDropDown)}>
// 						FAVORITES <span className="badge badge-secondary">{store.favorites.length}</span>
// 					</button>
// 					<div
// 						className={store.favorites.length > 0 ? "dropdown-menu " + show : "d-none"}
// 						aria-labelledby="navbarDropdown">
// 						{store.favorites.length > 0
// 							? store.favorites.map((elm, index) => (
// 									<li
// 										key={index}
// 										className="dropdown-item d-flex align-items-center justify-content-between">
// 										<Link
// 											to={{
// 												pathname: `/details/${index + 1}`,
// 												state: elm
// 											}}>
// 											{elm.entity.name}
// 										</Link>
// 										&nbsp;&nbsp;
// 										<i
// 											className="fas fa-backspace"
// 											onClick={() => actions.deleteFromFavorites(elm)}
// 										/>
// 									</li>
// 							  ))
// 							: null}
// 					</div>
// 				</a>
// 			</div>
// 		</nav>
// 	);
// };

// Navbar.propTypes = {
// 	index: PropTypes.number
// };
