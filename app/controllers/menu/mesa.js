$(document).ready(function(){
    let $estado = document.querySelector('#cod_estado');
    let $mesa_catalogo = document.querySelector('#cod_mesa_catalogo');

    function cargarEstado(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarEstado.php",
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

    function cargarMesa(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarMesaCatalogo.php",
            success:function(response){
                const mesa_catalogos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                mesa_catalogos.forEach(mesa_catalogo => {
                    template += `<option value="${mesa_catalogo.cod_mesa_catalogo}">${mesa_catalogo.num_mesa}</option>`
                })
    
                $mesa_catalogo.innerHTML = template;
            }
        });
    }

    cargarEstado();
    cargarMesa();
    
    $('#btn_frm_mesa').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_mesa').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/menu/mesa.php",
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