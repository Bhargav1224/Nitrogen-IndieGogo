import React from "react";
import styles from "./SlideShow.module.css";
import { Link } from "react-router-dom";
export const CollectionPage = () => {
	return (
		<>
			<div className={styles.fregamanetbox}>
				<div className={styles.collectionbox}>
					<img
						src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1618336553/dx7ssf5krfnevw6q8eij.jpg"
						alt="cleverse image"
					/>
					<h1 className={styles.imagetitle}> 10 Cools & Cleverse finds</h1>

					<h3 className={styles.collectiontitle}>
						Our roundup of standout Projects
					</h3>
					<div className={styles.collectionlinks}>
						<p>SEE THE COLLECTION &#10095;</p>
					</div>
				</div>
				<div className={styles.collectionbox}>
					<img
						src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1618332231/kf6uqtwoyhrzyuadrjjd.jpg"
						alt="team image"
					/>
					<h1 className={styles.imagetitle}>Team Fevorites</h1>
					<h3 className={styles.collectiontitle}>
						AYANEO Gaming Device & team favorites
					</h3>
					<div className={styles.collectionlinks}>
						<p>SEE THE COLLECTION &#10095;</p>
					</div>
				</div>
				<div className={styles.collectionbox}>
					<img
						src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1610645828/srw2ffyyagzenfu6pznr.png"
						alt="super image"
					/>
					<h1 className={styles.imagetitle}> In Demand SuperStars</h1>
					<h3 className={styles.collectiontitle}>
						The Campaign are crowed favorites
					</h3>
					<div className={styles.collectionlinks}>
						<p>SEE THE COLLECTION &#10095;</p>
					</div>
				</div>
				<div className={styles.collectionbox}>
					<img
						src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1597692648/t5nvsqhmxvwgk8cgrtac.png"
						alt="conversation image"
					/>
					<h1 className={styles.imagetitle}>Join the Conversation</h1>
					<h3 className={styles.collectiontitle}>
						This Campaigners want to here from you
					</h3>
					<div className={styles.collectionlinks}>
						<p>SEE THE COLLECTION &#10095;</p>
					</div>
				</div>
			</div>
			<div className={styles.crowdfunding}>
				<img
					src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/homepage/crowdfunding-bg-mobile-lg.jpg"
					alt="crowdfunding image"
				/>
			</div>
		</>
	);
};
