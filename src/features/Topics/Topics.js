import React from 'react';
import {
    Link,
    useRouteMatch,
    useParams,
    Switch,
    Route
} from 'react-router-dom';
import Topic from './Topic';

const Topics = ({

}) => {
    let match = useRouteMatch();
    console.log('topics: match ', match);
    return (
        <div className="topics">
            <h1>Topics</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>
                        Components
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.url}/:topicId`}>
                    <Topic></Topic>
                </Route>
                <Route path={match.url}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
}

export default Topics;