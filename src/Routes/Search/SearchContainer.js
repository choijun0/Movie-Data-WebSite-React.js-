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
		loading : false,
		error:null
	};

	handleSubmit = () => {
		const {searchTerm} = this.state;
		if(searchTerm !== ""){
			this.searchByTerm();
		}
	}
	searchByTerm = async term => {
		const {searchTerm} = this.state;
		try{
			this.setState({loading : true});
			const {data : {results : movieResults}} = await movieApi.search(searchTerm);
			const {data : {results : showResults}} = await tvApi.search(searchTerm);
			this.setState({movieResults, showResults});
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
	render(){
		const {movieResults, tvResult, searchTerm, loading, error} = this.state;
		return <SearchPresenter
		 movieResults={movieResults}
tvResult={tvResult}
searchTerm={searchTerm} loading={loading} error={error}
handleSubmit={this.handleSubmit}
		/>
	}
}