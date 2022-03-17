let typeseminar = document.getElementsByName('typeseminar');
let personseminar = document.getElementById('personseminar');
let sale = document.getElementsByName('sale');
let btncal = document.getElementById('btncal');

let sendDataForCalShow = () => {
    if(personseminar.value.trim().length == 0){
        alert('ป้อนจำนวนคนด้วย');
    }else{
        //ส่งข้อมูลไปที่หน้า showseminar เพื่อคำนวณและแสดงผล
        if(typeseminar[0].checked){
            localStorage.setItem('typeseminar', typeseminar[0].value);
        }else if(typeseminar[1].checked){
            localStorage.setItem('typeseminar', typeseminar[1].value);
        }else{
            localStorage.setItem('typeseminar', typeseminar[2].value);
        }

        localStorage.setItem('personseminar', personseminar.value);
        
        localStorage.setItem('sale', sale[0].value);

        window.open('showseminar.html', '_blank');
    }
}

btncal.addEventListener('click', sendDataForCalShow);