import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";
import Trailers from "./Trailers";
import { Link } from "react-router-dom";

const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
width: 100%;
position: relative;
padding: 50px;
`
const Backdrop = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(${props => props.bgImage});
background-position: center center;
background-size: cover;
filter: blur(2px);
opacity: 0.5;
z-index: 0;
`
const Content = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
z-index: 1;
`;

const Cover = styled.div`
width: 30%;
height: 100%;
background-image: url(${props => props.bgImage});
background-position: center center;
background-size: cover;
border-radius: 5px;
`;

const Data = styled.div`
width: 70%;
margin-left: 20px;
display : flex;
flex-direction: column;
`

const Title =styled.h3`
font-size: 48px;
margin-bottom: 10px;
`

const Itemcontainer = styled.div`
display: flex;
margin: 20px 0;
height: 14px;
`

const Item = styled.span`

`

const Divider = styled.span`
margin: 0px 10px;
`

const Overview = styled.p`
font-size: 12px;
color : white;
opacity: 0.7;
line-height: 1.25;
width: 50%;
`
const ImdbT = styled.div`
display: flex;
height: 100%;
padding: 2px 5px;
justify-content: center;
align-items: center;
`
const ImdbTT = styled.span`
height: 100%;
color : #2c3e50;
`
const ImdbA = styled.a`
background-color: #f1c40f;
border-radius: 7px;
font-size: 10px;
&:hover{
  cursor: pointer;
  background-color : #f39c12;
  ${ImdbTT}{
      color: #3498db;
  }
}
`
const Space = styled.div`
height: 100%;
width: calc(${props => props.w} * 1px);
display: inline-block;
`

const Extracontent = styled.div`
display: flex;
margin-top: 15px;
`
const Prodcutioncontent = styled.div`
display: flex;
flex-direction : column;
width: 50%;
padding-bottom: 31px;
justify-content: space-between;
margin-left: 5px;
`

const Company = styled.div`
height: 30px;
width: auto;  
background-image: url(${props => props.bgImage});
background-position: left center;
background-size: contain;
background-repeat: no-repeat;
margin-top: 10px;
`

const Companies = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 20px;
`


const Country = styled.div`
font-size: 12px;
font-weight: 300;
`
const Countries = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`


const CollectionT = styled.div`
display: flex;
height: 100%;
padding: 2px 5px;
justify-content: center;
align-items: center;
`
const CollectionTT = styled.span`
height: 100%;
color : #2c3e50;
`

const CollectionA = styled(Link)`
background-color: #f1c40f;
margin-left: 5px;
border-radius: 7px;
font-size: 10px;
&:hover{
  cursor: pointer;
  background-color : #f39c12;
  ${CollectionTT}{
      color: #3498db;
  }
}
`;

const DetailPresenter = ({ result, error, loading }) => loading ? (<><Helmet><title>Loading | Nomfilx</title></Helmet><Loader /></>) : (
  <>  
    <Helmet><title>{`${result.original_title ? result.original_title : result.original_name} | Nomflix`}</title></Helmet>
    <Container>
      <Backdrop bgImage={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : require("../../assets/noPosterSmall.png").default} />
      <Content>
        <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png").default} />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <Itemcontainer>
            <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date ? result.first_air_date.substring(0, 4) : null}</Item>
            <Divider>●</Divider>
            <Item>{result.runtime ? result.runtime : result.episode_run_time ? result.episode_run_time[0] ? result.episode_run_time[0] : '?' : '?'} min</Item>
            <Divider>●</Divider>
            <Item>{result.genres ? result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `) : '?'}</Item>
            <Space w={5}/>
            {result.imdb_id && <ImdbA href={`https://www.imdb.com/title/${result.imdb_id}`}><ImdbT><ImdbTT>Imdb</ImdbTT></ImdbT></ImdbA>}
            {result.belongs_to_collection && (
              <CollectionA to={`collection/${result.belongs_to_collection.id}`}>
                <CollectionT>
                  <CollectionTT>Show Collection</CollectionTT>
                </CollectionT>
              </CollectionA>)}
          </Itemcontainer>
          <Overview>
            {result.overview}
          </Overview>
          <Extracontent>
           {result.videos.results.length > 0 && <Trailers vsrc={result.videos.results} />}
           <Prodcutioncontent>
             <Companies>{result.production_companies.map(comp => <Company bgImage={`https://image.tmdb.org/t/p/original${comp.logo_path}`} />)}</Companies>
             <Countries>{result.production_countries.map(count => <Country>{count.name}</Country>)}</Countries>
           </Prodcutioncontent>
          </Extracontent>
        </Data>
      </Content>
    </Container>
  </>
)

DetailPresenter.propTypes = {
	result : PropTypes.object,
  loading : PropTypes.bool.isRequired,
  error : PropTypes.string
}    
export default DetailPresenter;
