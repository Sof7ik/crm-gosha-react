<?
require_once './connection.php';

use \App\Database;

echo json_encode(Database::select('bloggers'));
?>