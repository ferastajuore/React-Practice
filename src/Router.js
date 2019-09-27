import React from 'react';
import { Switch, Route , Redirect } from 'react-router-dom';
/* component Sidebar */
import { Sidebar } from './layouts';
/* Folder Views */
import { Users,NotFound } from './views';
/*Component USERS */
import { Create } from './views/users';

const Routeing = () => {

    return (
        <div className="content">
            <Sidebar/>
            <Switch>
                    {/* Redirect Page */}
            <Redirect exact from="/" to="/users" />
                    {/* Component USERS */}
            <Route exact path="/users" component={Users} />
            <Route  path="/users/create" component={Create} />
                    {/* Component NOT FOUND 404!! */}
            <Route component={NotFound} />
            </Switch>
        </div>
    )
}


export default Routeing;
