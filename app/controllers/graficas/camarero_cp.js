$(document).ready(function () {
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

    grafica_camarero_cp();
     
});

function grafica_camarero_cp() {
    var datos=[];
    var labels=[];

    $.ajax({
        data: {
            //fechas: $("#calendario").val()
        },
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/graficas/camarero_cp.php', 
        cache: false,
        beforeSend: function(){}, 
        success: function(response){ 
            if(response.success){
                for (let i = 0; i < response.cantidad; i++) {
                    datos.push(response.datos[i]);
                    labels.push(response.camarero[i]);
                }

                var ctx = document.getElementById('g_camarero_cp').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: datos,
                            label: 'Personas Atendidas',
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
                            text: 'Cantidad de Personas Atendidas por Camarero'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Cantidad de Personas'
                                  }
                                
                            }]
                        }
                    },
                });
                //$("#datos_mesa").show();
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

function crear_mpdf(){
    

    $.ajax({
        data: {
            fechas: $("#calendario").val()
        },
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/reportes/cantidad_personas.php', 
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

