<?php
use Illuminate\Support\Facades\DB; // class DB extends Facade
use Illuminate\Database\Eloquent\Builder; // class Illuminate\Database\Eloquent\Builder uses the trait Illuminate\Database\Concerns\BuildsQueries
 
$users = DB::table('users')->get(); // Select the whole "users" table
 
// table: "users", row: "user", attribute: "name"
foreach ($users as $user) {
    echo $user->name; // Print out the "name" attribute of each "user" tuple (row)
}

// Retrieve the first row of the table whose "name" attribute equals "John"
$user = DB::table('users')->where('name', 'John')->first();
// Return the "email" attribute of the row "user"
return $user->email;

// You can also pass an array of attribute (column) names to the first() method to return the attribute values of the row
$user = DB::table('users')->where('name', 'John')->first(['email', 'phone']);

// Return the value of the "email" attribute of the first row of the table whose "name" attribute equals "John"
$email = DB::table('users')->where('name', 'John')->value('email');

// Return the row in the "users" table whose id (primary key) value is 3
$user = DB::table('users')->find(3);

// Retrieve the "title" column of the table "users"
$titles = DB::table('users')->pluck('title');

// Print out each value of the "title" column ($titles: row; $title: column)
foreach ($titles as $title) {
    echo $title;
}

// Retrieve the "title" column of the table "users" and using the values of the "name" column as keys to create
// arrays of key-value pairs of name-title
$titles = DB::table('users')->pluck('title', 'name');

foreach ($titles as $name => $title) {
    echo $title;
}

// Return all rows in the "user" table 
// where the value of the "votes" column is equal to 100 and the value of the age column is greater than 35:

$users = DB::table('users')
->where('votes', '=', 100)
->where('age', '>', 35)
->get();

// Return all rows in the "users" table where the value of the "votes" column is equal to 100 
$users = DB::table('users')->where('votes', 100)->get();

// Return all rows in the "users" table where the value of the "votes" column is greater than or equal to 100 
$users = DB::table('users')
        ->where('votes', '>=', 100)
        ->get();

// Return all rows in the "users" table where the value of the "votes" column does not equal 100 
$users = DB::table('users')
        ->where('votes', '<>', 100)
        ->get();

// Return all rows in the "users" table where the value of the "name" column starts with "T" 
$users = DB::table('users')
        ->where('name', 'like', 'T%')
        ->get();

// Delete all rows in the "users" table where the value of the "votes" column is greater than 100
$deleted = DB::table('users')->where('votes', '>', 100)->delete();

?>