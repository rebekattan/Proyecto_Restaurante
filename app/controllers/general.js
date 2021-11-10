$(document).ready(function(){
    $('#btn_frm_cargo').click(function(){
        console.log("Funciona");
        var datos = $('#frm_cargo').serialize();
        alert(datos);
        return false;
        /*$.ajax({
            type: "POST",
            url: "app/models/cargo.php",
            data: datos,
            success:function(response){
                if(response == 1) {
                    alert("Agregado con exito");
                } else {
                    alert("No se agregó");
                }
            }
        });
        return false;*/
        
    });
    $('#btn_frm_com').click(function(){
        console.log("Working!");
        capturarComi();
    });
    $('#btn_frm_gen').click(function(){
        console.log("processing...");
        capturarGen();
    })
})

