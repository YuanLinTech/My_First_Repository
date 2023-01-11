<?php
use Illuminate\Support\Facades\DB;
 
$users = DB::table('users')->get();
 
// table: "users", row label (tuple name): "user", attribute: "name"
foreach ($users as $user) {
    echo $user->name; // Print out the "name" attribute of each "user" tuple (row)
}

?>