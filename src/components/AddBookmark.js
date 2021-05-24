import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as Plus } from '../i/plus.svg';
import { ReactComponent as Bin } from '../i/bin.svg';

const Container = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: var(--spacing-l);
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 1.8rem;
`;

const Label = styled.label`
    width: 100%;
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    margin-top: var(--spacing-xs);
    padding: var(--spacing-s);
    border: 2px solid var(--light-ui);
    border-radius: 6px;

    &:focus,
    &:active {
        border-color: var(--primary);
        outline: none;
    }

    &.error {
        border-color: var(--error);
    }
`;

const Button = styled.button`
    margin-left: var(--spacing-s);

    &.delete-all {
        margin-right: calc(var(--spacing-s) + 1px); // added border width of bookmark tile to align

        &:hover,
        &:focus {

            .tooltip {
                transform: translateX(0) scale(1);
            }
        }
    }
`;

/**
 * An input used to submit a new bookmark
 *
 * @param {object} props - passed component props
 * @param {Function} props.addBookmark - function to add a bookmark
 * @param {Function} props.deleteAllBookmarks - function the deletes all existing bookmarks
 * @returns {object} React component render
 */
function AddBookmark( { addBookmark, deleteAllBookmarks } ) {

    const [ formState, setFormState ] = useState( { value: '' } );
    const [ formError, setFormError ] = useState( '' );
    const [ placeholderText, setPlaceholderText ] = useState( 'Paste Bookmark URL here' );

    /**
     * When the input is changed
     *
     * @param {object} event - click event interface
     */
    const handleChange = event => {
        setFormState( { value: event.target.value } );
    };

    /**
     * Validates a proposed bookmark URL
     * Uses regex to check that it contains a protocol (http or https), no spaces and no double quotes
     * React Controlled Inputs are sanitised by default, so no need to add this layer to prevent XSS
     *
     * @param {string} bookmarkUrl - the URL to validate
     * @returns {boolean} true of the URL has passed validation
     */
    const handleValidation = bookmarkUrl => {

        const validationPattern = /^(http|https):\/\/[^ "]+$/;

        if ( !bookmarkUrl ) { // no URL passed
            setFormError( 'Please enter a URL.' );
        } else if ( !validationPattern.test( bookmarkUrl ) ) { // URL does not match regex pattern
            setFormError( 'Please enter a full, valid URL. Make sure to include "https://"!' );
        } else { // clear error
            setFormError( '' );
            return true;
        }

        return false;
    };

    /**
     * Reset the form state and update the relevance of the placeholder text.
     *
     * @param {object} event - click event interface
     */
    const handleSubmit = event => {
        event.preventDefault();
        setFormState( { value: '' } );

        if ( handleValidation( formState.value ) ) {
            addBookmark( formState.value );
            setPlaceholderText( 'How about another?' );
        } else {
            setPlaceholderText( 'Invalid, see error tooltip for details.' );
        }
    };

    return (
        <Container>
            <Form onSubmit={ event => handleSubmit( event ) }>
                <Label>
                    To add a new Bookmark, paste it into the box below:
                    <Input
                        type="text"
                        value={ formState.value }
                        onChange={ event => handleChange( event ) }
                        placeholder={ placeholderText }
                        className={ formError ? 'error' : '' } />
                    <span className={ `tooltip tooltip--error ${ formError ? 'is-active' : '' }` }>{ formError }</span>
                </Label>
                <Button type="submit" className="button button--primary">
                    <span className="tooltip">Add Bookmark</span>
                    <Plus className="button__icon" />
                </Button>
            </Form>
            <Button
                onClick={ () => deleteAllBookmarks() }
                className="delete-all button button--delete button--fill">
                <span className="tooltip tooltip--right">Delete All Bookmarks</span>
                <Bin className="button__icon"/>
            </Button>
        </Container>
    );
}

AddBookmark.propTypes = {
    addBookmark: PropTypes.func.isRequired,
    deleteAllBookmarks: PropTypes.func
};

export default AddBookmark;