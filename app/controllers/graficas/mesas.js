$(document).ready(function () {
    estado_mesa();
    grafica_estado_mesa();
});

function estado_mesa(){
    var datos=[];

    $.ajax({
        data: {},
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/graficas/estado_mesa.php', 
        cache: false,
        beforeSend: function(){}, 
        success: function(response){ 
            if(response.success){
                for (let i = 0; i < response.total; i++) {
                    datos.push(response.datos[i]);
                }

                $("#total_mesa_d").html(datos[0]);
                $("#total_mesa_o").html(datos[1]);
                $("#total_mesa_l").html(datos[2]);

            } else{
                swal('¡Error!', response.error, 'error')
            }
        }, 
        error: function(){
            swal('¡Error!','Error de ejecución del Ajax', 'error');
        },
        complete: function(){} 
    }); 
}

function grafica_estado_mesa() {
    var datos=[];
    var labels=[];
    var total_mesa=0;
    var porcentajes=[];

    $.ajax({
        data: {},
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/graficas/estado_mesa.php', 
        cache: false,
        beforeSend: function(){}, 
        success: function(response){ 
            if(response.success){
                for (let i = 0; i < response.total; i++) {
                    datos.push(response.datos[i]);
                    total_mesa=total_mesa+parseInt(response.datos[i]);
                    labels.push(response.mesas[i]);
                }

                for (let i = 0; i < datos.length; i++) {
                    porcentajes.push(((100/total_mesa)*datos[i]).toFixed(2))
                }

                new Chart(document.getElementById("g_estado_mesa"),{
                        "type":"doughnut",
                        "data": {
                            "labels": labels,
                            "datasets": [{
                                "label":"Porcentaje de mesas",
                                "data": porcentajes,
                                "backgroundColor": [
                                    'rgb(5, 201, 38, 0.2)',
                                    'rgb(201, 26, 5, 0.2)',
                                    'rgb(35, 166, 202, 0.2)'
                                ],
                                "borderColor": [
                                    'rgb(5, 201, 38, 1)',
                                    'rgb(201, 26, 5, 1)',
                                    'rgb(35, 166, 202, 1)'
                                ], 
                                "borderWidth": 1
                            }] 
                        },
                        "options": {
                            "title": {
                                "display": true,
                                "text": '# Total Estado de Pedidos'
                            }
                        }
                    })

            } else{
                swal('¡Error!', response.error, 'error')
            }
        }, 
        error: function(){
            swal('¡Error!','Error de ejecución del Ajax', 'error');
        },
        complete: function(){} 
    }); 
}



