## React - A JavaScript Library for Building User Interfaces
## 1 JavaScript Library 
https://reactjs.org

-- Declarative
-- Component-Based
-- Learn Once, Write Anywhere (Mastering React enables you to write:
- React web application


### 3.a Declarative
React makes it painless to create interactive UIs. Design simple views for each **state** in your application, and React will efficiently **update** and **render** just the right components when your **data changes**.

Declarative views make your code more predictable and easier to debug.

- painless
- design
- efficiently update and render when data change
- more predictable and easier to debug

**Imperative**
The majority of our code is imperative.
JavaScript is imperative. We ask DOM to update itself.
To highlight the "Home" tab in the navigation bar, you need to use the following JavaScript code:
document.querySelector('[href="HOME"]').classList.add('navbar__item--active')
You also need to un-highlight the "Resume" tab in the navigation bar at the same time.
document.querySelector('[href="RESUME"]').classList.remove('navbar__item--active')

By contrast, SQL statements are declarative. We tell the database which data we want to fetch, and the database will give you the corresponding data, rather than using the API of the database to fetch data.

For example:
```
SELECT * FROM Products WHERE name='Alipay' LIMIT 10;
```

### 3.b Component-Based

```jsx
// NavBarItem
NavBarItem.css
NavBarItem.js
NavBarItem.html
```

### 3.c Learn Once, Write Anywhere

- React Native (RN) mobile application
-- React TV TV application etc
-- React VR VR application

### 3.d create-react-app

## Node Package Manager