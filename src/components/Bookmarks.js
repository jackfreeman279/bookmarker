import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Bookmark from './Bookmark';

import { ReactComponent as Bin } from '../i/bin.svg';

const Header = styled.div`
    min-height: 4.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const List = styled.ol`
    margin-bottom: var(--spacing-s);
    list-style-type: none;
`;

const Button = styled.button`
    margin-left: var(--spacing-s);

    &.delete-all {
        margin-right: var(--spacing-s);

        &:hover,
        &:focus {

            .tooltip {
                transform: translateX(0) scale(1);
            }
        }
    }
`;

/**
 * An individual Bookmark
 *
 * @param {object} props - passed component props
 * @param {Array<object>} props.bookmarks - the list of individual bookmarks to render
 * @param {Function} props.deleteBookmark - deletes a bookmark from the list
 * @param {Function} props.deleteAllBookmarks - function the deletes all existing bookmarks
 * @returns {object} React component render
 */
function Bookmarks( { bookmarks, deleteBookmark, deleteAllBookmarks } ) {

    return (
        <>
            <Header>
                <h3>
                    Your Bookmarks
                </h3>
                {
                    bookmarks.length > 0 &&
                    <Button
                        onClick={ () => deleteAllBookmarks() }
                        className="delete-all button button--delete button--fill">
                        <span className="tooltip tooltip--right">Delete All Bookmarks</span>
                        <Bin className="button__icon"/>
                    </Button>
                }
            </Header>
            <List>
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
        </>
    );
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    deleteBookmark: PropTypes.func,
    deleteAllBookmarks: PropTypes.func
};

export default Bookmarks;