import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MenuNgang } from './components/MenuNgang';
import { routes } from './config/routes';
import { MyRoute } from './components/MyRoute';
import { MyContextProvider } from './context/MyContext';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    // Provider thường ko đặt ở App đâu, đặt ở index.js luôn ấy. Là cái gốc của toàn bộ app. Đặt ở app lỡ sau xử lí gì ở app thì vướng provider đó
    <div className="App">
      <MyContextProvider>
        <h1>TO DO LIST</h1>
        <TodoProvider>
          <BrowserRouter>
            {/* <!-- Menu ngang --> */}
            <MenuNgang />
            {/* Định tuyến */}  
            <Switch>
              {routes.map((item, index) => {
                return (
                  <MyRoute key={index} path={item.path} component={item.component} />
                )
              })}
            </Switch>
          </BrowserRouter>
        </TodoProvider>
      </MyContextProvider>
    </div>
  );
}

export default App;