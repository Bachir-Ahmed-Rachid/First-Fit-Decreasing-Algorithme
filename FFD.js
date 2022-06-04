//importer la classe des objets
import listItems from'./import_items.js';
//importer la classe des bins
import BinClass from './bin.js';
//Declaration des capacity des bins
import First_Fit_Decreasing from './First_Fit_Decreasing.js';
const bin=new BinClass(12);
let items={};
listItems.map(element=>{
    items[`${element.name}`]=element.dimension;
})
// Declaration des objets avec leur dimension:
// let items={itme_1:3,itme_2:2,itme_3:2,itme_4:2,itme_5:4,itme_6:9,itme_7:4,itme_8:4,itme_9:4};
// Orrdonencer les elements du plus grand au plus petit:
const result=First_Fit_Decreasing(items,bin)
console.log(result.boxs)