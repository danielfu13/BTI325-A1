/*********************************************************************************
*  BTI325 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Daniel Fu    Student ID: 153024229   Date: Sept 15, 2023
*
*  Online (Cyclic) URL: _______________________________________________________
*
********************************************************************************/ 

const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Daniel Fu - 153024229')
})
app.listen(process.env.PORT || 3000)