import React, { useState } from 'react';

import { createId } from './helpers/createId';

import Header from './components/Header';
import AddBookmark from './components/AddBookmark';
import Bookmarks from './components/Bookmarks';

/**
 * Application Root
 *
 * @returns {object} React component render
 */
function App() {

    const [ bookmarks, setBookmarks ] = useState( [
        {
            id: createId(),
            url: 'https://theguardian.com/uk'
        }
    ] );

    const addBookmark = bookmarkUrl => {
        const bookmark = {
            id: createId(),
            url: bookmarkUrl
        };
        setBookmarks( previousState => {
            return [ ...previousState, bookmark ];
        } );
    };
    
    const deleteBookmark = id => {
        setBookmarks( bookmarks.filter( bookmark => bookmark.id === id ) );
    };

    return (
        <div className="wrapper">
            <Header title="Bookmarker" />
            <AddBookmark addBookmark={ addBookmark } />
            <Bookmarks
                bookmarks={ bookmarks }
                deleteBookmark={ deleteBookmark }
            />
        </div>
    );
}

export default App;
