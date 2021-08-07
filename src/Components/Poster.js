import React from "react";
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
font-size:12px;
`;

const Image = styled.div`
background-image : url(${props => props.bgURL});
height: 180px;
background-size: cover;
background-position : center center;
border-radius : 4px;
margin-bottom : 5px;
transition: opacity 0.1s linear;
`;

const Rating = styled.span`
bottom: 1px;
right: 5px;
position: absolute;
opacity: 0;
transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
margin-bottom: 3px;
position: relative;
&:hover{
	${Image}{
		opacity: 0.7;
	}
	${Rating}{
		opacity: 0.9;
	}
}
`;

const Star = styled.span` color : #1abc9c;`

const Title = styled.span`
display: block;
margin-bottom: 3px;
`;

const Year = styled.span`
font-size: 10px;
color : rgba(255,255,255,0.7);
`;

const Poster = ({id, imageURL, title, rating, year, isMovie = false}) => 
<Link to={isMovie ? `movie/${id}` : `show/${id}`}>
<Container>
<ImageContainer>
<Image bgURL={imageURL ? `https://image.tmdb.org/t/p/w300${imageURL}` : require("../assets/noPosterSmall.png").default} />
<Rating>
<Star role="img" aria-label="rating">
★
</Star>{" "}
{rating}/10
</Rating>
</ImageContainer>
<Title>{title.length < 18 ? title : `${title.substring(0,15)}...`}</Title>
<Year>{year}</Year>
</Container>
</Link>

Poster.propTypes = {
	id : PropTypes.number.isRequired,
	imageURL : PropTypes.string,
	title : PropTypes.string.isRequired,
	rating : PropTypes.number.isRequired,
	year : PropTypes.string,
	isMovie : PropTypes.bool
}

export default Poster;