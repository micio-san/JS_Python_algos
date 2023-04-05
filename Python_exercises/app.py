from math import pi, sqrt, log
from enum import Enum

# 1:Stuttering
#  Write a function that stutters a word as if someone is struggling to read it.
# The first two letters are repeated twice with an ellipsis ... and space after each,
# and then the word is pronounced with a question mark ?.
# stutter("incredible") => "in... in... incredible?"
# stutter("enthusiastic") => "en... en... enthusiastic?"
# stutter("outstanding") ➞=>"ou... ou... outstanding?"
# Assume all input is in lower case and at least two characters long.


def stutter(str):
    arr = [*str]
    arr.append("?")
    add = arr[0:2]
    add.extend([".", ".", " "])
    str2 = "".join(add)
    str3 = "".join(arr)
    return (f"{str2}{str2}{str3}")


stutter("enthusiastic")
# 2:Find the Discount
# Create a function that takes two arguments: the original price and
# the discount percentage as integers and returns the final price after the discount.
# dis(1500, 50) => 750
# dis(89, 20) => 71.2
# dis(100, 75) => 25
# Your answer should be rounded to two decimal places.


def dis(tot, disc):
    per = (disc/100) * tot
    res = round(float(tot-per), 2)
    return res


dis(100, 75)

# 3:Radians to Degrees
# Create a function that takes an angle in radians and returns the corresponding angle
# in degrees rounded to one decimal place.
# radians_to_degrees(1)  => 57.3
# radians_to_degrees(20) =>  1145.9
# radians_to_degrees(50) =>  2864.8
# The number π can be loaded from the math module with from math import pi.


def radians_to_degrees(rad):
    res = rad * 180/pi
    answ = round(res, 1)
    return answ


radians_to_degrees(1)

# 4:Circle or Square
# Given the radius of a circle and the area of a square,
# return True if the circumference of the circle is greater than the square's
# perimeter and False if the square's perimeter is greater than the circumference of the circle.
# You can use Pi to 2 decimal places (3.14).
# Circumference of a circle equals 2 * Pi * radius.
# To find the perimeter of a square using its area,
# find the square root of area (to get side length) and multiply that by 4.
# circle_or_square(16, 625) =>True
# circle_or_square(5, 100)=> False
# circle_or_square(8, 144)=> True


def circle_or_square(radius, area):
    roundPI = round(pi, 2)
    circum = 2*roundPI*radius
    perim = sqrt(area) * 4
    answ = True if circum > perim else False
    return answ


circle_or_square(8, 144)

# 5:Curzon Numbers
# In this challenge, establish if a given integer num is a Curzon number.
# If 1 plus 2 elevated to num is exactly divisible by 1 plus 2 multiplied by num,
# then num is a Curzon number.
# Given a non-negative integer num, implement a function that returns True
# if num is a Curzon number, or False otherwise.
# is_curzon(5) => True
# is_curzon(10) => False
# is_curzon(14) => True


def is_curzon(num):
    first = 2 ** num + 1
    sec = 2 * num + 1
    answ = True if first % sec == 0 else False
    return answ


is_curzon(10)

# 6:Luke, I Am Your ...
# Luke Skywalker has family and friends.
# Help him remind them who is who.
# Given a string with a name, return the relation of that person to Luke.
# Darth Vader	 =>father
# Leia =>	sister
# Han =>	brother in law
# R2D2 =>	droid
# relation_to_luke("Darth Vader") =>"Luke, I am your father."
# relation_to_luke("Leia")=> "Luke, I am your sister."
# relation_to_luke("Han")=> "Luke, I am your brother in law."


class relations(Enum):
    Darth_Vader = "father"
    Leia = "sister"
    Han = "brother in law"
    R2D2 = "droid"


def relation_to_luke(who):
    new = who.replace(" ", "_")
    answ = "Like,I am your " + relations[new].value
    return answ


relation_to_luke("Darth Vader")

# 7:Solving Exponential Equations With Logarithms
# Create a function that takes a number a and finds the missing exponent
# x so that a when raised to the power of x is equal to b.
# a is raised to the power of what in order to equal b?
# solve_for_exp(4, 1024) => 5
# solve_for_exp(2, 1024) => 10
# solve_for_exp(2, 1024) => 10


def x(a, b): return int(log(b)/log(a))


x(2, 1024)

# 8:Invert Colors
# Create a function that inverts the rgb values of a given tuple.
# Must return a tuple.
# color_invert((255, 255, 255)) ➞ (0, 0, 0)
# color_invert((0, 0, 0)) ➞ (255, 255, 255)
# color_invert((165, 170, 221)) ➞ (90, 85, 34)


def color_invert(tup):
    answ = []
    for x in tup:
        answ.append(255 - x)
    return tuple(answ)


color_invert((165, 170, 221))

# 9:End Corona!
# Create a function that takes the number of daily average recovered cases recovers,
# daily average new_cases, current active_cases, and returns the number of days it will
# take to reach zero cases.
# The number of people who recover per day recovers will always be greater than daily new_cases.
# Be conservative and round up the number of days needed.
# end_corona(4000, 2000, 77000) => 39
# end_corona(3000, 2000, 50699) => 51
# end_corona(30000, 25000, 390205) => 79


def end_corona(daily_rec, daily_new, current_active):
    days = 0
    while current_active > 0:
        days += 1
        current_active = (current_active + daily_new) - daily_rec
    return days


end_corona(30000, 25000, 390205)

# 10: Basic Calculator
# Create a function that takes two numbers and
# a mathematical operator + - / * and will perform a calculation with the given numbers.
# calculator(2, "+", 2) => 4
# calculator(2, "*", 2) => 4
# calculator(4, "/", 2) => 2


def calculator(num1, op, num2):
    if num2 == 0 and op == "/":
        print("Can't divide by 0")
    else:
        calc = str(num1) + op + str(num2)
        answ = eval(calc)
        return (answ)


calculator(4, "/", 2)

# 11:Calculating Damage
# Create a function that takes damage and speed (attacks per second) and returns the
# amount of damage after a given time.
# Return "invalid" if damage or speed is negative.
# damage(40, 5, "second") => 200
# damage(100, 1, "minute") => 6000
# damage(2, 100, "hour") => 720000


class Times(Enum):
    second = 1
    minute = 60
    hour = 3600


def damage(damage, speed, timems):
    answ = damage * speed * Times[timems].value
    return (answ)


damage(2, 100, "hour")

# 12:Let's Sort This List!
# Create a function that takes a list of numbers lst, a string s and return a
# list of numbers as per the following rules:
# "Asc" returns a sorted list in ascending order.
# "Des" returns a sorted list in descending order.
# "None" returns a list without any modification.
# asc_des_none([4, 3, 2, 1], "Asc" )  [1, 2, 3, 4]
# asc_des_none([7, 8, 11, 66], "Des")  [66, 11, 8, 7]
# asc_des_none([1, 2, 3, 4], "None")  [1, 2, 3, 4]


class direction(Enum):
    asc = False
    des = True
    none = None


def asc_des_none(arr, dir):
    if dir == "None":
        pass
    else:
        arr.sort(reverse=direction[dir.lower()].value)
    return arr


asc_des_none([1,  3, 2, 4], "None")
