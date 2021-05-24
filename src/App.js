import React, { useState, useEffect } from 'react';

import { createId } from './helpers/createId';
import { SESSION_STORAGE_NAME } from './helpers/constants';

import Header from './components/Header';
import AddBookmark from './components/AddBookmark';
import Bookmarks from './components/Bookmarks';

/**
 * Application Root
 *
 * @returns {object} React component render
 */
function App() {

    const [ bookmarks, setBookmarks ] = useState( [] );

    const addBookmark = bookmarkUrl => {

        const newBookmark = {
            id: createId(),
            url: bookmarkUrl
        };

        const allBookmarks = [ ...bookmarks, newBookmark ];
        setBookmarks( allBookmarks ); // set in state
        localStorage.setItem( SESSION_STORAGE_NAME, JSON.stringify( allBookmarks ) ); // also set in local storage for page refresh
    };
    
    const deleteBookmark = id => {
        const deletedBookmark = bookmarks.filter( bookmark => bookmark.id !== id );
        setBookmarks( deletedBookmark ); // set in state
        localStorage.setItem( SESSION_STORAGE_NAME, JSON.stringify( deletedBookmark ) ); // also delete in local storage for page refresh
    };

    const deleteAllBookmarks = () => {
        setBookmarks( [] ); // set in state
        localStorage.removeItem( SESSION_STORAGE_NAME ); // also remove in local storage for page refresh
    };

    useEffect( () => {
        const getSavedBookmarks = () => {
            const savedBookmarks = localStorage.getItem( SESSION_STORAGE_NAME );
            if ( savedBookmarks ) {
                setBookmarks( JSON.parse( savedBookmarks ) );
            }
        };
        getSavedBookmarks();
    }, [] );

    return (
        <div className="wrapper">
            <Header title="Bookmarker" />
            <AddBookmark addBookmark={ addBookmark } deleteAllBookmarks={ deleteAllBookmarks } />
            <Bookmarks
                bookmarks={ bookmarks }
                deleteBookmark={ deleteBookmark }
            />
        </div>
    );
}

export default App;
