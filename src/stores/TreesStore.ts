import Api from "../services/Api";

class TreesStore {

    api: Api;

    tree = null;

    constructor(api: Api) {
        this.api = api;
    }

    async getTree() {
        const tree = await this.api.getTree();
        this.tree = this.setParent(tree, null);
    }

    setParent = (child: any, parent: any) => {

        if (child.children) {
            child.children = child.children.map((_child: any) => this.setParent(_child, child));
        }
        child.parent = parent;
        return child;
    }

    findBranch = (k: any, v: any, o: any = this.tree): any => {
        let _k: any;
        for (_k in o) {

            if (_k === 'parent') continue;

            if(typeof o[_k]=== 'object'){
                const match = this.findBranch(k,v,o[_k]);

                if(match){
                    return match;
                }
            }
            if (_k === k && o[k] === v) {
                return o;
            }

        }
    }
}

export default TreesStore;
