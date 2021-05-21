import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BookmarksContext from './bookmarksContext';

const BookmarksState = props => {

    const [ bookmarks, setBookmarks ] = useState( [] );

    return (
        <BookmarksContext.Provider
            value={ {
                bookmarks: bookmarks,
                setBookmarks,
            } }>
            { props.children }
        </BookmarksContext.Provider>
    );
};

BookmarksState.propTypes = {
    children: PropTypes.node,
};

export default BookmarksState;