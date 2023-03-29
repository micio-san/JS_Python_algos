<?php
/* $color = array('white', 'green', 'red', 'blue', 'black');
Write a script which will display the following string -
"The memory of that scene for me is like a frame of film forever frozen at 
that moment: the red carpet, the green lawn, the white house, the leaden sky. 
and the words 'red', 'green' and 'white' will come from $color.
*/

function write_script()
{
    $color = array('white', 'green', 'red', 'blue', 'black');
    echo "The memory of that scene for me is like a frame of film forever frozen at 
    that moment: the $color[2] carpet, the $color[1] lawn, the $color[0] house, the leaden sky. 
    ";
};
// write_script();

/*
2. 
Write a PHP script which will display the colors in the following way :
white, green, red, => 
green
red
white
*/

function display_array()
{
    $color = array('white', 'green', 'red');
    for ($i = 0; $i <= count($color) - 1; $i++) {
        echo $color[$i] . "<br>";
    };
};
// displayArray();

/*
3.
Create a PHP script which displays the capital and country name from the 
above array $ceu. Sort the list by the capital of the country.
Sample:
The capital of Netherlands is Amsterdam 
The capital of Greece is Athens 
The capital of Germany is Berlin 
*/

function display_capitals()
{
    $ceu = array(
        "Italy" => "Rome", "Luxembourg" => "Luxembourg",
        "Belgium" => "Brussels", "Denmark" => "Copenhagen", "Finland" => "Helsinki",
        "France" => "Paris", "Slovakia" => "Bratislava", "Slovenia" => "Ljubljana",
        "Poland" => "Warsaw"
    );
    foreach ($ceu as $country => $capital) {
        echo "The capital of " . $country . " is " . $capital . "<br>";
    };
};
// display_capitals();

/*
4.Delete an element from the above PHP array. After deleting the element, 
integer keys must be normalized.
Sample Output :
array(5) { [0]=> int(1) [1]=> int(2) [2]=> int(3) [3]=> int(4) [4]=> int(5) } 
array(4) { [0]=> int(1) [1]=> int(2) [2]=> int(3) [3]=> int(5) }
*/

function delete_normalize()
{
    $x = array(1, 2, 3, 4, 5);
    array_splice($x, 3, 1);
    var_dump($x);
}

// delete_normalize();

/*
5. $color = array(4 => 'white', 6 => 'green', 11=> 'red');
Write a PHP script to get the first element of the above array.
Expected result : white
*/

function get_first()
{
    $color = array(4 => 'white', 13 => 'green', 11 => 'red');
    $color_keys = array_keys($color);
    sort($color_keys);
    print_r($color[$color_keys[0]]);
};
// get_first();

/*6. Write a PHP script which decodes the following JSON string.
Expected Output :
Title : The Cuckoos Calling
Author : Robert Galbraith
Publisher : Little Brown
*/

$JSON = '{"Title": "The Cuckoos Calling",
     "Author": "Robert Galbraith",
     "Publisher": "Little Brown"
}';

function handle_JSON()
{
    $decoded_json = json_decode($GLOBALS['JSON']);

    foreach ($decoded_json as $field => $answer) {
        echo $field . " : " . $answer . "<br>";
    };
};

// handle_JSON();

/*
7. Write a PHP script that inserts a new item in an array in any position.
1 2 3 4 5  => 1 2 3 $ 4 5
*/

$array = array(1, 2, 3, 4, 5);

function insert_element()
{
    array_splice($GLOBALS["array"], 3, 0, "$");
    var_dump(implode(" ", $GLOBALS["array"]));
};

// insert_element();

$clients = array("Sophia" => "31", "Jacob" => "21", "Abby" => "39", "Ramesh" => "40");

/*
8. Write a PHP script to sort the following associative array :
*/

function sort_clients()
{
    // a) ascending order sort by value
    $ar1 = $GLOBALS["clients"];
    asort($ar1);
    var_dump($ar1);

    //b) ascending order sort by Key
    $ar2 = $GLOBALS["clients"];
    ksort($ar2);
    var_dump($ar2);

    // c) descending order sorting by Value

    $ar3 = $GLOBALS["clients"];
    arsort($ar3);
    var_dump($ar3);
    // d) descending order sorting by Key

    $ar4 = $GLOBALS["clients"];
    ksort($ar4);
    var_dump($ar4);
};

// sort_clients();

/*
9. Write a PHP script to calculate and display average temperature, 
five lowest and five highest temperatures.
Recorded temperatures : 78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76,
 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73
*/

function find_temperature()
{
    $temperatures = array(78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73);
    $new = array_unique($temperatures, SORT_NUMERIC);
    $average = array_sum($new) / count($new);
    rsort($new);
    $highest = $new;
    sort($new);
    $lowest = $new;
    function order(array $k)
    {
        $str =  implode(" ", $k);
        return substr($str, 0, 11);
    }

    echo "The avg temperature is: " . round($average, 2) . "<br>" . "The highest temperatures are: " . order($highest) . "," . " <br>" . " while the lowest temperatures where " . order($lowest);
};

// find_temperature();

/* 10:
Write a PHP program to merge (by index) the following two arrays. 
Sample arrays :

Expected Output:
Array  ( 
[0] => Array([0] => w3resource [1] => 77[2] => 87)
[1] => Array([0] => com [1] => 23 [2] => 45)   
)
*/

$array1 = array(array(77, 87), array(23, 45));
$array2 = array("w3resource", "com");

function insert_into_arrays()
{
    $arrayOne = $GLOBALS["array1"];
    for ($i = 0; $i <= count($GLOBALS["array1"]) - 1; $i++) {
        array_unshift($arrayOne[$i], $GLOBALS["array2"][$i]);
    };
    echo "<pre>";
    print_r($arrayOne);
    echo "</pre>";
};

// insert_into_arrays();

/*
11: Write a simple PHP class which displays the following string.
'MyClass class has been initialized !'
*/

class myClass
{
    public $str;
    public function __construct($str)
    {
        $this->str = $str;
    }
    public function getStr()
    {
        return  $this->str;
    }
};

$greet = new myClass("MyClass class has been initialized !");
$greet->getStr();

/*
12: Write a simple PHP class which displays an introductory message like 
"Hello All, I am Scott", where "Scott" is 
an argument value of the method within the class.
*/

class present
{
    public $name;
    private $presentation = "Hello All, I am";

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function getPresentation()
    {

        return $this->presentation . " " . $this->name;
    }
};

$scott = new present("Scott");
$scott->getPresentation();

/*
13:
Write a PHP class that calculates the factorial of an integer.
*/

function getFactorial($int)
{
    if (is_int($int)) {
        $res = $int;
        for ($i = $int - 1; $i > 0; $i--) {
            $res *= $i;
        }
        // echo $res;
    }
};

getFactorial(5);

/* 14: 
Write a PHP class that sorts an ordered integer array with the help of sort() function.
Sample array : array(11, -2, 4, 35, 0, 8, -9)
Output : Array ( [0] => -9 [1] => -2 [2] => 0 [3] => 4 [4] => 8 [5] => 11 [6] => 35 )
*/

class sortArray
{
    public $arr;

    public function __construct($arr)
    {
        $this->arr = $arr;
    }

    public function getSorted()
    {
        sort($this->arr);
    }
}

$arr = new sortArray(array(11, -2, 4, 35, 0, 8, -9));
$arr->getSorted();


/*
Calculate the difference between two dates using PHP OOP approach.
Sample: 1981-11-03, 2013-09-04 => Difference : 31 years, 10 months, 1 days
*/

class Date
{
    public $first_date;
    public $second_date;

    public function __construct($first_date, $second_date)
    {
        $this->first_date = $first_date;
        $this->second_date = $second_date;
    }

    public function getDifference()
    {
        $Date1 = new DateTime($this->first_date);
        $Date2 = new DateTime($this->second_date);
        $diffy = $Date1->diff($Date2);
        $res = $diffy->y . " years " . $diffy->m . " months " . $diffy->d . " days ";
        echo $res;
    }
}

$diff = new Date("1981-11-03", "2013-09-04");
$diff->getDifference();
