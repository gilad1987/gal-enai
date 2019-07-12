import React from "react";
import SearchResult from "./SearchResult";
import styled from "styled-components";

const SearchResultsStyled = styled.section`
 p.title{
font-size: 26px;
    text-decoration: underline;
        color: #0a92d0;
    font-weight: bold;
}


p{
margin-bottom: 5px;
    margin-top: 0;
}
h3{
margin-bottom: 3px;
font-size: 17px;
}
`;

export default function SearchResults({items,query,title}: any): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {
    const results = items.map((item:any)=>(<SearchResult
        key={item._id}
        item={item}
        query={query}/>));
    return (
        <SearchResultsStyled>
            <p className={'title'}>{title}:</p>
            {results}
        </SearchResultsStyled>
    )
}
