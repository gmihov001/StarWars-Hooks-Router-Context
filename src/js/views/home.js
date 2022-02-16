import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Card2 } from "../components/card2";

export const Home = props => {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div className="container">
			<div className="row scroller">
				<h4 className="m-3">CHARACTERS</h4>
				<div className="d-flex flex-row">
					{store.characters
						? store.characters.map((elem, index) => {
								elem.imgUrl =
									"https://lumiere-a.akamaihd.net/v1/images/emily-swallow-interview-c_23a33c08.jpeg";
								return <Card2 className="textCustom" key={index} entity={elem} />;
						  })
						: null}
				</div>
			</div>
			<div className="row scroller">
				<h4 className="m-3">PLANETS</h4>
				<div className="d-flex flex-row">
					{store.planets
						? store.planets.map((elem, index) => {
								elem.imgUrl = "https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg";
								return <Card2 className="textCustom" key={index} entity={elem} />;
						  })
						: null}
				</div>
			</div>
		</div>
	);
};
