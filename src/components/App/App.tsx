//import { useState } from "react";
// import reactLogo from "../../assets/react.svg";
// import viteLogo from "../../assets/vite.svg";
// import heroImg from "../../assets/hero.png";
//import "./App.modul.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <div className={css.app}></div>
      <CafeInfo />
    </>
  );
}
