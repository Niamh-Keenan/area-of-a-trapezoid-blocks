// Created_by: Niamh_Keenan
// Created_on: September_29_2022
// 
// This_program_calculates_the_area_of_a_trapezoid.
game.splash("Let's calculate the area of a Trapezoid")
let Base = game.askForNumber("Enter length of the first base (cm):")
let Base_2 = game.askForNumber("Enter the length of the second base (cm):")
let Height = game.askForNumber("Enter the height of the trapezoid (cm):")
let Area = Base + Base_2 * (Height / 2)
game.splash("The area of a trapezoid dimensions " + Base + "Cm by " + Base_2 + "Cm by  " + Height + "Cm is  " + convertToText(Area) + "Cm^2")
game.splash("Done")
