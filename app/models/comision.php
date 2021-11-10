<?php
    $conexion=mysqli_connect('localhost:3306','root','','bdrestaurante');

    $comision =$_POST['comision'];

    $sql = "INSERT INTO `comision` (`comision`) VALUES ('$comision')";

    echo mysqli_query($conexion,$sql);

?>