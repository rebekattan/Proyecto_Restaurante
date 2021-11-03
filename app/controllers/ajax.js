$(function() {
    $("#btn_frm").click(function() {
        uso_ajax();
    })
});

function uso_ajax() {
    console.log('Entró a la funcion');
    $.ajax({
        data: {
            'email': $("#email").val(),
            'clave': $("#clave").val()
        },
        type: 'POST',
        dataType: 'Json',
        url: 'app/models/mostrar_datos.php',
        cache: false,
        beforeSend: function() {},
        success: function(response) {
            if (response.success) {
                swal('¡Exito!', response.email + "<br>" + response.clave, 'success');
            } else {
                swal('¡Error!', response.error, 'error');
            }
        },
        error: function() {
            swal('¡Error!', 'Error de ejecución del ajax', 'error')
        },
        complete: function() {
            setTimeout(() => {
                $("#btn_frm").attr('disabled', false);
            }, 5000);
        }
    });
}