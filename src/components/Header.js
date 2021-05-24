import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../i/logo.svg';

const Container = styled.header`
    margin-bottom: var(--spacing-l);
    padding-top: var(--spacing-l);
    text-align: center;

    @media (max-width: 415px) {
        margin-bottom: var(--spacing);
    }
`;

const HomeLink = styled( Link )`
    display: inline-flex;
    align-items: center;
    margin-bottom: var(--spacing-s);

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
    width: 6.4rem;
    height: 6.4rem;
    margin-right: var(--spacing-s);
    fill: var(--text-dark);
    transition: transform var(--transition);

    @media (max-width: 840px) {
        width: 4rem;
        height: 4rem;
    }
`;

const Title = styled.h1`
    position: relative;
    font-size: 6.4rem;
    line-height: 1;
    
    &::after { // partial underline
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

    @media (max-width: 840px) {
        font-size: 4rem;
    }
`;

const Subtitle = styled.h4`

    @media (max-width: 840px) {
        font-size: 2rem;
    }

    @media (max-width: 415px) {
        font-size: 1.6rem;
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
        <Container>
            <HomeLink to="/">
                <BrandLogo className="logo" />
                <Title className="title">
                    { title }
                </Title>
            </HomeLink>
            <Subtitle>
                Save your favourite places around the web.
            </Subtitle>
        </Container>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
