import axios from "axios";

//axios instance를 활용
const api = axios.create({
	baseURL : "https://api.themoviedb.org/3/",
	params : {
		api_key : "c46fe969df3e58d22caa203945cd442b",
		language : "en-US"
	}
});

export const movieApi = {
	nowPlaying: () => api.get("movie/now_playing"),
	upcoming: () => api.get("movie/upcoming"),
	popular: () => api.get("movie/popular"),
	movieDetail : id => api.get(`movie/${id}`, {
		params : {
			append_to_response : "videos"  
		}
	}),
	search : term => api.get("search/movie",{
		params : {
			query : encodeURIComponent(term)
		}
	})
}

export const tvApi = {
	topRated: () => api.get("tv/top_rated"),
	popular: () => api.get("tv/popular"),
	airingToday: () => api.get("tv/airing_today"),
	showDetail : id => api.get(`tv/${id}`, {
		params : {
			append_to_response : "videos"  
		}
	}),
	search : term => api.get("search/tv",{
		params : {
			query : encodeURIComponent(term) //특수문자 or 공백 등을 URI화 하면 깨진다. 그래서 이걸로 바꿔줌
		}
	})
}