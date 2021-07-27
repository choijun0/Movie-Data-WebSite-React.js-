import React, {Component} from "react";
import DetailPresenter from "./DetailPresenter";
import {movieApi} from "../../api";
import {tvApi} from "../../api";

export default class extends Component{
	constructor(props){
		super(props);
		const {location : {pathname}} = props;
		this.state={
	  	reseult : null,
	  	loading : true,
			isMovie : pathname.includes("/movie/") //to separate show and movie
		}
	}
	async componentDidMount(){
		const {match : { params : {id}} , history : {push}} = this.props;
		const parsedId = parseInt(id);
		if(isNaN(parsedId)){
			return push("/"); //to kill function used return
		}
		const {isMovie} = this.state;
		let result = null;
		try{
			if(isMovie){
				({data : result} = await movieApi.movieDetail(parsedId));
			}
			else{
				({data : result} = await tvApi.movieDetail(parsedId));
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
		console.log(this.state);
	}
	render(){
		const {reseult, error, loading} = this.state;
		return <DetailPresenter reseult={reseult}
		error={error}
		loading={loading}/>
	}
}