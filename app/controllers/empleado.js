$(document).ready(function(){
    $(function(){
        $('input[name="fecha_nacimiento"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1901,
            maxYear: parseInt(moment().format('YYYY'),10),
            locale: {
                format: "DD/MM/YY",
                applyLabel: "Aplicar",
                cancelLabel: "Cancelar",
                daysOfWeek: [
                    "Dom","Lun","Mar","Mie","Jue","Vie","Sab"
                ]
            }
        });
    });
    $('#btn_frm_empleado').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_empleado').serialize();
        /*alert(datos);
        return false;*/
        $.ajax({
            type: "POST",
            url: "app/models/empleado.php",
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
    
});

