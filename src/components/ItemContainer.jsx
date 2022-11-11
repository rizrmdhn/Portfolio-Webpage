import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExperienceBox from "./ExperienceBox"
import Social from "./Social";
import Header from "./Header";
import ProfileBox from "./ProfileBox";
import ProjectBox from "./ProjectBox";
import Footer from './Footer';


function ItemContainer({ projects, experiences }) {
    return (
        <div className='item-container border-radius'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<ProfileBox />} />
                    <Route exact path="/Project" element={<ProjectBox projects={projects} />} />
                    <Route exact path="/Experience" element={<ExperienceBox experiences={experiences} />} />
                    <Route exact path='/Social' element={<Social />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};
export default ItemContainer;