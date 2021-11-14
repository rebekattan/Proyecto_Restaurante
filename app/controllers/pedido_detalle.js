$(document).ready(function(){
    let $pedidos = document.querySelector('#cod_pedidos');
    let $platillo = document.querySelector('#cod_platillo');
    let $estado = document.querySelector('#cod_estado');
    
    function cargarPedido(){
        $.ajax({
            type: "GET",
            url: "app/models/mostrarPedidos.php",
            success:function(response){
                const pedido = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                pedido.forEach(pedidos => {
                    template += `<option value="${pedidos.cod_pedidos}">${pedidos.cod_pedidos}</option>`
                })
    
                $pedidos.innerHTML = template;
            }
        });
    }

    function cargarPlatillo(){
        $.ajax({
            type: "GET",
            url: "app/models/mostrarPlatillo.php",
            success:function(response){
                const platillos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                platillos.forEach(platillo => {
                    template += `<option value="${platillo.cod_platillo}">${platillo.cod_platillo}</option>`
                })
    
                $platillo.innerHTML = template;
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

    cargarPedido();
    cargarPlatillo();
    cargarEstado();
    
    $('#btn_frm_pedido_detalle').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_pedido_detalle').serialize();
        /*alert(datos);
        return false;*/
        $.ajax({
            type: "POST",
            url: "app/models/pedido_detalle.php",
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