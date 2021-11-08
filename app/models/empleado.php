<?php
    $conexion=mysqli_connect('localhost:3308','root','','bd_restaurante');

    $nombres =$_POST['nombres'];
    $apellidos= $_POST['apellidos'];
    $edad= $_POST['edad'];
    $cod_genero =$_POST['cod_genero'];
    $fecha_nacimiento= $_POST['fecha_nacimiento'];
    $direccion= $_POST['direccion'];
    $cod_cargo= $_POST['cod_cargo'];
    $salario = $_POST['salario'];

    $sql = "INSERT INTO `empleado` (`nombres`, `apellidos`, `edad`,'cod_genero','fecha_nacimiento', 'direccion', 'cod_cargo',`salario`) 
    VALUES ('$nombres', '$apellidos', '$edad', '$cod_genero', '$fecha_nacimiento', '$direccion', '$cod_cargo','$salario')";


    /*$query="SELECT cod_genero, nom_genero FROM genero ORDER BY cod_genero";
    $result = mysql_query($query)
            or die("Ocurrio un error en la consulta SQL");
    mysql_close();
    echo '<option value="0">Seleccionar</option>';
    while (($fila = mysql_fetch_array($result)) != NULL) {
        echo '<option value="'.$fila["cod_genero"].'">'.$fila["nom_genero"].'</option>';
    }*/

    echo mysqli_query($conexion,$sql);

?>