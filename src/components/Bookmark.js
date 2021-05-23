import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../i/logo.svg';
import { ReactComponent as External } from '../i/external.svg';
import { ReactComponent as Delete } from '../i/delete.svg';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--spacing) var(--spacing) var(--spacing) var(--spacing-l);
    border: 1px solid var(--light-ui);
    border-radius: 6px;
    box-shadow: -1px 1px 6px 3px rgba(#000, .2);
`;

const IconContainer = styled.div`
    width: 6.2rem;
    height: 6.2rem;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`;

const Icon = styled( Logo )`
    width: 9.6rem;
    height: 9.6rem;
    transform: translate(-35%, -35%);
    fill: var(--very-light-ui);
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
            <IconContainer>
                <Icon />
            </IconContainer>
            <Link
                href={ bookmark.url }
                target="_blank"
                rel="noopener noreferrer">
                { bookmark.url }
                <ExternalIcon />
            </Link>
            <Button
                onClick={ () => deleteBookmark( bookmark.id ) }
                className="button button--delete">
                <span className="tooltip">Delete Bookmark</span>
                <Delete className="button__icon"/>
            </Button>
        </Container>
    );
}

Bookmark.propTypes = {
    bookmark: PropTypes.object,
    deleteBookmark: PropTypes.func
};

export default Bookmark;