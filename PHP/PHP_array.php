<!DOCTYPE html>
<html>
    <body>
    <?php
        $cars = array("Volvo", "BMW", "Toyota"); 
        echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
        echo count($cars);

        $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
         // $age is the array, $x is the key(index), $x_value is the value of the key.
        // $age is equivalent to table, $x is equivalent to rows labels (tuple names), $x_value is equivalent to attributes of the tuples 
        foreach($age as $x => $x_value) {
            echo "Key=" . $x . ", Value=" . $x_value;
            echo "<br>";
        }
    ?>
    </body>
</html>
