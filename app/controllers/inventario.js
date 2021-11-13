$(document).ready(function(){
    let $productos = document.querySelector('#cod_productos');
    let $estado = document.querySelector('#cod_estado');
    
    function cargarProducto(){
        $.ajax({
            type: "GET",
            url: "app/models/mostrarProducto.php",
            success:function(response){
                const productos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                productos.forEach(productos => {
                    template += `<option value="${productos.cod_productos}">${productos.nom_producto}</option>`
                })
    
                $productos.innerHTML = template;
            }
        });
    }

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

    cargarProducto();
    cargarEstado();
    
    $('#btn_frm_inventario').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_inventario').serialize();
        /*alert(datos);
        return false;*/
        $.ajax({
            type: "POST",
            url: "app/models/inventario.php",
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