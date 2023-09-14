<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "referral_app_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
$last_name = mysqli_real_escape_string($conn, $_POST['last_name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$phone_number = mysqli_real_escape_string($conn, $_POST['phone_number']);
$services_choices = implode(', ', $_POST['services_choices']);
$message = mysqli_real_escape_string($conn, $_POST['message']);

$sql = "INSERT INTO users (first_name, last_name, email, phone_number, services_choices, message) 
        VALUES ('$first_name', '$last_name', '$email', '$phone_number', '$services_choices', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
