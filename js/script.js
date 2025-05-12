// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: April 2025
// This file contains the JS functions for index.html


function calculaterandomnumber () {
const lengthAString = prompt("Enter length A of the triangle (mm):")
const lengthBString = prompt("Enter length B of the triangle (mm):")
const lengthCString = prompt("Enter length C of the triangle (mm):")

const lengthA = parseFloat(lengthAString)
const lengthB = parseFloat(lengthBString)
const lengthC = parseFloat(lengthCString)

// using the cosine law

const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)
const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  if (sumOfAngles != 180) {
  document.getElementById('answer1').innerHTML =
  "<p>...</p>" 
  }
    else if(lengthA === lengthB === lengthC) {
    document.getElementById('answer1').innerHTML =
      "<p>You calculated towards a Equilateral triangle type </p>" 
  }
    else if(lengthA === lengthB !== lengthC || lengthA !== lengthB === lengthC || lengthC === lengthA !== lengthB) {
    document.getElementById('answer1').innerHTML =
      "<p>You calculated towards a Isocenes triangle type</p>" 
  }
    else if (lengthA !== lengthB !== lengthC && lengthC !== lengthA) {
    document.getElementById('answer1').innerHTML =
      "<p>You calculated towards a Scalene triangle type </p>" 
  }
    else {
    document.getElementById('answer1').innerHTML =
      "<p>You calculation got an error</p>" 

}

  }
