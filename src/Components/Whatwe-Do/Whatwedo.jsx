import React, { useState } from "react";
import { useHistory } from "react-router";

import { Footer } from "../Footer/Footer";
import styles from "./Whatwedo.module.css";

export const Whatwedo = () => {
	const [email, setEmail] = useState("");
	const history = useHistory();
	const handleExplore = () => {
		history.push("/explorePage");
	};
	return (
		<div>
			<div className={styles.frontimg}>
				<img
					src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/v1/what_we_do/hero_tablet.png"
					alt="logo.png"
				/>
				<div className={styles.imgcontent}>
					<h1 className={styles.aboutheading}>
						Get the tech that gets people talking
					</h1>
					<br />
					<br />
					<p className={styles.wecontent}>
						With both live crowdfunding campaigns and innovative products
						shipping now, there’s no better place to start the hunt for cool and
						clever innovations that surprise and delight. Indiegogo is where new
						launches.
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<h1 className={styles.aboutheading}>Fund the next big thing</h1>
				<br />
				<p className={styles.wecontent}>
					Indiegogo's crowdfunding campaigns are where new and groundbreaking
					products take flight, sometimes long before they hit mainstream
					availability. With thousands of campaigns launching every week,
					there's great tech, design, and much more around every corner — often
					with limited-time perks and pricing for the earliest backers. Before
					it's everywhere, it's on Indiegogo.
				</p>
			</div>
			<br />
			<br />
			<br />
			<div className={styles.journybox}>
				<h1 className={styles.aboutheading}>
					Join the journey from idea to market
				</h1>
				<div>
					<img
						src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/v1/what_we_do/timeline_desktop_2x.png"
						alt="timeline.png"
					/>
				</div>
				<br />
				<br />
				<p className={styles.wecontent}>
					With Indiegogo, you have the opportunity to support entrepreneurs and
					new technology from the earliest stages of development. Be sure to
					evaluate every campaign closely and contribute at a level you can
					afford in the event that the team is unable to complete the project as
					planned.
				</p>
				<br />
				<br />
				<p className={styles.wecontent}>
					Browse campaigns, read the stories from the entrepreneurs themselves,
					evaluate the stage of development and any potential production risks —
					and then fund the projects that you want to help succeed.
				</p>
				<br />
				<br />
				<button onClick={handleExplore} className={styles.explorebtn}>
					EXPLORE PROJECTS
				</button>
				<br />
				<br />
				<p className={styles.wecontent}>
					Or learn more about crowdfunding and your role as a backer.
				</p>
			</div>
			<br />
			<br />
			<br />
			<div className={styles.subscribebox}>
				<br />
				<br />
				<h1 className={styles.aboutheading}>Great finds, delivered daily</h1>
				<br />
				<p className={styles.wecontent}>
					We surface the best and brightest of Indiegogo in our newsletter.
					<br />
					Sign up to find out about great technology, design, film,
					<br />
					and much more — all before it hits the mainstream.
				</p>
				<br />
				<div className={styles.subinbtn}>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={styles.subinput}
						placeholder="Your Email address"
					/>
					<button className={styles.subscribebtn}>SUBSCRIBE</button>
				</div>
				<br />
				<div className={styles.subinbtn}>
					<input type="checkbox" name="policy" className={styles.checkbox} />
					<p>
						I agree to the <u>Terms of Use</u> and have read and understand the{" "}
						<u>Privacy Policy</u>
					</p>
				</div>
			</div>
			<br />
			<br />
			<div className={styles.favcampaigns}>
				<p className={styles.wecontent2}>
					Just a few of our favorite campaigns
				</p>
				<div className={styles.WhatwedoContainer}>
					<div className={styles.wedoboxes}>
						<div className={styles.favimgbox}>
							<img
								src="https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/misfit.png"
								alt="fav.png"
							/>
							<p className={styles.wecontent3}>Misfit Shine</p>
							<br />

							<p className={styles.wecontent3}>7,957 Backers</p>
							<br />
							<br />
							<div className={styles.favimgcontent}>
								<p className={styles.favwecontent}>
									With super-smart fitness technology squeezed into a sleek,
									take-it-anywhere design, the Misfit Shine was a huge hit.
									Today it’s available in stores everywhere, but Indiegogo
									backers were in on the action first.
								</p>
							</div>
						</div>
					</div>
					<div className={styles.wedoboxes}>
						<div className={styles.favimgbox}>
							<img
								src="https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/bluesmart.png"
								alt="fav.png"
							/>
							<p className={styles.wecontent3}>Bluesmart</p>
							<br />

							<p className={styles.wecontent3}>10,984 Backers</p>
							<br />
							<br />
							<div className={styles.favimgcontent}>
								<p className={styles.favwecontent}>
									This smash-hit campaign almost singlehandedly invented the
									smart suitcase as the must-have travel accessory that it is
									today. With innovative features like location tracking and a
									built-in scale, Bluesmart went big on Indiegogo before landing
									in stores around the world.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.WhatwedoContainer}>
					<div className={styles.wedoboxes}>
						<div className={styles.favimgbox}>
							<img
								src="https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/evapolar.png"
								alt="fav.png"
							/>
							<p className={styles.wecontent3}>Evapolar</p>
							<br />

							<p className={styles.wecontent3}>6,616 Backers</p>
							<br />
							<br />
							<div className={styles.favimgcontent}>
								<p className={styles.favwecontent}>
									The Evapolar team’s slick air conditioner is small enough to
									place exactly where you need it most. It even cleans and
									humidifies as it cools. The campaign was so successful that
									the team came back to Indiegogo to launch the next-gen
									version.
								</p>
							</div>
						</div>
					</div>
					<div className={styles.wedoboxes}>
						<div className={styles.favimgbox}>
							<img
								src="https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/super_troopers.png"
								alt="fav.png"
							/>
							<p className={styles.wecontent3}>Super Troopers 2</p>
							<br />

							<p className={styles.wecontent3}>54,531 Backers</p>
							<br />
							<br />
							<div className={styles.favimgcontent}>
								<p className={styles.favwecontent}>
									With its truly gigantic backer community, Super Troopers 2
									became one of the most iconic Indiegogo film projects. The
									team behind the project offered backers everything from movie
									tickets to an actual police car from the film!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<div className={styles.readyexplore}>
				<div className={styles.readybox}>
					<div className={styles.iconbox}>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArabxAPCLb_HkHm7Kpy1tHpyi12H59dyBQs_Ouo2rGMMFCxEz4KNgfSTZ5nqZb0FfO9c&usqp=CAU"
							alt="bike.png"
						/>
						<br />
						<br />

						<p className={styles.insheading}>Ready? Explore</p>
						<br />
						<button className={styles.explorebtn2}>
							DISCOVER PROJECTS
						</button>
					</div>
				</div>
				<div className={styles.readybox}>
					<div className={styles.iconbox}>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/31u25AHPlJL.jpg"
							alt="bike.jpg"
						/>
						<br />
						<br />
						<p className={styles.insheading}>Feeling Inspired?</p>
						<br />
						<button  className={styles.explorebtn2}>
							BECOME AN ENTREPRENEUR
						</button>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<Footer/>
		</div>
	);
};
