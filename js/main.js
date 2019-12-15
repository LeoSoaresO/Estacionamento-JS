window.onload = mostraPatio(){
    mostraPatio()
};

document.getElementById('formulario').addEventListener('submit', cadastraV)

function  cadastraV(e) {
    var modeloCarro = document.getElementById('modeloCarro').value
    var placaCarro = document.getElementById('placaCarro').value
    var time = new Date();

    carro = {
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes(),
            
    }
 
       if (localStorage.getItem('patio') === null) {
           var cars =[];
           cars.push(carro);
           localStorage.setItem('patio',JSON.stringify(cars));
       } else {
           var cars = JSON.parse(localStorage.getItem('patio'));
           cars.push(carro);
           localStorage.setItem('patio',JSON.stringify(cars));  
       }
       
    

        e.preventDefault();
}

function mostraPatio(){
   var carros =  JSON.parse(localStorage.getItem("patio2"));
   var carrosResulatdos = document.getElementById('resultados');

   carrosResulatdos.innerHTML = '';

   for (var i = 0; i < carros.length; ++i){
       var modelo = carros[i].modelo;
       var placa = carros[i].placa;
       var hora = carros[i].hora;
       var minutos = carros[i].minutos;

       carrosResulatdos.innerHTML += '<tr><td>' + modelo + 
                            '</td><td>' + placa + 
                            '</td><td>' + hora + ' : ' + minutos + 
                            '</tr>'
   }


}

    
    
   
