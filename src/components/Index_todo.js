//https://codesandbox.io/s/m81582kv9?file=/components/TodoList.js:0-760
import React from 'react';
// import { render } from "react-dom";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import TodosContainer from "./todo/containers/Todos";
import TodoDetailContainer from "./todo/containers/TodoDetail";
import NotFound from "./todo/components/NotFound";

// Arrow Function components
// export const ToDoList = () => {
//     return (
//         <div>
//             <h2>TODO LIST</h2>
//         </div>
//     )
// };


export const ToDoList = () => {
    return (
      <BrowserRouter>
      <div>
        <nav>
          Navigation:
          <NavLink exact to="/">
            Todo list
          </NavLink>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={TodosContainer} />
            <Route exact path="/todos/:id" component={TodoDetailContainer} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <footer>Footer</footer>
      </div>
    </BrowserRouter>
    )
};

// const ToDoList = () => (
//     <BrowserRouter>
//       <div>
//         <nav>
//           Navigation:
//           <NavLink exact to="/">
//             Todo list
//           </NavLink>
//         </nav>
//         <main>
//           <Switch>
//             <Route exact path="/" component={TodosContainer} />
//             <Route exact path="/todos/:id" component={TodoDetailContainer} />
//             <Route component={NotFound} />
//           </Switch>
//         </main>
//         <footer>Footer</footer>
//       </div>
//     </BrowserRouter>
//   );
  
//   render(<ToDoList />, document.getElementById("root"));
