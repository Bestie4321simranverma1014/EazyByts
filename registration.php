<?php
    $First_name=$_POST["fname"];
    $Last_name=$_POST["lname"];
    $Email=$_POST["mail"];
    $DOB=$_POST["dob"];
    $spwd=$_POST["pass"];
    $cpwd=$_POST["cpass"];

    echo $First_name;
    

    $con=mysqli_connect('localhost', 'root',"",'simran');
    $sql="INSERT INTO login(First_name,Last_name,Email,DOB,password,C_password) values('$First_name','$Last_name','$Email','$DOB','$spwd','$cpwd')";
    $rs=mysqli_query($con,$sql);
    if($rs){
        echo "Record inserted";
    }
    ?>