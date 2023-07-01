import React from "react";
// import reactLogo from '/icons/logo.svg';// load at runtime from public
// import logo from '../assets/react.svg';// embedded in the bundle at build

interface Props {
  children?: React.ReactNode;
}

// export default () => {
const TopBar = ({ children }: Props) => {
  return (
    <div className="top-bar">
      <h1>I am the top bar</h1>
      <img className="logo" src="./icons/logo.svg" alt="logo" />
      {/* <img className="logo" src={reactLogo} alt="logo" /> */}
      {/* <img className="logo" src={logo} alt="logo" /> */}
      {children}
    </div>
  );
};
export default TopBar;
