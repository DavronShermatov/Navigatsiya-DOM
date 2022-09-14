// body qismini chiqarib beradi
console.log(document.body) 
// head qismini chiqarib beradi
console.log(document.head)
// firschild birinchi elementini chiqarib beradi
console.log(document.firstChild)
// lastchild oxirgi elementini chiqarib beradi 
console.log(document.lastChild)
// childnodes baarcha elementini chiqarib beradi
console.log(document.childNodes)

// bola elementdan ona elementga o'tish 

console.log(document.querySelector('#btn').parentNode)

// htmlga id bermasdan <data- ""> usulida nomlash
// nextElementSibling keyingi elementni chiqarib beradi 
console.log(document.querySelector('[data-current="b"]').nextElementSibling)

for(let node of document.body.childNodes){
    if(node.nodeName='#text'){
        continue
    }
    console.log(node)
}
