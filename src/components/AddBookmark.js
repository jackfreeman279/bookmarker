import React, { useState } from 'react';
import styled from 'styled-components';

// import { ReactComponent as Logo } from '../i/logo.svg';
import { ReactComponent as Plus } from '../i/plus.svg';

const Form = styled.form`
    margin-bottom: var(--spacing);
`;

const Label = styled.label`
    margin-bottom: var(--spacing);
`;

const Input = styled.input`
    padding: var(--spacing-s);
    font-size: 2.2rem;
`;

const Button = styled.button`
    margin-bottom: var(--spacing);
`;

/**
 * An input used to submit a new bookmark
 *
 * @returns {object} React component render
 */
export default function AddBookmark() {

    const [ formState, setFormState ] = useState( { value: '' } );
    const [ formError, setFormError ] = useState( '' );
    const [ placeholderText, setPlaceholderText ] = useState( 'Enter a valid URL to save a bookmark.' );

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
     */
    const handleValidation = bookmarkUrl => {

        const validationPattern = /^(http|https):\/\/[^ "]+$/;

        if ( !bookmarkUrl ) { // no URL passed
            setFormError( 'Please enter a URL.' );
        } else if ( !validationPattern.test( bookmarkUrl ) ) { // URL does not match regex pattern
            setFormError( 'Please enter a full, valid URL. Make sure to include "https://"!' );
        } else { // clear error
            setFormError( '' );
        }
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
            setPlaceholderText( 'How about another URL?' );
        } else {
            setPlaceholderText( 'Try a different URL.' );
        }
    };

    return (
        <Form onSubmit={ event => handleSubmit( event ) }>
            <Label>
                Bookmark URL:
                <Input
                    type="text"
                    value={ formState.value }
                    onChange={ event => handleChange( event ) }
                    placeholder={ placeholderText }
                    className={ formError ? 'error' : '' } />
            </Label>
            <span className="tooltip">{ formError }</span>
            <Button type="submit" className="button">
                <Plus className="button__icon" />
            </Button>
        </Form>
    );
}
