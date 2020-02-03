import React from 'react';

import { Link, Route } from 'react-router-dom';
import { MobilePost } from 'pages/mobile/';

const MobilePosts = ({ match }) => {
    return (
        <div>
            <h2>Mobile Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Mobile Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Mobile Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Mobile Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Mobile Post #4</Link></li>
            </ul>
            <Route exact path={match.url} render={() => (<h3>Please select any post</h3>)} />
            <Route path={`${match.url}/:id`} component={MobilePost} />
        </div>
    );
}

export default MobilePosts;