import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import Loader from "../../Components/Loader"; 
import { Helmet } from "react-helmet";
import Poster from "../../Components/Poster";
import Section from "../../Components/Section";

const Container = styled.div`
height: calc(100vh - 50px);
width : 100%;
display: flex;
flex-direction: column;
width: 100%;
position: relative;
padding: 50px;
`

const Backdrop = styled.div`
position: absolute;
top: 0;
left: 0;
background-image: url(${props => props.bgUrl});
background-position: center center;
background-size: cover;
width: 100%;
height: 100%;
filter: blur(2px);
z-index: -1;
`

const Header = styled.div`
width: 100%;
height: 380px;
display: flex;
padding: 0 300px;
margin-top: 20px;
`

const Image = styled.div`
height: 100%;
width: 250px;
background-image: url(${props => props.bgUrl});
background-position: center start;
background-size: cover;
border-radius: 10px;
z-index : 1;
opacity: 0.8;
`

const Explaincontainer = styled.div`
z-index: 1;
margin-left: 20px;
width: 50%;
`

const Title = styled.div`
font-size: 48px;
margin-bottom: 10px;
display: inline-block;
font-weight: 500;
background-color:rgba(52, 73, 94, 0.7);
color: #f1c40f;
border-radius: 20px;
padding: 5px 20px 12px 20px;
`

const Overview = styled.p`
display: inline-block;
font-size: 15px;
color : white;
opacity: 0.7;
line-height: 1.25;
background-color:rgba(52, 73, 94, 0.7);
color: #f1c40f;
border-radius: 20px;
padding: 5px 20px 12px 20px;
`
const CollectionPresenter = ({ parts, poster_path, backdrop_path, overview, name, loading }) => loading ? <Loader /> : <Container>
    <Backdrop bgUrl={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
    <Header>
        <Image bgUrl={`https://image.tmdb.org/t/p/w300${poster_path}`} />
        <Explaincontainer>
            <Title>{name}</Title>
            <Overview>{overview}</Overview>
        </Explaincontainer>
    </Header>
    <Section title={parts.length > 1 ? 'Collection Movies' : 'Collection Movies'}>{parts.map(part => <Poster id={part.id} imageURL={part.poster_path} title={part.original_title} rating={part.vote_average} isMovie={true} year={part.release_date && part.release_date.substring(0, 4)} />)}</Section>
</Container>

export default CollectionPresenter;