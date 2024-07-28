
num=parseInt(prompt("Enter the number of terms"))
        let f1=0, f2=1
        for(i=1;i<=num;i++){
            document.write(f1+"<br>")
            fib=f1+f2
            f1=f2
            f2=fib
        }
