import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./tabs/Home";
import About from "./tabs/About";
import Projects from "./tabs/Projects";
import Contact from "./tabs/Contact";

export default function PortfolioContainer() {
  const [currentTab, setCurrentTab] = useState("Home");

  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    switch (currentTab) {
      case "Home": {
        return <Home />;
      }
      case "About": {
        return <About />;
      }
      case "Projects": {
        return <Projects />;
      }
      default:
        return <Contact />;
    }
  };

  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentTab} handleTabChange={handleTabChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderTab()}
    </div>
  );
}
