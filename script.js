const f = document.getElementById('f');
const c = document.getElementById('c');

f.addEventListener('input',fTOc);
c.addEventListener('input',cTOf);

function fTOc(){
    let result = (parseFloat(f.value)-32)*5/9;
    c.value = result;
}
function cTOf(){
    let result = (parseFloat(c.value)*9/5)+32;
    f.value = result;
}