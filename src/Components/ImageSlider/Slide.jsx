import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Image.module.css";

const imgData = [
	"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1617923729/pjzxapncbzturveopomm.png",
	"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1617930690/iwlldunbh909gknkoitg.jpg",
	"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1618000810/adyc3lr8kbhydlpxkbzx.png",
	"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1617297493/yxvwzaxwqk3o3hogeurg.jpg",
	"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1617986442/oyii7xccldm0pbzlvr6h.jpg",
];
const title = ["FEATURED", "GOGOPICKS", "GOGOPICKS", "GOGOPICKS", "GOGOPICKS"];
const subtitle = [
	"Connect LIVE with the folks behind your favorite campaigns",
	"QuietOn 3 - The smallest ANC earbuds for sleeping",
	"Trigger Point Rocker: Feel Good & Build Muscle",
	"GigaDrive: World’s Fastest External SSD",
	"Prepd Chef Skillet - The Ultimate Everyday Pan",
];
const description = [
	"For the week of #EarthDay, join us for a series of live roundtable panels with crowdfunding changemakers",
	"Sleep in silence with revolutionary Noise Cancelling technology. No noise masking or extra sounds",
	"Developed by Dr. Aaron Fu based on 1000s of screaming backs, necks & shoulders. Happiness Guarantee✅",
	"with 2,800MB/s transfer speeds ⚡ and heat control technology.",
	"Lighter, Smoother, Naturally Non-Stick Cast Iron Skillet",
];
export const Slide = () => {
	const [img, setImg] = useState(0);
	useEffect(() => {
		const x = setInterval(() => {
			setImg(img === imgData.length - 1 ? 0 : img + 1);
		}, 3000);
		return () => clearInterval(x);
	}, [img]);

	const history = useHistory();
	const handleSignup = () => {
		history.push("/login");
    };
    const handleLearnmore = () => {
		history.push("/about-what-we-do");
	};

	return (
		<div className={styles.maincomp}>
			<img src={imgData[img]} alt="blank" className={styles.slide} />
			<p className={styles.title}> {title[img]}</p>
			<p className={styles.subtitle}>{subtitle[img]}</p>
			<p className={styles.description}>{description[img]}</p>
			<h1 className={styles.count}>{img}/5</h1>
			<div className={styles.sidecard}>
				<p className={styles.p11}>Find it first on Indiegogo</p>
				<p className={styles.p12}>
					Indiegogo is where early adopters and innovation seekers find lively,
					imaginative tech before it hits the mainstream.
				</p>
				<button onClick={handleSignup} className={styles.btn1}>Sign Up Now</button>
				<button onClick={handleLearnmore} className={styles.btn2}>Learn More</button>
			</div>
		</div>
	);
};
