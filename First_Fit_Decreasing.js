export default function First_Fit_Decreasing(items,bins){
    let ordered_items=Object.keys(items).sort(function(a, b) { return items[b] - items[a] });
    let setBox={boxs:[]}
    let i=0;
    let j;
    // Preparer les boxes:
    for(let i=0;i<ordered_items.length;i++){
    setBox.boxs.push({capacity:bins.capacity,items:[]});
    }
    //Remplissage des objets dans les Boxes:
    while(i<ordered_items.length){
        j=0
        while(j<setBox.boxs.length){
        if(items[ordered_items[i]]<= setBox.boxs[j].capacity){
            setBox.boxs[j].items.push(ordered_items[i]);
            setBox.boxs[j].capacity=setBox.boxs[j].capacity-items[ordered_items[i]];
            i=i+1;
            break;
        }else{
            j=j+1;
             }
        }
    }
    //Fermer les box non utiliser:
    const isBoxOpen = (element) => element.capacity === bins.capacity;
    setBox.boxs.splice(setBox.boxs.findIndex(isBoxOpen),setBox.boxs.length-1)
    return setBox
}
