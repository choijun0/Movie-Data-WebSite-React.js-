import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../../Components/Section";
import Loader from "../../Components/Loader"
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import { Helmet } from "react-helmet";
const Container = styled.div`
padding: 0px 20px;
`;

const Form = styled.form`
margin-top: 50px;
width: 100%;
`;

const Input = styled.input`
all: unset;
font-size:28px;
width: 100%;
`;

const SearchPresenter = ({movieResults,
tvResults,
searchTerm,
loading,
error,handleSubmit, updateTerm}) => (
	<>
		<Helmet><title>Search | Nomflix</title></Helmet>
		<Container>
			<Form onSubmit={handleSubmit}>
				<Input placeholder="Search Movies or TV Shows..."
					value={searchTerm}
					onChange={updateTerm}
				/>
			</Form>
			{loading ? <Loader /> :
				<>
					{movieResults && movieResults.length > 0 && <Section title="Searched Movie">{movieResults.map(movie => <Poster id={movie.id} imageURL={movie.poster_path} title={movie.original_title} rating={movie.vote_average} isMovie={true} year={movie.release_date && movie.release_date.substring(0, 4)} />)}</Section>
					}
					{tvResults && tvResults.length > 0 && <Section title="Searched TV Show">{tvResults.map(show => <Poster id={show.id} imageURL={show.poster_path} title={show.original_name} rating={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0, 4)} />)}</Section>
					}

					{error && <Message text={error} color={"#e74c3c"} />}
					{tvResults && movieResults && movieResults.length === 0 && tvResults.length === 0 && <Message color={"#f1c40f"} text={`Nothing found for ${searchTerm}`} />}
				</>}
		</Container>
	</>
)

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
tvResults: PropTypes.array,
searchTerm: PropTypes.string,
loading: PropTypes.bool.isRequired,
error: PropTypes.string,
handleSubmit: PropTypes.func.isRequired,
updateTerm : PropTypes.func.isRequired
}

export default SearchPresenter;