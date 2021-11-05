$(document).ready(function(){
    $('#btn_frm_cam').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_cam').serialize();
        /*alert(datos);
        return false;*/
        $.ajax({
            type: "POST",
            url: "app/models/camarero.php",
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