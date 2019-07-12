import React from "react";
import {inject} from "mobx-react";

function SearchResult({item,query}: any): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {

    const getHighlightedText = (text: string, higlight: string) => {
        let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
        return <span> {parts.map((part, i) =>
                    <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? {fontWeight: 'bold',color:'#e10e0e',fontSize:17} : {}}>{part}</span>)
        } </span>;
    };

    return (
        <>
            <h3>{item.doc_id}</h3>
            <p>{getHighlightedText(item.text,query)}</p>
        </>
    )
}

export default inject('searchStore')(SearchResult);
