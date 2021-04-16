import React, { useState, useEffect } from "react";
import { getArticles } from "./SlideApi";
import styles from "./SlideShow.module.css";

import { ShowArticles } from "./ShowArticles";
import { CollectionPage } from "./CollectionPage";

function SlideShow() {
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);

	const handlePagination = (e) => {
		const { name } = e.target;
		setPage((page) => {
			return name === "prev" ? page - 1 : page + 1;
		});
	};

	useEffect(() => {
		getArticles(page).then((res) => {
			console.log(res);
			setArticles(res.data);
		});
	}, [page]);
	return (
		<div>
			<h1 style={{ color: "grey", marginLeft: "20px",marginTop:"40px" }}>Popular Projects</h1>
			<div
				style={{
					float: "right",
					marginRight: "30px",
					marginTop: "-60px",
					display: "flex",
				}}
			>
				<button
					className={styles.changecontent}
					disabled={page <= 1}
					name="prev"
					onClick={handlePagination}
				>
					&#10094;
				</button>

				<button
					className={styles.changecontent}
					disabled={page >= 4}
					name="next"
					onClick={handlePagination}
				>
					&#10095;
				</button>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "45% 45% 45% 45% ",

					gridGap: "20px",
					width: "50%",
				}}
			>
				<ShowArticles articles={articles} />
            </div>
            <div>
                <CollectionPage/>
            </div>
		</div>
	);
}

export { SlideShow };
