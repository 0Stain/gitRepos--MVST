import { Outlet } from "react-router-dom";
import classes from './App.module.css';
import mvst from './assets/mvst.png';

function App() {
  return (
    <div><img width={100} src={mvst} alt="mvst" className={classes.app_logo} />
    <div className={classes.app}>
      
      <h1 className={classes.app_title}>Github Repository Finder</h1>
      <Outlet/>
      
      </div>
       </div>
  );
}

export default App;
