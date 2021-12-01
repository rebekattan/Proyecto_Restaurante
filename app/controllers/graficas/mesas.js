$(document).ready(function () {
    estado_mesa();

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

    $("#fecha").daterangepicker({
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

    $("#btn_filtro_mesa").click(function(){
        grafica_personas_mesa(); 
    });

    $("#btn_filtro_estado").click(function(){
        grafica_estado_mesa();
    });

    $("#btn_reporte_mesa").click(function(){
        crear_mpdf();
    });   
});

function estado_mesa(){
    var datos=[];
    var estados=[];

    $.ajax({
        data: {},
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/graficas/estado_mesa_actual.php', 
        cache: false,
        beforeSend: function(){}, 
        success: function(response){ 
            if(response.success){
                for (let i = 0; i < response.total; i++) {
                    datos.push(response.datos[i]);
                    estados.push(response.mesas[i]);
                }

                for (let i = 0; i < datos.length; i++) {
                    

                    if(estados[i]=='Disponible'){
                        $("#total_mesa_d").html(datos[i]);
                    }else if(estados[i]=='Ocupada'){
                        $("#total_mesa_o").html(datos[i]);
                    }else if(estados[i]=='Necesita Limpieza'){
                        $("#total_mesa_l").html(datos[i]);
                    }
                }


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
        data: {
            fechas: $("#fecha").val(),
            //hora: $("#hora").val()
        },
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
                                "text": '# Total Estado de Mesas'
                            }
                        }
                    });

                    $("#mesa_estado").show();
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

function grafica_personas_mesa() {
    var datos=[];
    var labels=[];

    $.ajax({
        data: {
            fechas: $("#calendario").val()
        },
        type: 'POST', 
        dataType: 'Json',
        url: 'app//models/graficas/personas_mesa.php', 
        cache: false,
        beforeSend: function(){}, 
        success: function(response){ 
            if(response.success){
                for (let i = 0; i < response.cantidad; i++) {
                    datos.push(response.datos[i]);
                    labels.push(response.mesa[i]);
                }

                var ctx = document.getElementById('g_mesa_persona').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: datos,
                            label: 'Cantidad de personas',
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
                            text: '# Cantidad de Personas Atendidas por Mesa'
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
                $("#datos_mesa").show();
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

