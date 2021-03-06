import React from "react";
import styled from 'styled-components';

const Container = styled.div`
height : 100vh;
width : 100vw;
display:flex;
justify-content: center;
align-items: center;
font-size: 25px
`;

const Sspan = styled.span`color: white;`;

const Loader = () => <Container><Sspan role="img" aria-label="Loading" >Loading...</Sspan></Container>;

export default Loader;