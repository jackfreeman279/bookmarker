import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as External } from '../i/external.svg';
import { ReactComponent as Cross } from '../i/cross.svg';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--spacing) var(--spacing-s);
    border-bottom: 2px solid var(--light-ui);
    box-shadow: -1px 1px 6px 3px rgba(#000, .2);
`;

const Link = styled.a`
    position: relative;
    color: var(--primary);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const ExternalIcon = styled( External )`
    width: 1.4rem;
    height: 1.4rem;
    margin-left: var(--spacing-xs);
    fill: currentColor;
`;

const Button = styled.button`
    margin-left: auto;
    background: none;
    color: var(--error);

    &:hover,
    &:focus {

        .tooltip {
            transform: translateX(0) scale(1);
        }
    }
`;

/**
 * An individual Bookmark
 *
 * @param {object} props - passed component props
 * @param {object} props.bookmark - a bookmark to display
 * @param {Function} props.deleteBookmark - deletes a bookmark from the list
 * @returns {object} React component render
 */
function Bookmark( { bookmark, deleteBookmark } ) {

    return (
        <Container>
            <Link
                href={ bookmark.url }
                target="_blank"
                rel="noopener noreferrer">
                { bookmark.url }
                <ExternalIcon />
            </Link>
            <Button className="button button--delete" onClick={ () => deleteBookmark( bookmark.id ) }>
                <span className="tooltip tooltip--right">Delete Bookmark</span>
                <Cross className="button__icon"/>
            </Button>
        </Container>
    );
}

Bookmark.propTypes = {
    bookmark: PropTypes.object,
    deleteBookmark: PropTypes.func
};

export default Bookmark;