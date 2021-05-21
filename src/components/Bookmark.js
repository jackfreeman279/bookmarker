import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../i/logo.svg';
import { ReactComponent as Edit } from '../i/edit.svg';
import { ReactComponent as Delete } from '../i/delete.svg';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--spacing);
    border: 1px solid var(--light-ui);
    border-radius: 6px;
    box-shadow: -1px 1px 6px 3px rgba(#000, .2);
`;

const Icon = styled( Logo )`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0;
    left: var(--spacing);
`;

const Actions = styled.div`
    display: flex;
    margin-left: auto;
`;

const Button = styled.button`
    margin-left: var(--spacing-s);

`;

/**
 * An individual Bookmark
 *
 * @param {object} props - passed component props
 * @param {object} props.bookmark - a bookmark to display
 * @param {Function} props.editBookmark - enables a user to edit a bookmark
 * @param {Function} props.deleteBookmark - deletes a bookmark from the list
 * @returns {object} React component render
 */
function Bookmark( { bookmark, editBookmark, deleteBookmark } ) {

    return (
        <Container>
            <Icon />
            { bookmark.url }
            <Actions>
                <Button
                    onClick={ () => editBookmark( bookmark.id ) }
                    className="button button--edit">
                    <span className="tooltip">Edit</span>
                    <Edit className="button__icon"/>
                </Button>
                <Button
                    onClick={ () => deleteBookmark( bookmark.id ) }
                    className="button button--delete">
                    <span className="tooltip">Delete</span>
                    <Delete className="button__icon"/>
                </Button>
            </Actions>
        </Container>
    );
}

Bookmark.propTypes = {
    bookmark: PropTypes.object,
    editBookmark: PropTypes.function,
    deleteBookmark: PropTypes.function
};

export default Bookmark;