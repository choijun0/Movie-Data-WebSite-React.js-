import React, {Component, useState, useEffect} from "react";
import CollectionPresenter from "./CollectionPresenter";
import {collectionApi} from "../../api";
import Loader from "../../Components/Loader"; 


export default class extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			loading: true,
		}
	}
	async componentDidMount(){
		const {match : { params : {id}} , history : {push}} = this.props;
		const parsedId = parseInt(id);
		if(isNaN(parsedId)){
			return push("/"); //to kill function used return
		}
		let result = null;
		try{
			({data : result} = await collectionApi.getCollection(parsedId));
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
		return <CollectionPresenter {...result} loading={loading} error={error}/>
	}
}

