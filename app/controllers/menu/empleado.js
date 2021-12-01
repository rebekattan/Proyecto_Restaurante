$(document).ready(function(){
    let $genero = document.querySelector('#cod_genero');
    let $cargo = document.querySelector('#cod_cargo');
    
    function cargarGenero(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarGenero.php",
            success:function(response){
                const generos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                generos.forEach(genero => {
                    template += `<option value="${genero.cod_genero}">${genero.nom_genero}</option>`
                })
    
                $genero.innerHTML = template;
            }
        });
    }

    function cargarCargo(){
        $.ajax({
            type: "GET",
            url: "app/models/menu/mostrarCargo.php",
            success:function(response){
                const cargos = JSON.parse(response)
                
                let template = '<option class="form-control" selected disabled>Seleccione una opción</option>'
                
                cargos.forEach(cargo => {
                    template += `<option value="${cargo.cod_cargo}">${cargo.cargo}</option>`
                })
    
                $cargo.innerHTML = template;
            }
        });
    }

    cargarGenero();
    cargarCargo();
    
    
    $('#btn_frm_empleado').click(function(){
        console.log("Entro a la funcion");
        var datos = $('#frm_empleado').serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "app/models/menu/empleado.php",
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
    
});