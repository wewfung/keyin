// Importing Single Functions
import {shit, otherShit} from "./lib/shit";
import {getDataSetById, searchForDataSets} from "./getdatasets.js";

// Importing Classes
import Graph from './lib/graph';

shit();
otherShit();

// searchForDataSets().then(data => console.log(data)).catch(err => console.log(err));
// searchForDataSets('').then(data => console.log(data)).catch(err => console.log(err));
// getDataSetById('4d4418ca-ce52-465c-8a84-f11260c7da92', 1).then(data => console.log('data' + data));

const graph = new Graph({height: 10});
