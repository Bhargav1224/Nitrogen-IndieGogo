import Axios from "axios";

const axios = Axios.create({
	baseURL: "https://mymock-server-shubham00.herokuapp.com",
	headers: {
		"Content-type": "application/json",
	},
});
export const mockapi = ( limit = 12) => {
    console.log(limit)
	return axios.get("/campaign", {
		params: {
			// _sort=percentage&_order=DESC
			_limit:limit,
		},
	});
};

export const sortdata = () => {
	
}
