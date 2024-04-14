<?php
class dbReq{
    private static $username;
    private static $password;
    static public function checkUsernameAndPass($username, $password){
        self::$username = $username;
        self::$password = $password;
        include ('dbcon.php');
        $pdo = Database::Connect();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "select * from staff where StaffName = '".self::$username."'";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch();
        if ($result['StaffName'] == self::$username) {
            return "success";
        }
        return "noValidUser";
    }
}
