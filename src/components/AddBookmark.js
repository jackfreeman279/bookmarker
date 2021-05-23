import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { ReactComponent as Logo } from '../i/logo.svg';
import { ReactComponent as Plus } from '../i/plus.svg';

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing);
    font-size: 1.8rem;
`;

const Label = styled.label`
    position: relative;
`;

const Input = styled.input`
    min-width: 32rem;
    margin-left: var(--spacing-s);
    padding: var(--spacing-s);
    border: 2px solid var(--medium-ui);
    border-radius: 6px;

    &:active {
        border-color: var(--primary);
    }

    &.error {
        border-color: var(--negative);
    }
`;

const Button = styled.button`
    margin-left: var(--spacing-s);
`;

/**
 * An input used to submit a new bookmark
 *
 * @param {object} props - passed component props
 * @param {Function} props.addBookmark - function to add a bookmark
 * @returns {object} React component render
 */
function AddBookmark( { addBookmark } ) {

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
        <Form onSubmit={ event => handleSubmit( event ) }>
            <Label>
                Add new Bookmark:
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
    );
}

AddBookmark.propTypes = {
    addBookmark: PropTypes.func.isRequired
};

export default AddBookmark;