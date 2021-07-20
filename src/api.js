import axios from "axios";

//axios instance를 활용
const api = axios.create({
	baseURL : "https://api.themoviedb.org/3",
	params : {
		api_key : "10923b261ba94d897ac6b81148314a3f",
		language : "en-US"
	}
});

api.get("tv/popular"); //fetch의미 baseURL + tv/popular + params 
//request data from url

export default api;