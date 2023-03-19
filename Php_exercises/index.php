<?php
/* 1. Write a PHP program to compute the sum of the two given integer values. 
If the two values are the same, 
// then returns triple their sum.
// Sample: (1, 2) =>3; (3,2) => 5; (2,2) => 12
*/

function sum($o, $t)
{
    $res = 0;
    if ($o === $t) {
        $res = ($o + $t) * 3;
    } else {
        $res = $o + $t;
    };
    echo $res;
};

// sum(5, 5);

/* 2. Write a PHP program to get the absolute difference between n and 51. 
    If n is greater than 51 return triple the absolute difference.
    Sample:53 => 6; 30 => 21; 51 => 0;
*/

function diffy($n)
{
    $fiftyOne = 51;
    echo $n > $fiftyOne ?  ($n - $fiftyOne) * 3 : $fiftyOne - $n;
};

// diffy(51);

/*3. Write a PHP program to check two given integers, and return 
true if one of them is 30 or if their sum is 30.
Sample:(20, 0) => bool(false); (25, 5) => bool(true);(20, 30)=>bool(true)
*/

function checkThirty($o, $t)
{
    $myArgs = func_get_args();
    if (in_array(30, $myArgs) || array_sum($myArgs) === 30) {
        var_dump(true);
    } else {
        var_dump(false);
    }
};

// checkThirty(25, 30);

/*4. Write a PHP program to create a new string where 'if' is added to the front of a given string. 
If the string already begins with 'if', return the string unchanged. 
 Sample: "if else"=> if else; "else"=> "if else";"if" =>"if"
*/

function addIf($str)
{
    echo str_starts_with($str, "if") ?  $str : "if " . $str;
};

// addIf("the cats are not on the table");

/*
5. Write a PHP program to find the larger from two given integers. However if 
the two integers have the same remainder when divided by 7, then the return the smaller integer. 
If the two integers are the same, return 0.
Sample:11, 21 => 21; 11, 20 => 20; 10, 10 => 0
*/

function findLarger($f, $s)
{
    $arr = array($f, $s);
    if ($f === $s) {
        echo 0;
    } elseif ($f % 7 === $s % 7) {
        echo  min($arr);
    } else {
        echo max($arr);
    }
};

// findLarger(11, 21);

/*6. Write a PHP program to remove the character in a given position of a given string. 
The given position will be in the range 0..string length -1 inclusive.
Sample: "Python", 1 => Pthon;"Python", o => ython; "Python", 4 => Pythn
*/

function removeChar($str, $num)
{
    if (is_string($str)) {
        echo substr_replace($str, "", $num, 1);
    };
};

// removeChar("Gatto", 4);

/* 7. Write a PHP program to exchange the first and last characters in 
a given string and return the new string.
 Sample: "abcd" => dbca; "a" => a; "xy"=> yx; 
*/

function exhangeFirstLast($str)
{
    $array =  str_split($str);
    $lastL = array_shift($array);
    array_unshift($array,  array_pop($array));
    array_push($array, $lastL);
    $str =  implode($array);
    echo $str;
};

// exhangeFirstLast("france");

/* 8. Write a PHP program to create a new string which is 4 copies of the 2 front characters of a 
given string. If the given string length is less than 2 return the original string. 
Sample:"C Sharp" => C C C C ; "JS" => JSJSJSJS;"a"=>a
*/

function repeatStr($str)
{
    if (strlen($str) < 2) {
        echo $str;
    };
    $res = substr($str, 0, 2);
    echo str_repeat($res, 4);
};

//repeatStr("JS");

/*9. Write a PHP program to create a new string with the last char added at the front and 
back of a given string of length 1 or more.
Sample Input:"Red" => dRedd; "Green" => nGreenn;"1" => 111
*/

function addToStr($str)
{
    $char = substr($str, strlen($str) - 1, 1);
    echo $char . $str . $char;
}

// addToStr("1");

/* 10. Write a PHP program to check if a given 
positive number is a multiple of 3 or a multiple of 7
Sample: 3 => bool(true); 14 => bool(true); 12 => bool(true); 37 => bool(false)
*/

function checkNum($num)
{
    $res = "";
    $res = $num % 3 === 0 || $num % 7 === 0 ? true : false;
    var_dump($res);
};

checkNum(37);
