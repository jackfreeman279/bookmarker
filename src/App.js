import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { createId } from './helpers/createId';
import { SESSION_STORAGE_NAME, BOOKMARKS_PER_PAGE } from './helpers/constants';

import Header from './components/Header';
import Footer from './components/Footer';
import AddBookmark from './components/AddBookmark';
import Bookmarks from './components/Bookmarks';
import Pagination from './components/Pagination';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

/**
 * Application Root
 *
 * @returns {object} React component render
 */
function App() {

    const [ bookmarks, setBookmarks ] = useState( [] );
    const [ currentPageNumber, setCurrentPageNumber ] = useState( 1 );

    /**
     * Adds a bookmark to the current state and local storage
     *
     * @param {string} bookmarkUrl - the URL for the bookmark to be saved
     */
    const addBookmark = bookmarkUrl => {

        const newBookmark = {
            id: createId(),
            url: bookmarkUrl
        };

        const allBookmarks = [ ...bookmarks, newBookmark ];
        setBookmarks( allBookmarks ); // set in state
        localStorage.setItem( SESSION_STORAGE_NAME, JSON.stringify( allBookmarks ) ); // also set in local storage for page refresh
    };

    /**
     * Deletes a single bookmark from the list
     *
     * @param {string} id - the ID of the bookmark to delete, created previously by the createId() helper
     */
    const deleteBookmark = id => {
        const deletedBookmark = bookmarks.filter( bookmark => bookmark.id !== id );
        setBookmarks( deletedBookmark ); // set in state
        localStorage.setItem( SESSION_STORAGE_NAME, JSON.stringify( deletedBookmark ) ); // also delete in local storage for page refresh
    };

    /**
     * Deletes all bookmarks from the list
     */
    const deleteAllBookmarks = () => {
        setBookmarks( [] ); // set in state
        localStorage.removeItem( SESSION_STORAGE_NAME ); // also remove in local storage for page refresh
    };

    /**
     * Splits the Bookmarks up into pages
     *
     * @param {Array<object>} bookmarksList - list of bookmarks from state or local storage
     * @returns {Array} bookmarks split into pages
     */
    const splitBookmarksByPage = bookmarksList => {
        const indexOfLastBookmark = currentPageNumber * BOOKMARKS_PER_PAGE;
        const indexOfFirstBookmark = indexOfLastBookmark - BOOKMARKS_PER_PAGE;
        const currentBookmarks = bookmarksList.slice( indexOfFirstBookmark, indexOfLastBookmark );
        return currentBookmarks;
    };

    useEffect( () => {

        /**
         * Retrieve saved bookmarks from local storage
         */
        const loadSavedBookmarks = () => {
            const savedBookmarks = localStorage.getItem( SESSION_STORAGE_NAME );
            if ( savedBookmarks ) {
                setBookmarks( JSON.parse( savedBookmarks ) );
            }
        };

        loadSavedBookmarks();
        
    }, [] );

    return (
        <Container className="wrapper">
            <Header title="Bookmarker" />
            <AddBookmark addBookmark={ addBookmark } deleteAllBookmarks={ deleteAllBookmarks } />
            <Bookmarks
                bookmarks={ splitBookmarksByPage( bookmarks ) }
                deleteBookmark={ deleteBookmark }
            />
            <Pagination
                bookmarks={ bookmarks }
                setCurrentPage={ setCurrentPageNumber } />
            <Footer />
        </Container>
    );
}

export default App;
