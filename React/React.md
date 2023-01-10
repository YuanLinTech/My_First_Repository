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
```JavaScript
document.querySelector('[href="home"]').classList.add('navbar__item--active')
```
You also need to un-highlight the "Resume" tab in the navigation bar at the same time.
```JavaScript
document.querySelector('[href="resume"]').classList.remove('navbar__item--active')
```
By contrast, SQL statements are declarative. We tell the database which data we want to fetch, and the database will give you the corresponding data, rather than using the API of the database to fetch data.

For example:
```
SELECT * FROM Products WHERE name='Alipay' LIMIT 10;
```

```JavaScript
<button class="navItem" onclick="clickNavBar('resume')">Resume</button>
document.querySelector('[href="resume"]').addEventListener('click',changePage)

const changePage = () => {
    document.querySelector('.pages').forEach((p) => p.classList.remove('page--active'));
    document.querySelector('#resumePage').classList.add('page--active');
    document.querySelector('.navItems').forEach((ni) => ni.classList.remove('navItem--active'));
    document.querySelector('[herf="resume"]').classList.add('navItem--active');
}

```JSX```

<a 
    href="home"
    class={`navItem ${activePage === 'homePage' ? 'navItem---active':''}`}
>
    Home
</a>

<a
    href="resume"
    class={`navItem ${activePage === 'resume' ? 'navItem---active':''}`}
>
    Resume
</a>

<div class={`page ${activePage === 'homePage' ? 'page---active':''}`}> </div>

<div class={`page ${activePage === 'resumePage' ? 'page---active':''}`}> </div>

```JSX```
<Navi/>
<HomePage/>
<ResumePage/>

// Navi
<div class="nav"> 
    <div class="nav__left">
        <Logo/>
    </div>
    <div class="nav__right">
        <NavBar/>
    </div>
</div>

// NavBar
<div class="navBar">
    <NavBarItem href="home">Home</NavBarItem>
    <NavBarItem href="resume">Resume</NavBarItem>
</div>


### 3.b Component-Based
-- Single responsibility

Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.


```jsx
// NavBarItem
NavBarItem.css
NavBarItem.js
NavBarItem.html
```

### 3.c Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.

- React Native (RN) mobile application
-- React TV TV application etc
-- React VR VR application

### 3.d create-react-app

## Node Package Manager