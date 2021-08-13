import React, {Component} from "react";
import DetailPresenter from "./DetailPresenter";
import {movieApi} from "../../api";
import {tvApi} from "../../api";

export default class extends Component{
	constructor(props) {
		super(props);
		const { location: { pathname } } = props;
		console.log(pathname);
		this.state = {
			result: null,
			loading: true,
			isMovie: pathname.includes("/movie/") //to separate show and movie
		}
	}
	async componentDidMount(){
		const {match : { params : {id} } , history : {location, push}} = this.props;
		const parsedId = parseInt(id);
		if(isNaN(parsedId)){
			return push("/"); //to kill function used return
		}
		if(this.state.isCollection){
			return push("/");
		}
		const {isMovie} = this.state;
		let result = null;
		try{
			if(isMovie){
				({data : result} = await movieApi.movieDetail(parsedId));
			}
			else{
				({data : result} = await tvApi.showDetail(parsedId));
			}
		}
		catch{
			this.setState({error : "Can't find anything"});
		}
		finally{
			this.setState({
				loading: false,
				result
			});
		}
	}
	render(){
		const {result, error, loading} = this.state;
		return <DetailPresenter result={result} error={error} loading={loading}/>
	}
}