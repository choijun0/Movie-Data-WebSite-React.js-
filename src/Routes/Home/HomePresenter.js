import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader"
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`padding: 0px 20px;`;

//loading 이 false 라는것은 데이타 fetch가 끝났음을 의미 HomeContainer에 그렇게 작성되어있음
const HomePresenter = ({nowPlaying,
upcoming,
popular,
error,
loading}) => loading ? <Loader /> : <Container>
{nowPlaying && nowPlaying.length > 0 && 
<Section title="Now Playing Movies">{nowPlaying.map(movie => <Poster id={movie.id} imageURL={movie.poster_path} title={movie.original_title} rating={movie.vote_average} isMovie={true} year={movie.release_date && movie.release_date.substring(0,4)}/>)}</Section>}
{upcoming && upcoming.length > 0 && 
<Section title="Upcoming Movies">{upcoming.map(movie => <Poster id={movie.id} imageURL={movie.poster_path} title={movie.original_title} rating={movie.vote_average} isMovie={true} year={movie.release_date && movie.release_date.substring(0,4)}/>)}</Section>}
{popular && popular.length > 0 && 
<Section title="Popular Movies">{popular.map(movie => <Poster id={movie.id} imageURL={movie.poster_path} title={movie.original_title} rating={movie.vote_average} isMovie={true} year={movie.release_date && movie.release_date.substring(0,4)}/>)}</Section>}
{error && <Message text={error} color={"#e74c3c"}/>}
{console.log(nowPlaying)}
</Container>

HomePresenter.propTypes = {
	nowPlaying : PropTypes.array,
  upcoming : PropTypes.array,
  popular : PropTypes.array,
  loading : PropTypes.bool.isRequired,
  error : PropTypes.string
}    
export default HomePresenter;