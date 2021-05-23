import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../i/logo.svg';

const HomeLink = styled( Link )`
    display: inline-flex;
    align-items: center;
    margin-bottom: var(--spacing-l);
    padding-top: var(--spacing-l);

    &:hover {

        .logo {
            transform: translateY(var(--spacing-xs));
        }

        .title::after {
            width: 100%;
        }
    }
`;

const BrandLogo = styled( Logo )`
    width: var(--spacing-xl);
    height: var(--spacing-xl);
    margin-right: var(--spacing-s);
    fill: var(--text-dark);
    transition: transform var(--transition);
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
        <HomeLink to="/">
            <BrandLogo className="logo" />
            <Title className="title">
                { title }
            </Title>
        </HomeLink>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
