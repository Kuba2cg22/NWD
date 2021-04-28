function oblicz(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    


    while (a != b){
        if (a > b)
            {
                a = a - b;
            }

            else 
            {
                b = b - a;
            }
            
    }
    document.getElementById('wynik').innerHTML = a;
        
}