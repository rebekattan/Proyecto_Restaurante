$(document).ready(function () {
   
    grafica_estado_pedido();
    grafica_estado_mesa();
});

function grafica_estado_pedido() {
    var datos=[];
    var labels=[];
    var total_pedido=0;
    var porcentajes=[];


    $.ajax({
        data: {},
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/graficas/estado_pedido.php', 
        cache: false,
        beforeSend: function(){}, 
        success: function(response){ 
            if(response.success){
                for (let i = 0; i < response.total; i++) {
                    datos.push(response.datos[i]);
                    total_pedido=total_pedido+parseInt(response.datos[i]);
                    labels.push(response.pedidos[i]);
                }

                for (let i = 0; i < datos.length; i++) {
                    porcentajes.push(((100/total_pedido)*datos[i]).toFixed(2))
                }

                var ctx = document.getElementById('g_estado_pedido').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: datos,
                            backgroundColor: [
                                'rgb(5, 201, 38, 0.2)',
                                'rgb(201, 26, 5, 0.2)'
                            ],
                            borderColor: [
                                'rgb(5, 201, 38, 1)',
                                'rgb(201, 26, 5, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: '# Total Estado de Pedidos'
                        }
                    },
                });

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

                var ctx = document.getElementById('g_estado_mesa').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: datos,
                            backgroundColor: [
                                'rgb(5, 201, 38, 0.2)',
                                'rgb(201, 26, 5, 0.2)'
                            ],
                            borderColor: [
                                'rgb(5, 201, 38, 1)',
                                'rgb(201, 26, 5, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: '# Total Estado de Mesas'
                        }
                    },
                });

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

