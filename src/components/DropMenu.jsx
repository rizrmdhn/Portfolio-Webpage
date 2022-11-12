import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function DropMenu() {

    return (
        <div className='Menu sticky'>
            <button className="btn btn-primary d-lg-none bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"><i className="bi bi-list fa-2x"></i></button>

            <div className="offcanvas-lg offcanvas-start w-50" data-bs-scroll="true" tabIndex="-1" data-bs-backdrop="false"  id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Nav defaultActiveKey="/" className="flex-column nav2">
                        <Nav.Link><Link to="/" className='white'>About</Link></Nav.Link>
                        <Nav.Link><Link to="/Project" className='white'>Work</Link></Nav.Link>
                        <Nav.Link><Link to="/Experience" className='white'>Experience</Link></Nav.Link>
                        <Nav.Link><Link to="/Social" className='white'>Social</Link></Nav.Link>
                    </Nav>
                </div>
            </div>
        </div>
    )
}

export default DropMenu;