import { createRequire, Module } from 'module';
const require = createRequire(import.meta.url);
const xlsx=require('xlsx')
import ItemClass from './item.js';
const path='itemsListe.xlsx';
const workbook = xlsx.readFile(path);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
let listItems = [];
let item;
for (let cell in worksheet) {

    const cellAsString = cell.toString();
    if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && (cellAsString[1] > 1||(cellAsString[1] == 1 && cellAsString[1] >0))){
        if (cellAsString[0] === 'A') {
           item=new ItemClass(`${worksheet[cell].v}`,worksheet[`B${cellAsString[1]}`].v);
            listItems.push(item)
        };
    }    
} 
// module.exports.items=items
console.log(listItems)
export default listItems