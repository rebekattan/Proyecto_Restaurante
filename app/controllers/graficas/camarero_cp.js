$(document).ready(function () {
    grafica_cam_comision();

    $("#btn_reporte_cam_comision").click(function(){
        reporte_cam();
    });  
    
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

    $("#btn_filtro_camarero").click(function(){
        grafica_camarero_cp();
    });
});

function grafica_camarero_cp() {
    var datos=[];
    var labels=[];

    $.ajax({
        data: {
            fechas: $("#calendario").val()
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
                $("#camareros").show();
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

function grafica_cam_comision() {
    var datos=[];
    var labels=[];

    $.ajax({
        data: {
           // fechas: $("#fecha").val()
        },
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/graficas/cam_comision.php', 
        cache: false,
        beforeSend: function(){}, 
        success: function(response){ 
            if(response.success){
                for (let i = 0; i < response.total; i++) {
                    datos.push(response.datos[i]);
                    labels.push(response.comision[i]);
                }

                var ctx = document.getElementById('g_camarero_comision').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: datos,
                            label: 'Total de personas',
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
                            text: 'Cantidad de Camareros por Comisión'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        onClick: reporte_individual_cam
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

function reporte_cam(Label=null){
    var envio_datos;

    if (Label!=null) {
        envio_datos={
            comision: Label
        }
    }else{
        envio_datos={
            
        }
    }

    $.ajax({
        data: envio_datos,
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/reportes/cam_comision_rep.php', 
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

function reporte_individual_cam (event, array){
    /*console.log(event);
      console.log(array) */
      var label=array[0]["_model"].label;
      console.log(label);
      Swal.fire({
        title: '¿Desea generar reporte de la comisión '+label+'?',
        text: "Se generará un reporte individual",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, generar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          reporte_cam(label);
        }
      })
}


