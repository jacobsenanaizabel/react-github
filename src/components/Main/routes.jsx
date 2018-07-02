import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Repository from '../Repository/repository'
import SearchUser from '../SearchUser/searchUser'
import Profile from '../Profile/profile'
import Home from '../Template/home'

const RouteConfig = () => (
    <Router>
      <div>  
        <Route exact path="/" component={Home} />   
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </Router>
  );
const routes = [
    {
      path: "/search",
      component: SearchUser
    },
    {
      path: "/user",
      component: Profile
    },
    {
      path: "/repository",
      component: Repository
    }
]

const RouteWithSubRoutes = route => (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
)  
export default RouteConfig;