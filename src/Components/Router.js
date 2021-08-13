import react from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"; 
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header";
import Detail from "../Routes/Detail";
import Collection from "../Routes/Collection";

//Router renders only one child
//By default Router gives Route to props
export default () =>
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tv" exact component={TV} />
				<Route path="/search" exact component={Search} />
				<Route path="/movie/:id" exact component={Detail} />
				<Route path="/movie" exact component={Detail} />					
				<Route path="/show/:id" component={Detail} />
				<Route path="/movie/collection/:id" exact component={Collection} />
				<Redirect from="/movie/collection/movie/:id" to="/movie/:id" />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>