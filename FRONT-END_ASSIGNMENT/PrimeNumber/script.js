
function myfunc(num){

    if(num<=1){
        return false
    }
    for(i=2;i<num;i++){
        if(num%i==0){
            return false
        }
       return true
    }
}
n=parseInt(prompt("Enter a number"))
if(myfunc(n)==true){
    document.write("Prime Number")
}
else{
    document.write("Not a prime number")
}
