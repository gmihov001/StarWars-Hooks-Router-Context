import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	const [clickedDropDown, setClickedDropdown] = useState(false);
	const [matches, setMatches] = useState([]);

	const searchTerm = term => {
		if (term != "" && term != " ") {
			let peopleOrPlanets = [...store.characters, ...store.planets];
			let found = peopleOrPlanets.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
			setMatches(found);
		} else if (!term || term == " ") {
			setMatches([]);
		}
	};

	let show = "";
	if (clickedDropDown) show = "show";

	return (
		<nav className="navbar navbar-light header d-flex justify-content-between">
			<div className="container">
				<Link className="navbar-brand text-white" to="/">
					<img src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/cfd241b0-85a3-4363-87b1-51c6732af3fd" />
				</Link>

				<div className="nav-item dropdown d-flex">
					<div className="d-block me-3">
						<input
							className="nav-link dropdown-toggle me-2"
							onChange={e => {
								console.log(e.target.value);
								searchTerm(e.target.value);
							}}
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<ul
							className={matches.length > 0 ? "dropdown-menu show" : "d-none"}
							aria-labelledby="navbarDropdown">
							{matches.map((elm, index) => {
								console.log(elm);
								return (
									<li
										key={index}
										className="dropdown-item d-flex align-items-center justify-content-between">
										<Link
											to={{
												pathname: `/details/${index + 1}`,
												state: elm
											}}>
											{elm.name}
										</Link>
										&nbsp;&nbsp;
										<i
											className="fas fa-backspace"
											onClick={() => actions.deleteFromFavorites(elm)}
										/>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="d-block">
						<button
							className="nav-link faves btn btn-outline-secondary dropdown-toggle"
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

						<ul
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
						</ul>
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
