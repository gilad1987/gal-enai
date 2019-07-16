import React from "react";
import {inject} from "mobx-react";
import styled from "styled-components";
import Tree from "./Tree";

const Flex = styled.div`
display: flex;
justify-content: center;
div.answer{
flex:1
}
ul{
padding-left: 20px;
}
.current{color: #fb1c35; font-weight: bold}

`;


function SearchResultContent({id, api, treesStore}: any) {

    const [html, setHtml] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    const tree = treesStore.findBranch('data', id);

    api.getResultContent(id).then((response: any) => {
        setHtml(response);
        setLoading(false);
    });

    function createMarkup() {
        return {__html: html};
    }

    return (
        <Flex style={{
            'maxWidth': 1400,
            margin: '0 auto'
        }}>
            {tree && <Tree tree={tree}/>}
            {loading && <img alt='a' src={'images/Dual_Ring-1s-200px-blue.svg'}/>}
            {!loading && <div className={'answer'} dangerouslySetInnerHTML={createMarkup()}/>}
        </Flex>
    );
}

export default inject('api', 'treesStore')(SearchResultContent);
