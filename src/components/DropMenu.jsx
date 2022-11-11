import React from 'react';
import Nav from 'react-bootstrap/Nav';


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
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/Project">Work</Nav.Link>
                        <Nav.Link href="/Experience">Experience</Nav.Link>
                        <Nav.Link href="/Social">Social</Nav.Link>
                    </Nav>
                </div>
            </div>
        </div>
    )
}

export default DropMenu;