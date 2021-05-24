import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BOOKMARKS_PER_PAGE } from '../helpers/constants';

const List = styled.ol`
    display: flex;
    justify-content: center;
    margin-bottom: var(--spacing);
    list-style-type: none;
`;

const ListItem = styled.li`
    margin: 0 var(--spacing-s);
`;

/**
 * Header
 *
 * @param {object} props - passed component props
 * @param {Array<object>} props.bookmarks - all current bookmarks
 * @param {Function} props.setCurrentPage - function used to update the current page state
 * @returns {object} React component render
 */
function Pagination( { bookmarks, setCurrentPage } ) {

    if ( bookmarks.length <= BOOKMARKS_PER_PAGE ) {
        return null;
    }

    let pageNumbers = [];
    for ( let idx = 1; idx <= Math.ceil( bookmarks.length / BOOKMARKS_PER_PAGE ); idx++ ) {
        pageNumbers.push( idx );
    }

    const renderPageNumbers = pageNumbers.map( number => {
        return (
            <ListItem key={ number }>
                <button className="button button--primary" onClick={ () => setCurrentPage( number ) }>
                    { number }
                </button>
            </ListItem>
        );
    } );

    return (
        <List>
            { renderPageNumbers }
        </List>
    );
}

Pagination.propTypes = {
    bookmarks: PropTypes.array,
    setCurrentPage: PropTypes.func
};

export default Pagination;
