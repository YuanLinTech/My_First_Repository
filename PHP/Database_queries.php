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

// Delete all rows in the "users" table where the value of the "votes" column is greater than 100 and return the number of rows deleted
$deleted = DB::table('users')->where('votes', '>', 100)->delete();

// Return all rows in the "users" table where the value of the "status" column is equal to 1 and the value of the "subscribed" column does not equal 1
$users = DB::table('users')->where([
    ['status', '=', '1'],
    ['subscribed', '<>', '1'],
])->get();

// The above statement is equivalent to
$users = DB::table('users')
->where('status','=', '1')
->where('subscribed','<>','1')
->get();

// Return all rows in the "users" table where the value of the "votes" attribute is greater than 100 
// or the value of the "name" attribute is "John"
$users = DB::table('users')
->where('votes', '>', 100)
->orWhere('name', 'John')
->get();

// Return all rows in the "users" table where the value of the "votes" attribute is greater than 100 
// or the value of the "name" attribute is "Abigail" and the value of the "votes" attribute is greater than 50
$users = DB::table('users')
->where('votes', '>', 100)
->orWhere(function($query) {
    $query->where('name', 'Abigail')
          ->where('votes', '>', 50);
})
->get();

// Return all rows in the "products" table, except those whose "clearance" attribute equals true
// or whose "price" attribute is less than 10
$products = DB::table('products')
->whereNot(function ($query) {
    $query->where('clearance', true)
          ->orWhere('price', '<', 10);
    })
->get();

// Insert a row into the table "users" whose "email" attribute is "kayla@example.com" and whose "votes" attribute equals 0
DB::table('users')->insert([
    'email' => 'kayla@example.com',
    'votes' => 0
]);

/* Insert two rows into the table,
one whose "email" attribute is "picard@example.com" and whose "votes" attribute equals 0,
the other whose "email" attribute is "janeway@example.com" and whose "votes" attribute equals 0. */
DB::table('users')->insert([
    ['email' => 'picard@example.com', 'votes' => 0],
    ['email' => 'janeway@example.com', 'votes' => 0],
]);

/* Select the columns "name" and "email" from the "users" table
and rename the "email" column to "user_email" in the query result. */
$users = DB::table('users')
->select('name', 'email as user_email')
->get();

// Select and return distinct values from the "role" column in the "users" table
$users = DB::table('users')
->select('role')
->distinct()
->get();

// Select the "name" column of the "users" table and return the query result
$query = DB::table('users')->select('name');

// Add the "age" column to the query result above
$users = $query->addSelect('age')->get();

/* Update the rows in the "usesr" table whose "id" attribute equals to 1 
by setting the value of the "votes" attribute to 1, and return the number of affected rows. */
$affected = DB::table('users')
->where('id', 1)
->update(['votes' => 1]);
/* The command above is equivalent to 
UPDATE users
SET votes = 1
WHERE id = 1
*/

/* Update the rows in the "users" table whose "email" attribute is "john@example.com" and whose "name" attribute is "John". 
If such rows exist, set their "votes" attribute to 2. If such rows don't exist, 
create a new row in the "users" table whose "email" attribute is "john@example.com", "name" attribute is "John". 
and "votes" attribute equals to 2.
*/
DB::table('users') ->updateOrInsert(
    ['email' => 'john@example.com', 'name' => 'John'],
    ['votes' => '2']
);

?>