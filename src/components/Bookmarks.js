import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Bookmark from './Bookmark';

const List = styled.ol`
    margin-bottom: var(--spacing-s);
    list-style-type: none;
`;

/**
 * An individual Bookmark
 *
 * @param {object} props - passed component props
 * @param {Array<object>} props.bookmarks - the list of individual bookmarks to render
 * @param {Function} props.deleteBookmark - deletes a bookmark from the list
 * @returns {object} React component render
 */
function Bookmarks( { bookmarks, deleteBookmark } ) {

    return (
        <List>
            <h3>
                Your Bookmarks
            </h3>
            {
                bookmarks && bookmarks.length > 0 ? (
                    bookmarks.map( bookmark => {
                        return (
                            <li key={ bookmark.id }>
                                <Bookmark bookmark={ bookmark } deleteBookmark={ deleteBookmark } />
                            </li>
                        );
                    } )
                ) : (
                    'No Bookmarks yet! Use the text input at the top of the page to add your first one.'
                )
            }
        </List>
    );
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    deleteBookmark: PropTypes.func
};

export default Bookmarks;