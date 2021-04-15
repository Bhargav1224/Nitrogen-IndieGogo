import React, { useState, useEffect } from "react";
import { mockapi } from "./mockapi";
import styles from "./ExploreCards.module.css";

import { ShowExploreCards} from "./ShowExploreCards";
export const ExploreCards = () => {
	const [articles, setArticles] = useState([]);
	const [category, setCategory] = useState("");
	const [query, setQuery] = useState("");

	const options = [
		{
			label: "Select",
			value: "select",
		},
		{
			label: "Filter",
			value: "filter",
		},
		{
			label: "MostFunding",
			value: "mostfunding",
		},
	];

	const handleSelectFund = (e) => {
		const value = e.target.value;
		setCategory(value);
	};
	console.log(category);

	useEffect(() => {
		mockapi().then((res) => {
			console.log(res);
			setArticles(res.data);
		});
	}, []);
	

	

	return (
		<div>
			<div className={styles.inputboxexplore}>
				<input type="text" placeholder="Search for a Campaigns" onChange={(e)=>setQuery(e.target.value)} value={query }/>
				<button>Search</button>
			{/* <div style={{ float: "right", marginRight: "60px", marginTop: "15px" }}> */}
				<label>Sort By </label>
				<select onChange={handleSelectFund}>
					{options.map((option) => (
						<option value={option.value}>{option.label}</option>
					))}
				</select>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "45% 45% 45%",
					gridGap: "20px",
					width: "50%",
				}}
			>
				<ShowExploreCards articles={ articles}/>
			</div>
		</div>
	);
};
