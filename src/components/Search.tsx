import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import {inject, observer} from "mobx-react";
import styled from "styled-components";

const SearchResultsStyled = styled.section`
max-width: 900px;
margin: 0 auto;

`;

function Search({api, searchStore}: any): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {

    const onSubmit = async (query: string) => {
        api.query = query;
        const response = await api.search(query);
        searchStore.setResults(response);
    };

    return (
        <SearchResultsStyled>
            <SearchBar onSubmit={onSubmit}/>
            {
                searchStore.results.Bold_Paragrphs &&
                <SearchResults
                    items={searchStore.results.Bold_Paragrphs}
                    query={api.query}
                    title={'פסקאות מודגשות'}
                />
            }
            {
                searchStore.results.Regular_Paragraphs &&
                <SearchResults
                    items={searchStore.results.Regular_Paragraphs}
                    query={api.query}
                    title={'פסקאות רגילות'}
                />
            }
        </SearchResultsStyled>
    )
}

export default inject('api', 'searchStore')(observer(Search));
