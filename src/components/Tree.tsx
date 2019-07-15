import React from "react";
import styled from "styled-components";

const TreeStyled = styled.div`
> ul{position: sticky; top:0;margin-top: 0;}
> ul >li{overflow: auto}
li{
margin-bottom: 0;
}
`;

function Tree({tree}: any) {

    function getParent(tree: any): any {
        if (tree.parent && tree.parent.parent === null) {
            return tree;
        }
        return getParent(tree.parent);
    }

    const parent = getParent(tree);

    function renderTree(tree: any, currentBranch: any): any {
        return (
            <ul key={tree.text}>
                <li className={currentBranch.data === tree.data ? 'current' : ''}>
                    {tree.text}
                    {tree.children ? tree.children.map((child: any) => renderTree(child, currentBranch)) : null}
                </li>

            </ul>
        )
    }

    return (
        <TreeStyled>
            {renderTree(parent, tree)}
            <div> </div>
        </TreeStyled>
    )
}

export default Tree;
