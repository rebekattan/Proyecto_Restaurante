$(document).ready(function(){
    console.log("Graficando");
    grafStock();
});

function grafStock(){
    var datos=[];
    var labels=[];
    var datos2=[];

    $.ajax({
        data: {},
        type: 'POST',
        dataType: 'Json',
        url: 'app/models/graficas/getStock.php',
        cache: false,
        beforeSend: function(){},
        success: function(response){
            if (response.success){
                for (let index = 0; index < response.total; index++) {
                datos.push(response.existencias[index]);
                labels.push(response.productos[index]);
                datos2.push(response.maxima[index]);
                
                }
                var ctx = document.getElementById('g_stock_max')

                var mixedChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        datasets: [{
                            label: 'bar dataset',
                            data: datos,
                            order: 2
                        }, 
                        {
                            label: 'Line dataset',
                            data: datos2,
                            type: 'line',
                            order: 1
                        }],
                        labels: labels
                    },
                    options: {
                        scales: {
                          y: {
                            beginAtZero: true
                          }
                        }
                      },
                })
            } else {
                swal('¡Error!', response.error, 'error');
            }
        },
        error: function() {
            swal('¡Error!', 'Error de ejecución del ajax', 'error')
        }
    
    })
};