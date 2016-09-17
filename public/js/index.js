// Importing Single Functions
import {getDataSetById, searchForDataSets} from "./getdatasets.js";
import {setupHtml} from "./params.js";
import {searchButtonClicked} from "./searchDatasets.js";

// Importing Classes
import Graph from './lib/graph';

var activeData = [];

setupHtml();

// searchForDataSets().then(data => console.log(data)).catch(err => console.log(err));
// searchForDataSets('').then(data => console.log(data)).catch(err => console.log(err));
// getDataSetById('4d4418ca-ce52-465c-8a84-f11260c7da92', 1).then(data => console.log('data' + data));

const graph = new Graph({height: 10});


$("#searchButton").click(function() {
    searchButtonClicked();
})
