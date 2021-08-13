import React from "react";
import SearchPresenter from "./SearchPresenter";
import {movieApi} from "../../api";
import {tvApi} from "../../api";
//Search는 loading을 false로 둔다 왜냐면 사용자가 원할때 시행되기 때문
export default class extends React.Component{
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm:"",
		loading: false,
		error:null
	};
	handleSubmit = event => {
		event.preventDefault(); //이벤트를 가로채서 browser가 창을 초기화 시키는 것을 막음
		const {searchTerm} = this.state;
		if(searchTerm !== ""){
			this.searchByTerm();
		}
	}

	//이부분을 설명해보자 "movie" 를입력한다고 해보자
	//먼저 m을치면 아래함수가 호출되고 searchTerm의 값이 m이되고 input.value값도 m이된다
	//o를 치는순가 그럼 target.value는 mo이다 ok, got it
	updateTerm = ({target : {value}}) => {
		this.setState({searchTerm : value});
	}

	searchByTerm = async term => {
		const {searchTerm} = this.state;
		try{
			this.setState({loading : true});
			const {data : {results : movieResults}} = await movieApi.search(searchTerm);
			const {data : {results : tvResults}} = await tvApi.search(searchTerm);
			this.setState({movieResults,tvResults});
		}catch{
			this.setState({
				error : "Can't find results."
			});
		}finally{ //success or failure, whatever, below is read
			this.setState({
				loading: false
			});
		}
	}
	render() {
		const { movieResults, tvResults, searchTerm, loading, error } = this.state;
		return <SearchPresenter
			movieResults={movieResults}
			tvResults={tvResults}
			searchTerm={searchTerm} loading={loading} error={error}
			handleSubmit={this.handleSubmit} updateTerm={this.updateTerm}
		/>
	}
}