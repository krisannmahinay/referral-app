<?php
// Set the database connection details
$servername = "localhost"; // Replace with your MySQL server name or IP address
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "referral_data"; // Replace with your database name

// Connect to the database
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// PHP form submission handling code
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form inputs from the $_POST superglobal
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $comment = $_POST['comment'];
    $service1 = isset($_POST['service1']) ? $_POST['service1'] : '';
    $service2 = isset($_POST['service2']) ? $_POST['service2'] : '';

    // Insert the form data into a table
    $sql = "INSERT INTO referrals (email, phone, first_name, last_name, comment, service1, service2) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        die("Error: " . $conn->error); // Display error message
    }

    $stmt->bind_param("sssssss", $email, $phone, $firstname, $lastname, $comment, $service1, $service2);
    $result = $stmt->execute();
    if (!$result) {
        die("Error: " . $stmt->error); // Display error message
    }

    $stmt->close();
}

// Close the database connection
$conn->close();

// Send a response back to the JavaScript code
$response = array('status' => 'success', 'message' => 'Form submitted successfully');
echo json_encode($response);
?>
