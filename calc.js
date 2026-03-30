let num1 = '';
let op = '';
let num2 = '';
let secondnum = false;

function append(value){

   if(!secondnum){
    num1+=value;
    document.getElementById('input').value = num1;
   }
   
   else{
    num2 += value;
    document.getElementById('input').value = num2;
   }

}

function ops(ops){
    op =  ops;
    document.getElementById('input').value = op;
    secondnum = true;
    
}

function calculate(){
    let result;
    let curr = parseInt(num1);
    let prev = parseInt(num2);
    switch(op){
        case '+':
            result = curr + prev;
            break;

        case '-':
            result = curr - prev;    
            break;
            
        case 'x':
            result = curr * prev;
            break;
        case '/':
            if(curr === 0){
                alert("Cannot divide to zero!");
                return;
            }
            result = curr / prev;
            break;
    }
    num1 = result.toString();
    op = '';
    num2 = '';
    document.getElementById("input").value = num1;
}

function reset(){
    num1 = ''
    op = '';
    num2 = '';
    secondnum = false;
    document.getElementById("input").value = '';
}