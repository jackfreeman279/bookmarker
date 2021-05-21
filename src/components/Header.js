import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../i/logo.svg';

const Container = styled.header`
        display: flex;
        align-items: center;
        margin-bottom: var(--spacing);
        padding: var(--spacing-l) 0;
    `;

const BrandLogo = styled( Logo )`
    width: var(--spacing-xl);
    height: var(--spacing-xl);
    margin-right: var(--spacing-s);
    fill: var(--text-dark);
`;

const Title = styled.h1`
    position: relative;
    font-size: var(--spacing-xl);
    line-height: 1;
    
    &::after {
        content: '';
        width: 40%;
        height: .4rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--primary);
        will-change: width;
        transition: width .2s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

/**
 * Header
 *
 * @param {object} props - passed component props
 * @param {string} props.title - title text used for the header
 * @returns {object} React component render
 */
function Header( { title } ) {

    return (
        <div className="wrapper">
            <Container>
                <BrandLogo />
                <Title>
                    { title }
                </Title>
            </Container>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
