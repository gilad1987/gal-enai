import React from 'react';
import './App.scss';
import Search from "./components/Search";
import {inject} from "mobx-react";

const App: React.FC = ({treesStore}: any) => {

    treesStore.getTree();

    return (
        <div className="App" dir={'rtl'}>
            <Search/>
        </div>
    );
}

export default inject('treesStore')(App);
