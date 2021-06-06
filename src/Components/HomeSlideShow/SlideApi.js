import Axios from "axios";

const axios = Axios.create({
	baseURL: "https://mymock-server-shubham00.herokuapp.com",
	headers: {
		"Content-type": "application/json",
	},
});
export const getArticles = (page, limit = 4) => {
    // console.log(page,limit)
	return axios.get("/campaign", {
		params: {
			_page:page,
			_limit:limit,
		},
	});
};
