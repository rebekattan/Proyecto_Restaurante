$(document).ready(function(){
    let $estado = document.querySelector('#cod_estado');

    function cargarEstado(){
        $.ajax({
            type: "GET",
            url: "app/models/mostrarEstado.php",
            success:function(response){
                const estados = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                estados.forEach(estado => {
                    template += `<option value="${estado.cod_estado}">${estado.estado}</option>`
                })
    
                $estado.innerHTML = template;
            }
        });
    }

    cargarEstado();
    
    $('#btn_frm_mesa').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_mesa').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/mesa.php",
            data: datos,
            success:function(response){
                console.log(response.respuesta);
                if(response.success) {
                    alert("Agregado con exito");
                } else {
                    alert("No se agregó");
                }
            },
            error: function(){
                swal('¡Error!','Error de ejecución del Ajax', 'error');
            }
        });

        return false;
    })
})