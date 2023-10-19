# Expense_Tracker_Backend
Postman API documentation Link - https://documenter.getpostman.com/view/20107979/2s9YRB1BQy
<br/>
Deployed Application Link - https://expense-tracker-frontend-tawny.vercel.app/
<br/>

## Description
I have successfully implemented the backend of the expense tracker application.I used Node & Express to build the APIs and used MongoDB to store the data.I used Mongoose as ODM(Object Document Model) .This combination of technologies and components forms the foundation of the Expense Tracker's backend.

## Architecture
![Untitled-2023-09-27-1803](https://github.com/MithunVinayak/Expense_Tracker_Backend/blob/main/ExpenseTracker%20Architecture.png)
## Data Workflow
  - Firstly,routes contains the endpoints with function calls
  - Controllers has the functions of each endpoint defined in the routes
  - Models has the Schema defined for the Income & Expense Objects
  - Db takes care of Db connection using Mongoose

