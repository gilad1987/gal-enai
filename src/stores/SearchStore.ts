import {action, observable} from "mobx";

class SearchStore {

    @observable query = '';

    @observable results = [];

    @action setResults(results: []) {
        this.results = results;
    }
}

export default SearchStore;
