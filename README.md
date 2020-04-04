# React Employee Directory

This application is an employee directory that was created using React. It allows the user to filter their employees to easily find the details of specific people. It also allows the user to sort through the names in alphabetical and reverse. 


  # Tech/framework used
This particular app was created using React.

A table of employees was created by calling the random user API 
https://randomuser.me/api/?results=10
This allowed me to generate a list of 10 random 'employees'. This included their photo, name, Email, phone and country. 

This application's UI is broken up into various components including Navbar, Wrapper, Footer, Container, Card, Col, Row, SearchForm and Table.

The application has one route, Search. 

The Table component accepts the data via props to display the employee data. It also displays the results of the sort function via the onClick event (when user clicks the name button)
The SearchForm component displays the search bar data via props to display the results of the updateSearch function  


# Screen Shots
![ScreenShot](hhttps://github.com/Tonnette/React-Employee-Directory/blob/master/MyScreenShots/Overall.png)

Filter Function
![ScreenShot](https://github.com/Tonnette/React-Employee-Directory/blob/master/MyScreenShots/Filter.png)

Sort Function
![ScreenShot](https://github.com/Tonnette/React-Employee-Directory/blob/master/MySrceenShots/Sort.png)

# Deployed App
https://tonnette-employee-react-app.herokuapp.com/

# github repo
https://github.com/Tonnette/React-Employee-Directory

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

# contributors
Tonnette Stanford

# Author
Tonnette Stanford

# Licence
There is no licence and this website is open source.