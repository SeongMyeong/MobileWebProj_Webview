import React from 'react';

const MobilePost = ({ match }) => {
    return (
        <div>
            모바일 포스트 {match.params.id}
        </div>
    );
}

export default MobilePost;