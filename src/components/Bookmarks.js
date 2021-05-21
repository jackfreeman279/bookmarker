import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Bookmark from './Bookmark';

const List = styled.ol`
    list-style-type: none;
`;

const ListItem = styled.li`
    margin-bottom: var(--spacing-s);
`;

/**
 * An individual Bookmark
 *
 * @param {object} props - passed component props
 * @param {Array<object>} props.bookmarks - the list of individual bookmarks to render
 * @param {Function} props.editBookmark - enables a user to edit a bookmark
 * @param {Function} props.deleteBookmark - deletes a bookmark from the list
 * @returns {object} React component render
 */
function Bookmarks( { bookmarks, editBookmark, deleteBookmark } ) {

    return (
        <List>
            {
                bookmarks && bookmarks.length > 0 ? (
                    bookmarks.map( bookmark => {
                        return (
                            <ListItem key={ bookmark.id }>
                                <Bookmark bookmark={ bookmark } editBookmark={ editBookmark } deleteBookmark={ deleteBookmark } />
                            </ListItem>
                        );
                    } )
                ) : (
                    'No Bookmarks yet! Use the text input at the top of the page.'
                )
            }
        </List>
    );
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    editBookmark: PropTypes.function,
    deleteBookmark: PropTypes.function
};

export default Bookmarks;