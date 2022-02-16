import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Details = props => {
	const [results, setResults] = useState(props.location.state);
	const [redirect, setRedirect] = useState(false);

	// useEffect(() => {
	// 	// const data = props.location.state;
	// 	// setResults(data);
	// 	// console.log("data", data);
	// 	// console.log("results", results);
	// }, []);

	return (
		<div className="container">
			{/* <div className="row mt-5">
				<div className="col-6">
					<img src={results.imgUrl} className="w-100" />
				</div>
				<div className="col-6">
					<div className="text-center text-light m-3">
						<h2>{results.entity ? results.entity.name : "Name"}</h2>
						<p />
					</div>
				</div>
			</div>
			<div className="row ml-1 mr-1 background border-top border-light">
				<div className="col-12 d-flex justify-content-between text-light text-center">
					<div className="affiliations m-3 p-2">
						<h5>{results.entity ? Object.keys(results.entity)[5] : "Attribute"}</h5>
						<p className="text-center">{results.entity ? Object.values(results.entity)[5] : "..."}</p>
					</div>
					<div className="locations p-2 m-3">
						<h5>{results.entity ? Object.keys(results.entity)[1] : "Attribute"}</h5>
						<p className="text-center">{results.entity ? Object.values(results.entity)[1] : "..."}</p>
					</div>
					<div className="gender p-2 m-3">
						<h5>{results.entity ? Object.keys(results.entity)[2] : "Attribute"}</h5>
						<p className="text-center">{results.entity ? Object.values(results.entity)[2] : "..."}</p>
					</div>
					<div className="dimensions p-2 m-3">
						<h5>{results.entity ? Object.keys(results.entity)[6] : "Attribute"}</h5>
						<p className="text-center">{results.entity ? Object.values(results.entity)[6] : "..."}</p>
					</div>
					<div className="species p-2 m-3">
						<h5>{results.entity ? Object.keys(results.entity)[7] : "Attribute"}</h5>
						<p className="text-center">{results.entity ? Object.values(results.entity)[7] : "..."}</p>
					</div>
					<div className="appearances p-2 m-3">
						<h5>{results.entity ? Object.keys(results.entity)[4] : "Attribute"}</h5>
						<p className="text-center">{results.entity ? Object.values(results.entity)[4] : "..."}</p>
					</div>
				</div>
			</div> */}
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object,
	location: PropTypes.object,
	name: PropTypes.string,
	results: PropTypes.object
};
