import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card2 = props => {
	const { store, actions } = useContext(Context);

	var data = props.entity;
	var isFav = store.favorites.find(fav => fav.name == data.name);
	console.log("isFave", isFav);

	var propArr = [];
	for (let property in data) {
		propArr.push({ propname: property, propvalue: data[property] });
	}
	console.log("propArr", propArr);

	return (
		<div className="card m-3 flex-shrink-0" style={{ width: "18rem" }}>
			<img src={data.imgUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{propArr[0].propvalue}</h5>
				<p className="card-text">
					{propArr[4].propname}: {propArr[4].propvalue}
					<br />
					{propArr[6].propname}: {propArr[6].propvalue}
					<br />
					{propArr[7].propname}: {propArr[7].propvalue}
				</p>
				<div className="d-flex justify-content-between">
					<Link
						to={{
							pathname: `/details/${data.name}`,
							state: data
						}}>
						<button href="#" className="btn btn-outline-dark learn-more">
							LEARN MORE
						</button>
					</Link>
					<button
						type="button"
						className="btn btn-outline-warning"
						onClick={isFav ? () => actions.deleteFromFavorites(data) : () => actions.addToFavorites(data)}>
						{isFav ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
					</button>
				</div>
			</div>
		</div>
	);
};

Card2.propTypes = {
	character: PropTypes.object,
	planet: PropTypes.object,
	entity: PropTypes.object,
	name: PropTypes.string,
	species: PropTypes.array,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	index: PropTypes.number,
	imgUrl: PropTypes.string
};
