import React from 'react';
import { Switch, Route , Redirect } from 'react-router-dom';

/* component Sidebar */
import { Sidebar } from './layouts';
/* Folder Views */
import { Users,NotFound } from './views';
/*Component USERS */
import { Create, Edit } from './views/users';

const Routeing = () => {

    return (
        <div className="content">
            <Sidebar/>
            <div className="side-content">
                <Switch>
                        {/* Redirect Page */}
                <Redirect exact from="/" to="/users" />
                        {/* Component USERS */}
                <Route exact path="/users" component={Users} />
                <Route  path="/users/create" component={Create} />
                <Route  path="/users/edit/:id" component={Edit} />
                        {/* Component NOT FOUND 404!! */}
                <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    )
}


export default Routeing;
