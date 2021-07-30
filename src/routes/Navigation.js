import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './routes';
import {map} from "lodash";

export default function NAvigation(){
    return(
        <Router>
            <Switch>
                {map(routes, (route,index)=>(
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props)=><route.component {...props}/>}
                    />
                ))}
            </Switch>
        </Router>
    )
}

