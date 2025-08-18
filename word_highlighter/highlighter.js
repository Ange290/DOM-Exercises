let myParagraph = document.getElementById('myParagraph');
let text = myParagraph.textContent;

function highlightWord(input){
let rmv = text.trim().split('\n').join('');
let arr = rmv.split(' ').filter(item => item !== "");
let duplicate = [... new Set(arr)];
let result= [];

for(let x = 0; x <= duplicate.length; x++){
    let counter = 0;
    for(let y = 0; y<= arr.length; y++){
        if(duplicate[x] === arr[y]){
            counter += 1;
           
        }
    }
     result.push([duplicate[x], counter]);

}
let sorted = result.sort((a,b)=> b[1] - a[1]);
let top5 =sorted.slice(0,5);
let obj = Object.fromEntries(top5); 

for(let i=0; i<= arr.length; i++){
    let word = arr[i];
    if(obj.hasOwnProperty(word)){
        arr[i] = `<span class ="highlight">${word}</span>`;
        // span.classList.add(`span-${i +1}`)
    }
}
myParagraph.innerHTML = arr.join(' ')
console.log(myParagraph);
}
highlightWord(text)
