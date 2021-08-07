import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from 'styled-components';


const List = styled.ul`
display: flex;
`;

const Header = styled.header`
color: white;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 50px;
display: flex;
align-items: center;
padding: 0px;
background-color: rgba(20,20,20,0.8);
box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
z-index: 1;
`;

const Item = styled.li`
width: 50px;
height: 50px;
text-align: center;
border-bottom: 5px solid ${props => props.current ? "#3498db" : "transparent"};
transition: border-bottom 0.25s ease-in-out;
`;

//기존에 존재하던 Compoent에 적요하는 방법
const SLink = styled(Link)` 
display:flex;
height: 50px;
align-items: center;
justify-content: center;
`;

//withRouter로 감싸면(wrap) props가 생긴다.
//withRouter를 사용해 props를 얻고 props : location : pathname을 이용해 상호작용
export default withRouter( ({location : {pathname}}) => (
	<Header>
	  <List>
		  <Item current={pathname === "/"}>
			  <SLink to="/">Movies</SLink>
			</Item>
			<Item current={pathname === "/tv"}>
			  <SLink to="/tv">TV</SLink>
			</Item>
			<Item current={pathname === "/search"}>
			  <SLink to="/search">search</SLink>
			</Item>
  	</List>
	</Header>)
);