import React from 'react';
import './App.scss';
import Search from "./components/Search";

const App: React.FC = () => {
    return (
        <div className="App" dir={'rtl'}>
            <Search/>
        </div>
    );
}

export default App;
