import React from "react";
import { Reviews } from "./Reviews";
import styles from "./SlideShow.module.css";

export const CrowdFunding = () => {
	return (
		<>
			<div>
				<div className={styles.crowdfunding}>
					<img
						src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/homepage/crowdfunding-bg-mobile-lg.jpg"
						alt="crowdfunding image"
					/>
					<h1 className={styles.crowdtitle}>Back the Project ,take the ride</h1>
					<h3 className={styles.crowddescription}>
						Indiegogo is your destination for clever innovation in
						tech,design,and more,often <br />
						with special perks and pricing for early adopters.Back campaign
						,share your ideas
						<br />
						and feedback with the project team - and join the risks rewards of
						bringing new <br />
						products to life.
					</h3>
					<h3 className={styles.lerancrowd}>
						LEARN ABOUT CROWDFUNDING &#10095;
					</h3>
				</div>
			</div>
			<div className={styles.categories}>
				<h1>Which categories interest you?</h1>
				<h3>
					Discover projects just for you and get great recommendations when you
					select your interests.
				</h3>
			</div>
			<div className={styles.interestbtn}>
				<button>SIGNUP AND SELECT YOUR INTEREST</button>
			</div>
			<div>
				<h3 className={styles.topcategories}>Or explore our top categories</h3>
			</div>
			<div className={styles.topsixcateg}>
				<div>
					<img
						src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5462376.jpg"
						alt="Home"
					/>
					<h3>HOME</h3>
				</div>
				<div>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65vKrYldm09kL4qG6EwRAaekumOkrJtAAjg&usqp=CAU"
						alt="phone icon"
					/>
					<h3>Phone & Accessories</h3>
				</div>
				<div>
					<img
						src="https://m.media-amazon.com/images/I/61ImmGPnU7L._AC_UL320_.jpg"
						alt="travel icon"
					/>
					<h3>Travel & Outdoors</h3>
				</div>
				<div>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2Jy3xuaVIWqTmz4KgKw3tBFwKGcS-GlVhmikdYp3tXMFN7xx6cagIGA8trYm7uzWl9Q&usqp=CAU"
						alt="health icon"
					/>
					<h3>Health & Fitness</h3>
				</div>
				<div>
					<img
						src="https://iconfair.com/cepsools/2020/12/Artboard-25.jpg"
						alt="audio icon"
					/>
					<h3>AUDIO</h3>
				</div>
				<div>
					<img
						src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6157262.jpg"
						alt="camera icon"
					/>
					<h3>FILM</h3>
				</div>
			</div>
			<div>
				<Reviews />
			</div>
		</>
	);
};
