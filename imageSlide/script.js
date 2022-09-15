let number = document.querySelector('div.display div.number span');
let next =  document.querySelector('div.display div.buttons button#next');
let prev = document.querySelector('div.display div.buttons button#prev');
let reset = document.querySelector('div.display div.buttons button#reset');
let lister = document.querySelector('div.display div.list');
let img =  document.querySelector('div.display div.images img')
let n  = 0;

let list = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/09/07/07/07/cat-7438092_960_720.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg'
]
// add image here for more images
// above array we put image links
number.innerText = n;
img.src = list[n]

next.onclick = function(){
  if(n >= list.length-1){
     this.disabled = true;
     // to make button disabled when its more than images in array
  }else{
  n++;
  }
  number.innerText = n;
  // lister.innerText = list[n]
  img.src = list[n]
}

prev.onclick = function(){
  if(n <= 0){
     this.disabled = true;
  }else{
  n--;
  }
  number.innerText = n;
  // lister.innerText = list[n]
  img.src = list[n]
}

reset.onclick = function(){
  n = 0;
  number.innerText = n;
  // lister.innerText = list[n]
  img.src = list[n]
  next.disabled = false;
  prev.disabled = false;
}