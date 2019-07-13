import React from "react";
import SearchResult from "./SearchResult";
import styled from "styled-components";

const SearchResultsStyled = styled.section`
 p.title {
span:first-child{
font-size: 26px;
    text-decoration: underline;
        color: #0a92d0;
    font-weight: bold;
}
    span:nth-child(2){
    text-decoration: none;
    font-size: 14px;
    color:black;
    }
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
            <p className={'title'}><span>{title}:</span> <span >({items.length} תוצאות)</span></p>
            {results}
        </SearchResultsStyled>
    )
}
