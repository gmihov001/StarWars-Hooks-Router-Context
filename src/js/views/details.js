import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";

export const Details = props => {
	if (!useLocation().state) {
		return (
			<div className="container">
				<h3 className="bg-light mt-5 p-3 rounded text-center">
					<span>No props received, return to </span>
					<Link to="/">HOME</Link>
				</h3>
			</div>
		);
	} else {
		var results = useLocation().state;

		return (
			<div className="container detailsPage">
				<div className="row mt-5">
					<div className="col-6">
						<img src={results.imgUrl} className="w-100" />
					</div>
					<div className="col-6">
						<div className="text-center text-light m-3">
							<h2>{results ? results.name : "Name"}</h2>
							<p />
						</div>
					</div>
				</div>
				<div className="row ml-1 mr-1 background border-top border-light">
					<div className="col-12 d-flex justify-content-between text-light text-center">
						<div className="affiliations m-3 p-2">
							<h5>{results ? Object.keys(results)[5] : "Attribute"}</h5>
							<h4 className="text-center">{results ? Object.values(results)[5] : "..."}</h4>
						</div>
						<div className="locations p-2 m-3">
							<h5>{results ? Object.keys(results)[1] : "Attribute"}</h5>
							<h4 className="text-center">{results ? Object.values(results)[1] : "..."}</h4>
						</div>
						<div className="gender p-2 m-3">
							<h5>{results ? Object.keys(results)[2] : "Attribute"}</h5>
							<h4 className="text-center">{results ? Object.values(results)[2] : "..."}</h4>
						</div>
						<div className="dimensions p-2 m-3">
							<h5>{results ? Object.keys(results)[6] : "Attribute"}</h5>
							<h4 className="text-center">{results ? Object.values(results)[6] : "..."}</h4>
						</div>
						<div className="species p-2 m-3">
							<h5>{results ? Object.keys(results)[7] : "Attribute"}</h5>
							<h4 className="text-center">{results ? Object.values(results)[7] : "..."}</h4>
						</div>
						<div className="appearances p-2 m-3">
							<h5>{results ? Object.keys(results)[4] : "Attribute"}</h5>
							<h4 className="text-center">{results ? Object.values(results)[4] : "..."}</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

Details.propTypes = {
	match: PropTypes.object,
	location: PropTypes.object,
	history: PropTypes.object
};
