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

    // const addBookmark = bookmark => {
    //     bookmark.id = createId();
    //     setBookmarks( previousState => {
    //         return { ...previousState, bookmark };
    //     } );
    // };
    
    const editBookmark = bookmark => {
        console.log( 'Edit Bookmark: ', bookmark );
    };
    
    const deleteBookmark = id => {
        setBookmarks( bookmarks.filter( bookmark => bookmark.id === id ) );
    };

    return (
        <div className="wrapper">
            <Header title="Bookmarker" />
            <AddBookmark />
            <Bookmarks
                bookmarks={ bookmarks }
                editBookmark={ editBookmark }
                deleteBookmark={ deleteBookmark }
            />
        </div>
    );
}

export default App;
