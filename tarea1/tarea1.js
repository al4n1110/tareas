//Generar numeros primos
let n = 5;

for(let i = 0; i<=n ; i++){
    let c = 0;
    for(let j = 0; j <= i ; j++){
        if(i % j == 0){
            c ++;
        }
    }
    if(c == 2){
        console.log(i);
    }    
}