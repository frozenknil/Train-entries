let count = 0;

let counter = document.getElementById("display-entry");

let entry = document.getElementById('entry-display');

function increment(){

       count = count + 1;
       counter.innerText = count;
}

function save(){

      entry.textContent += count + " - ";
      counter.innerText = 0;
      count = 0;

}
