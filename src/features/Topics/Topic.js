import React from 'react';
import {
    useParams,
} from 'react-router-dom';

const Topic = ({

}) => {
    let { topicId } = useParams();

    return (
        <div clasName="topic">
            <h3>Request topic id: {topicId}</h3>
        </div>
    )
}

export default Topic;