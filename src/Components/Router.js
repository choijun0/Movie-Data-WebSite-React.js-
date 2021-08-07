import react from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"; 
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header";
import Detail from "../Routes/Detail";

//Router renders only one child
//By default Router gives Route to props
export default () =>
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tv" exact component={TV} />
				<Route path="/tv/popular" render={() => <h1>Popular</h1>} />
				<Route path="/search" exact component={Search} />
				<Route path="/movie/:id" component={Detail} />
				<Route path="/show/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>