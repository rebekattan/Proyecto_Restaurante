$(document).ready(function(){
    let $tipo_producto = document.querySelector('#cod_tipo_producto');
    let $marca = document.querySelector('#cod_marca');
    
    function cargarTipoProducto(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarTipoProducto.php",
            success:function(response){
                const tipo_productos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                tipo_productos.forEach(tipo_producto => {
                    template += `<option value="${tipo_producto.cod_tipo_producto}">${tipo_producto.nom_tipo_producto}</option>`
                })
    
                $tipo_producto.innerHTML = template;
            }
        });
    }

    function cargarMarca(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarMarca.php",
            success:function(response){
                const marcas = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                marcas.forEach(marca => {
                    template += `<option value="${marca.cod_marca}">${marca.nom_marca}</option>`
                })
    
                $marca.innerHTML = template;
            }
        });
    }

    cargarTipoProducto();
    cargarMarca();
    
    
    $('#btn_frm_productos').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_productos').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/menu/productos.php",
            data: datos,
            success:function(response){
                console.log(response.respuesta);
                if(response.success) {
                    alert("Agregado con exito");
                } else {
                    alert("Agregado con exito");
                }
            },
            error: function(){
                swal('¡Error!','Error de ejecución del Ajax', 'error');
            }
        });

        return false;
    })
})