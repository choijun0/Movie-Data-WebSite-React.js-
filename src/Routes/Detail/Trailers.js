import { symbol } from "prop-types";
import react, { useState } from "react";
import styled from "styled-components"

const Item = styled.div`

`
const Videocontainer = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
`

const Indexcontainer = styled.div`
display: flex;
flex-wrap: wrap;
align-content: flex-start;
justify-content: center;
margin-top: 10px;
`

const Indexspan = styled.span`
color: #2c3e50;
font-size: 5px;
font-weight: 700;
padding-bottom: 2px;
`

const Index = styled.div`
display: flex;
cursor: pointer;
background-color: ${props => props.nowChoosen ? `#2980b9` : `#bdc3c7`};
${Indexspan}{
    color : ${props => props.nowChoosen ? `#f1c40f` : `#2c3e50`};
}
border-radius: 8px;
justify-content: center;
align-items: center;
width: 18px;
height: 18px;
border: solid;
border-color: #2c3e50;
border-width: 2px;
margin-right: 3px;
margin-bottom: 3px;
&:hover{
    background-color: white;
}
`

const Videoitem = styled.iframe`
width: 100%;
height: 400px;
`


const Trailers = ({vsrc : trailers}) => {
    const [index, setIndex] = useState(0); 
    const lastindex = trailers.length - 1;
    const func = (index) => {
        setIndex(index);
    }
    return (
        <>
            <Videocontainer>
                <Videoitem src={`https://www.youtube.com/embed/${trailers[index].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Videoitem>
                <Indexcontainer>
                    {trailers.map((trailer, tindex) => <Index onClick={() => func(tindex)} nowChoosen={tindex === index}><Indexspan>{tindex + 1}</ Indexspan></Index>)}
                </Indexcontainer>
            </Videocontainer>
        </>
    );
}


export default Trailers;