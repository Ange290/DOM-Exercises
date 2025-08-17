//document.addEventListener("DOMContentLoaded", mostOccutingWord() );
     let paragraph = document.getElementById('myParagraph');
  let text = paragraph.textContent;

let mostOccutingWord = (input)=>{
 
let  lower =  input.toLowerCase().trim().split('\n').join('').trim();
let arr = lower.split(' ') .filter(item => item !== '');
let specialRemove = arr.map(item => item.replace(/[ ,;.]/g,''));
let Duplicate = [... new Set(specialRemove)];

let occuringWord =[];
for(let x = 0; x<=Duplicate.length; x++){
    let counter = 0;
    for(let y = 0; y<= specialRemove.length; y++){
        if(Duplicate[x] === specialRemove[y]){
            counter += 1;
        }
    }
    occuringWord.push([Duplicate[x], counter]);
}

let sorted = occuringWord.sort((a,b)=> b[1] - a[1]);
let top12 =sorted.slice(0,12);
let result = top12.map(element => element[0]);
return result;
//  console.log(result);
};
let words = mostOccutingWord(text);
let myWordCloud = document.getElementById('myWordCloud');
let fontSize = 64;
let decrement = 4;

for(let i =0; i < words.length; i++){
    let span = document.createElement('span');
    span.textContent = words[i] + "";
    span.style.fontSize = fontSize + 'px';
    span.style.fontFamily= 'Arial';
    span.style.color = `hsl(${i * 90}, 50%, 50%)`;
    span.classList.add(`span-${i + 1}`);
    myWordCloud.appendChild(span);
   fontSize -= decrement;

}