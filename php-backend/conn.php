<?php
$dbusername = "root"; // change with your credentials
$dbpassword = ""; // change with your credentials
$dbname = "Apetiti"; // DO NOT CHANGE THIS
$dsn = "mysql:host=localhost;dbname=$dbname;charset=utf8mb4"; // change with your credentials

try{
    $pdo = new PDO($dsn, $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
    exit;
}