$(document).ready(function(){
    $('#btn_frm_tipo_platillo').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_tipo_platillo').serialize();
        /*alert(datos);
        return false;*/
        $.ajax({
            type: "POST",
            url: "app/models/menu/tipo_platillo.php",
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