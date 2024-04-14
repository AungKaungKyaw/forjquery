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
        include ('../model/dbReq.php');
        $result = dbReq::checkUsernameAndPass($username, $password);
        /*if($result === 'success'){
            // create array for response
            $response = array(
                "status" => "success",
                "message" => "valid username"
            );
            echo json_encode($response);
        }*/
        if($result == 'success'){
            $response = array(
                "status" => "success",
                "message" => "valid username"
            );
            echo json_encode($response);
        }else{
            $response = array(
                "status" => "fail",
                "message" => "invalid username"
            );
            echo json_encode($response);
        }
    }
}
function sanitizeString($inputSanitizeData){
    $inputSanitizeData = trim($inputSanitizeData);
    $inputSanitizeData = stripslashes($inputSanitizeData);
    $inputSanitizeData = htmlspecialchars($inputSanitizeData);
    return $inputSanitizeData;
}


