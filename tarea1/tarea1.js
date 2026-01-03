//Generar numeros primos
let n = 4;

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

//No genera exactamente los n primeros numeros ya que si ponemos n=4 nos tendria que mostrar 2,3,5,7 pero nos muestra 2,3