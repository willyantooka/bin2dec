function converter() { 
    const texto = document.getElementById("binario").value;
    document.getElementById("aviso").textContent = ""
    for (let i=0;i<texto.length;i++){
        const digito = texto.charAt(i);

        if(digito !== "1" && digito !== "0" ){
            document.getElementById("aviso").textContent = "Digite apenas 0 e 1."
            return;
        }   
    }
    let total = 0
    for (let i=0;i<texto.length;i++){
        const digito = Number(texto.charAt(texto.length - 1 - i));
        total += digito * Math.pow(2 , i);
    }
    document.getElementById("decimal").value = total
}


