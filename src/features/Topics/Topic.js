import React from 'react';
import {
    useParams,
    useRouteMatch,
} from 'react-router-dom';

const Topic = ({

}) => {
    let { topicId } = useParams();
    let match = useRouteMatch();
    console.log('topic: match ', match);
    return (
        <div className="topic">
            <h3>Request topic id: {topicId}</h3>
        </div>
    )
}

export default Topic;