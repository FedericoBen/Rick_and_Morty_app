import { BrowserRouter as Router } from "react-router-dom";
import DesktopTemplate from "../components/templates/desktop-template";
import ResponsiveTemplate from "../components/templates/responsive-template";


const RouterApp = () => {
  return (
    <Router basename="/Rick_and_Morty_app">
      <DesktopTemplate />
      <ResponsiveTemplate />
    </Router>
  )
}

export default RouterApp
