$(document).ready(function(){
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