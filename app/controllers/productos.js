$(document).ready(function(){
    let $tipo_producto = document.querySelector('#tipo_producto');
    let $marca = document.querySelector('#marca');
    
    function cargarTipoProducto(){
        $.ajax({
            type: "GET",
            url: "app/models/mostrarTipoProducto.php",
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
            url: "app/models/mostrarMarca.php",
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
        /*alert(datos);
        return false;*/
        $.ajax({
            type: "POST",
            url: "app/models/productos.php",
            data: datos,
            success:function(response){
                if(response == 1) {
                    alert("Agregado con exito");
                } else {
                    alert("No se agregó");
                }
            }
        });

        return false;
    })
})