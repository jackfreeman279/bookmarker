import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Github } from '../i/github.svg';
import { ReactComponent as External } from '../i/external.svg';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    margin-bottom: var(--spacing-l);
`;

const Link = styled.a`
    display: flex;
    align-items: center;
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

const GithubIcon = styled( Github )`
    width: 2.2rem;
    height: 2.2rem;
    margin-left: var(--spacing-s);
    fill: currentColor;
`;

/**
 * Footer
 *
 * @returns {object} React component render
 */
export default function Header() {

    return (
        <Container>
            <Link
                href="https://github.com/fivepixelparallax/bookmarker#readme"
                target="_blank"
                rel="noopener noreferrer">
                README.md
                <ExternalIcon />
            </Link>
            <Link
                href="https://github.com/fivepixelparallax/bookmarker"
                target="_blank"
                rel="noopener noreferrer">
                View Code
                <GithubIcon />
            </Link>
        </Container>
    );
}
