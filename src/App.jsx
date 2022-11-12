import React from "react";
import { ExperienceData } from "./utils/experience";
import { ProjectData } from "./utils/project";
import { HashRouter, Route, Routes } from "react-router-dom";
import ExperienceBox from "./components/ExperienceBox"
import Social from "./components/Social";
import Header from "./components/Header";
import ProfileBox from "./components/ProfileBox";
import ProjectBox from "./components//ProjectBox";
import Footer from "./components/Footer";
import DropMenu from "./components/DropMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: ProjectData(),
      experiences: ExperienceData(),
      addClass: false,
    }

    this.showDropdown = this.showDropdown.bind(this)
  }


  /**
   * If the state of addClass is true, add the class 'show' and 'slide-right' to the dropdown menu. If
   * the state of addClass is false, add the class 'slide-left' to the dropdown menu and remove the class
   * 'show' after 100 milliseconds
   */
  showDropdown() {
    this.setState({
      addClass: !this.state.addClass
    });
    if (this.state.addClass === true) {
      document.getElementById('myDropdown').classList.add('show', 'slide-right');
      document.getElementById('myDropdown').classList.remove('slide-left');
    } else if (this.state.addClass === false) {
      document.getElementById('myDropdown').classList.toggle('slide-left');
      setTimeout(() => document.getElementById('myDropdown').classList.remove('show'), 100);

    }
  }


  render() {
    return (
      <div className="App">
        <HashRouter>
          <DropMenu />
          <Header />
          <Routes>
            <Route path="/" element={<ProfileBox />} />
            <Route path="/Project" element={<ProjectBox projects={this.state.projects} />} />
            <Route path="/Experience" element={<ExperienceBox experiences={this.state.experiences} />} />
            <Route path='/Social' element={<Social />} />
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    )
  }
}

export default App;
