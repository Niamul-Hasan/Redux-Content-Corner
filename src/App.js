import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
// import { Provider } from 'react-redux';
// import store from './redux/store';


function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      {/* <Provider store={store}>
      </Provider> */}
    </div>
  );
}

export default App;
