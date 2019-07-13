import React from "react";
import {inject} from "mobx-react";

function SearchResultContent({id,api}:any){

    const [html, setHtml] = React.useState('');

    api.getResultContent(id).then((response:any)=>{
        setHtml(response);
    });

    function createMarkup() {
        return {__html: html};
    }

    return (
        <div dangerouslySetInnerHTML={createMarkup()} />
    );
}

export default inject('api')(SearchResultContent);
