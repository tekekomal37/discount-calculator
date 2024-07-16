const addButton =document.querySelector('#add');
addButton.addEventListener('click',function(event){
    event.preventDefault();
    const numm1 = document.querySelector('#num1').value;
    const numm2 = document.querySelector('#num2').value;
    const elementPara = document.createElement('p');
    const totaldiscount = document.createTextNode(`${numm1*numm2 /100}`);
   elementPara.appendChild(totaldiscount).innerHTML;
   const result = document.querySelector('.amount');
   result.appendChild(elementPara).innerHTML;

})