<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 31536000");


// Check if data is received through POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if username and password are set
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        // Here you can perform any necessary validation, authentication, or processing
        $username = sanitizeString($_POST['username']);
        $password = sanitizeString($_POST['password']);
        // For this example, let's assume that the username and password are valid
        // For this example, let's simply create a response array
        $response = array(
            "status" => "success",
            "message" => "Login successful"
        );

        // Send back the response as JSON
        echo json_encode($response);
    } else {
        // If username or password is not set, return an error response
        $response = array(
            "status" => "error",
            "message" => "invalid username or password"
        );

        // Send back the error response as JSON
        echo json_encode($response);
    }
} else {
    // If the request method is not POST, return an error response
    $response = array(
        "status" => "error",
        "message" => "Invalid request method"
    );

    // Send back the error response as JSON
    echo json_encode($response);
}
function sanitizeString($inputSanitizeData){
    $inputSanitizeData = trim($inputSanitizeData);
    $inputSanitizeData = stripslashes($inputSanitizeData);
    $inputSanitizeData = htmlspecialchars($inputSanitizeData);
    return $inputSanitizeData;
}


