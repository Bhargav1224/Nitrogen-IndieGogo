import React from "react";
import styles from "./SlideShow.module.css";

export const Reviews = () => {
	return (
		<>
			<div>
				<h1 className={styles.reviewheading}>From the Indiegogo Review</h1>
				<h4 className={styles.crowddescription}>
					Your behind-the-scenes view of the people and stories behind Indiegogo
					projects
				</h4>
			</div>
			<div className={styles.reviewbox}>
				<div className={styles.revirewcontentbox}>
					<div className={styles.reviewimagebox}>
						<img
							className={styles.reviewimagedimentions}
							src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1617932369/gi7svwkbutmkshe2at5z.png"
							alt="review1 icon"
						/>
					</div>
					<div className={styles.reviewimageboxcontent2}>
						<h3>Indiegogo Virtual Hangouts</h3>
						<p className={styles.curiouscontent2}>
							For the week of #EarthDay, join us live for a series of live
							roundtable panels with crowdfunding changemakers.
						</p>
						<h4 className={styles.readmoreindicator}>READ MORE &#10095;</h4>
					</div>
				</div>
				<div className={styles.revirewcontentbox}>
					<div className={styles.reviewimagebox}>
						<img
							className={styles.reviewimagedimentions}
							src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1617932318/hc7py1fvow200idupcxa.png"
							alt="review2 icon"
						/>
					</div>
					<div className={styles.reviewimageboxcontent}>
						<h3>Stop Asian Hate</h3>
						<p className={styles.curiouscontent2}>
							{" "}
							Indiegogo Stands Against AAPI Hate Crimes and Discrimination
						</p>
						<h4 className={styles.readmoreindicator}>READ ON &#10095;</h4>
					</div>
				</div>
				<div className={styles.revirewcontentbox}>
					<div className={styles.reviewimagebox}>
						<img
							className={styles.reviewimagedimentions}
							src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1614102019/y53643otrzpgpndgweey.png"
							alt="review3 icon"
						/>
					</div>
					<div className={styles.reviewimageboxcontent2}>
						<h3>Amazon Launchpad Teams Up with Indiegogo</h3>
						<p className={styles.curiouscontent2}>
							We’re excited to announce that we’ll be working with Amazon
							Launchpad to help successful Indiegogo campaigns become
							flourishing small businesses...!
						</p>
						<h4 className={styles.readmoreindicator}>READ NOW &#10095;</h4>
					</div>
				</div>
			</div>
			<div className={styles.footeraboveimage}>
				<div>
					<img
						src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_275,g_center,q_auto:best,dpr_1.0,f_auto/homepage/crowdfunding-crowdsurfing_base.svg"
						alt="imoji icon"
					/>
				</div>
				<div>
					<h1 className={styles.curiousthings}>
						Clever Things For Curious Humans™
					</h1>
					<p className={styles.curiouscontent}>
						There is no better place to start the hunt for something new and{" "}
						<br />
						special. Begin on Indiegogo to find clever and unconventional things{" "}
						<br />
						that solve everyday problems large and small...!
					</p>
				</div>
			</div>
			<div className={styles.buttonsforlearn}>
				<button>SIGNUP NOW</button>
				<button>LERAN MORE</button>
			</div>
		</>
	);
};
