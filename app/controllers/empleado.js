$(document).ready(function(){
    let $genero = document.querySelector('#genero');
    let $cargo = document.querySelector('#cargo');
    
    function cargarGenero(){
        $.ajax({
            type: "GET",
            url: "app/models/mostrarGenero.php",
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
            url: "app/models/mostrarCargo.php",
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