<?php
require_once 'headers.php';
require_once 'conn.php';

$q = $_GET['q'] ?? '';
$q_like = '%' . $q . '%';

$categoriesRaw = $_GET['categories'] ?? '[]';
$categories = is_array($categoriesRaw) ? $categoriesRaw : json_decode($categoriesRaw, true);

if (!empty($categories) && (isset($categories[0]) && ($categories[0] === 'ყველა' || strtolower($categories[0]) === 'any'))) {
    array_shift($categories);
}

error_log("text: " . $q);
error_log("ARR: " . print_r($categories, true));

$sql = '';
$params = [];

if (!empty($categories)) {
    $placeholders = implode(',', array_fill(0, count($categories), '?'));
    if ($q !== '') {
        $sql = "
            SELECT d.id, d.name, d.price, d.photo_url, d.description, d.category_id
            FROM dishes d
            JOIN categories c ON d.category_id = c.id
            WHERE c.name IN ($placeholders)
            AND (d.name LIKE ? OR d.description LIKE ?)";
        $params = array_merge($categories, [$q_like, $q_like]);
    } else {
        $sql = "
            SELECT d.id, d.name, d.price, d.photo_url, d.description, d.category_id
            FROM dishes d
            JOIN categories c ON d.category_id = c.id
            WHERE c.name IN ($placeholders)";
        $params = $categories;
    }
} else if ($q !== '') {
    $sql = "
        SELECT d.id, d.name, d.price, d.photo_url, d.description, d.category_id
        FROM dishes d
        WHERE d.name LIKE ? OR d.description LIKE ?";
    $params = [$q_like, $q_like];
} else {
    $sql = "
        SELECT d.id, d.name, d.price, d.photo_url, d.description, d.category_id
        FROM dishes d";
}

$stmt = $pdo->prepare($sql);
$stmt->execute($params);

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);
