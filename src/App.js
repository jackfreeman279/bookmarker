import React from 'react';

import Header from './components/Header';
import AddBookmark from './components/AddBookmark';

/**
 * Application Root
 *
 * @returns {object} React component render
 */
function App() {
    return (
        <div className="App">
            <Header title="Bookmarker" />
            <AddBookmark />
        </div>
    );
}

export default App;
