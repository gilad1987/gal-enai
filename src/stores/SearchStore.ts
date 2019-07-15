import {action, observable} from "mobx";
import Api from "../services/Api";

class SearchStore {

    api:Api;

    @observable query = '';

    @observable results = [];

    constructor(api:Api) {
        this.api = api;
    }

    @action setResults(results: []) {
        this.results = results;
    }
}

export default SearchStore;
