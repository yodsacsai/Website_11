let showtype = document.getElementById('showtype');
let showperson = document.getElementById('showperson');
let showsale = document.getElementById('showsale');
let showpay = document.getElementById('showpay');

let type = localStorage.getItem('typeseminar');
let person = localStorage.getItem('personseminar');
let sale = localStorage.getItem('sale');

let saleprice = ((Number(type) * Number(person) * Number(sale)));
let pay = (Number(type) * Number(person)) - ((Number(type) * Number(person) * Number(sale)));

if(Number(type) == 700.50){
    showtype.innerHTML = 'Adobe Photoshop';
}else if(Number(type) == 900.50){
    showtype.innerHTML = '3D MAX';
}else{
    showtype.innerHTML = 'Adobe Dreamweaver';
}


showperson.innerHTML = person;
showsale.innerHTML = saleprice;
showpay.innerHTML = pay;