<?php

$asscArray = array("hi" => "too", "toad" => "pond", "goop" => "test", 0 => "ddd");
$asscArray[] = "dd"; // Equivalent to $array[1] = "dd"

foreach($asscArray as $key => $value)
{
    echo $key . " => " . $value . "\n";
}

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
$age[] = "40"; // Equivalent to $age[0] = "40"

foreach($age as $name => $value)
{
    echo $name . " => " . $value . "\n";
}

$cars = array("Volvo", "BMW", "Toyota");
$cars[] = "Subaru"; // Equivalent to $cars[3] = "Subaru"
$arrlength = count($cars);

for($x = 0; $x < $arrlength; $x++) 
{
  echo "cars". "[$x]". " = ". $cars[$x]."\n";
}

?>