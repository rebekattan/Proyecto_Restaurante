$(document).ready(function(){
    let receta_catalogo = document.querySelector('#cod_receta_catalogo');
    let tipo_platillo = document.querySelector('#cod_tipo_platillo');
    
    function cargarReceta(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarCatalogo.php",
            success:function(response){
                const receta_catalogos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                receta_catalogos.forEach(receta_catalogo => {
                    template += `<option value="${receta_catalogo.cod_receta_catalogo}">${receta_catalogo.nom_receta}</option>`
                })
    
                receta_catalogo.innerHTML = template;
            }
        });
    }

    function cargarTipoPlatillo(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarTipoPlatillo.php",
            success:function(response){
                const tipo_platillos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                tipo_platillos.forEach(tipo_platillo => {
                    template += `<option value="${tipo_platillo.cod_tipo_platillo}">${tipo_platillo.nom_tipo_platillo}</option>`
                })
    
                tipo_platillo.innerHTML = template;
            }
        });
    }

    cargarReceta();
    cargarTipoPlatillo();
    
    
    $('#btn_frm_platillo').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_platillo').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/menu/platillo.php",
            data: datos,
            success:function(response){
                console.log(response.respuesta);
                if(response.success==true) {
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