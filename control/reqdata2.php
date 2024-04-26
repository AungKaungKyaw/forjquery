<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 31536000");
if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $jsonData = file_get_contents("php://input");
    $data = json_decode($jsonData, true);
    if($data['status'] == 'action'){
        include ('../model/dbReq.php');
        $result = dbReq::checkUsernameAndPass($data['username'], $data['password']);
        if ($result == 'success') {
            $response = array(
                "status" => "success",
                "message" => "valid username",
                "username" => $data['username']
            );
            echo json_encode($response);
        } else {
            $response = array(
                "status" => "fail",
                "message" => "invalid username",
                "username" => $data['username']
            );
            echo json_encode($response);
        }
    }

}
