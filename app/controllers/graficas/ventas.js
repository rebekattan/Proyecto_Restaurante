$(document).ready(function () {
    ventasPlatillos();

    $("#calendario").daterangepicker({
        "locale":{
            "format":"DD/MM/YYYY",
            "separator":" - ",
            "applyLabel": "Aplicar",
            "cancelLabel": "Cancelar",
            "daysOfWeek":[
                "Dom",
                "Lun",
                "Mar",
                "Mie",
                "Jue",
                "Vie",
                "Sab"
            ],
            "monthNames":[
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ]
        }
    });

    $("#ventas").click(function(){
        ventas_p();
    });

    $("#btn_reporte_venta").click(function(){
        crear_reporte();
    }); 
});

function ventas_p(){
    var datos1=[];
    var labels=[];

    $.ajax({
        data: {
            fechas: $("#calendario").val()
        },
        type: 'POST',
        dataType: 'Json',
        url: 'app/models/graficas/vendidos.php',
        cache: false,
        beforeSend: function(){},
        success: function(response){
            console.log('entro');
            if (response.success){

                for (let i = 0; i < response.total; i++) {
                datos1.push(response.datos1[i]);
                labels.push(response.platillo[i]);
                }

                var ctx = document.getElementById('ventas_p').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: datos1,
                            label: 'Total vendido',
                            backgroundColor: [
                                'rgb(160, 223, 224, 0.2)',
                                'rgb(160, 223, 224, 0.2)',
                                'rgb(160, 223, 224, 0.2)',
                                'rgb(160, 223, 224, 0.2)',
                                'rgb(160, 223, 224, 0.2)',
                                'rgb(160, 223, 224, 0.2)',
                                'rgb(160, 223, 224, 0.2)',
                                'rgb(160, 223, 224, 0.2)',
                                'rgb(160, 223, 224, 0.2)',
                                'rgb(160, 223, 224, 0.2)'
                            ],
                            borderColor: [
                                'rgb(11, 115, 171, 1)',
                                'rgb(11, 115, 171, 1)',
                                'rgb(11, 115, 171, 1)',
                                'rgb(11, 115, 171, 1)',
                                'rgb(11, 115, 171, 1)',
                                'rgb(11, 115, 171, 1)',
                                'rgb(11, 115, 171, 1)',
                                'rgb(11, 115, 171, 1)',
                                'rgb(11, 115, 171, 1)',
                                'rgb(11, 115, 171, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: '# Total vendido por platillo'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    callback: function(value, index, values) {
                                        return '$' + value;
                                    }
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Cantidad en dolares'
                                  }
                                
                            }]
                        }
                    },
                });

            $("#resultados").show();

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

function ventasPlatillos(){

    var datos=[];    
    var labels=[];

    $.ajax({
        data: {},
        type: 'POST', 
        dataType: 'Json',
        url: 'app/models/graficas/mostrar_vendidos.php', 
        cache: false,
        beforeSend: function(){}, 
        success: function(response){ 
            if(response.success){
                for (let i = 0; i < response.total; i++) {
                    datos.push(response.datos[i]);                    
                    labels.push(response.platillos[i]);
                }
                var ctx = document.getElementById('ventas_total').getContext('2d');
                var myChart = new Chart(ctx, {
                type: 'bar',
                data: {  
                    labels: labels,
                    datasets: [{
                        data: datos,
                        label: 'Total Platos',
                        backgroundColor: [
                            'rgb(11, 115, 171, 0.2)',
                            'rgb(11, 115, 171, 0.2)',
                            'rgb(11, 115, 171, 0.2)',
                            'rgb(11, 115, 171, 0.2)',
                            'rgb(11, 115, 171, 0.2)',
                            'rgb(11, 115, 171, 0.2)',
                            'rgb(11, 115, 171, 0.2)',
                            'rgb(11, 115, 171, 0.2)',
                            'rgb(11, 115, 171, 0.2)',
                            'rgb(11, 115, 171, 0.2)'
                        ],
                        borderColor: [
                            'rgb(11, 115, 171, 1)',
                            'rgb(11, 115, 171, 1)',
                            'rgb(11, 115, 171, 1)',
                            'rgb(11, 115, 171, 1)',
                            'rgb(11, 115, 171, 1)',
                            'rgb(11, 115, 171, 1)',
                            'rgb(11, 115, 171, 1)',
                            'rgb(11, 115, 171, 1)',
                            'rgb(11, 115, 171, 1)',
                            'rgb(11, 115, 171, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
            options: {
                title: {
                    display: true,
                    text: '# Total Platillos Vendidos'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Cantidad de platillos'
                          }
                    }]
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

function crear_reporte(){

    $.ajax({
        data: {
            fechas: $("#calendario").val()
        },
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/reportes/venta.php', 
        cache: false,
        beforeSend: function(){ 
           
        }, 
        success: function(response){ 
            console.log(response);
            if(response.success){
                //recibire una URL (archivo pdf creado)
                //window.open(response.url);
                document.getElementById("frame_pdf").src=response.url;
                $("#modal_pdf").modal('show');
            } else{
                swal('¡Error!', response.error, 'error');
            }

        }, 
        error: function(){
            swal('¡Error!','Error de ejecución del Ajax', 'error');
        },
        complete: function(){
            
        } 
    });
}