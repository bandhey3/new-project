/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components

let ps = null;

export default function InfoPage() {
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      {/* <ExamplesNavbar /> */}
      {/* <Basics /> */}
      {/* <Navbars /> */}
      {/* <Pagination />
          <Notifications />
          <Typography /> */}

      {/* PARTNERS */}
      <div className="section section-nucleo-icons">
        <img alt="..." className="path" />
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="title">Our Trusted Parteners </h2>
              <h4 className="description">
                BLK• Design System PRO comes with 100 custom icons made by our
                friends from NucleoApp. The official package contains over 2.100
                thin icons which are looking great in combination with BLK•
                Design System PRO Make sure you check all of them and use those
                that you like the most.
              </h4>
              <div className="btn-wrapper">
                <Button
                  className="btn-round"
                  color="primary"
                  // href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View All
                </Button>
                {/* <Button
                className="btn-simple btn-round"
                color="primary"
                href="https://nucleoapp.com/?ref=1712"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button> */}
              </div>
            </Col>
          </Row>
          <div className="">
            {/* <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"> */}
            <div className="icons-container blur-item on-screen mt-5">
              {/* Center */}
              <i className="icon tim-icons icon-coins" />
              {/* Right 1 */}
              <i className="icon icon-sm tim-icons icon-spaceship" />
              <i className="icon icon-sm tim-icons icon-money-coins" />
              <i className="icon icon-sm tim-icons icon-link-72" />
              {/* Right 2 */}
              <i className="icon tim-icons icon-send" />
              <i className="icon tim-icons icon-mobile" />
              <i className="icon tim-icons icon-wifi" />
              {/* Left 1 */}
              <i className="icon icon-sm tim-icons icon-key-25" />
              <i className="icon icon-sm tim-icons icon-atom" />
              <i className="icon icon-sm tim-icons icon-satisfied" />
              {/* Left 2 */}
              <i className="icon tim-icons icon-gift-2" />
              <i className="icon tim-icons icon-tap-02" />
              <i className="icon tim-icons icon-wallet-43" />
            </div>
            {/* <span className="blur-hidden h5 text-primary">
              Eplore all the 21.000+ Nucleo Icons
            </span> */}
            {/* </a> */}
          </div>
        </Container>
      </div>
      <Container>
        <div className="section section-nucleo-icons">
          <img alt="..." className="path" />
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="title">Our Team </h2>
              <h4 className="description">
                BLK• Design System PRO comes with 100 custom icons made by our
                friends from NucleoApp. The official package contains over 2.100
                thin icons which are looking great in combination with BLK•
                Design System PRO Make sure you check all of them and use those
                that you like the most.
              </h4>
              <div className="btn-wrapper">
                <Button
                  className="btn-round"
                  color="primary"
                  // href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View All
                </Button>
                {/* <Button
                className="btn-simple btn-round"
                color="primary"
                href="https://nucleoapp.com/?ref=1712"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button> */}
              </div>
            </Col>
          </Row>
        </div>
        <Row className="pt-5">
          <Col lg="4">
            <div className="section section-nucleo-icons">
              <img alt="..." className="path" />
              <Container>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("../assets/img/mike.jpg")}
                    />
                    <h4 className="title">Name</h4>
                    <h4 className="description">Designation</h4>
                  </CardHeader>
                  <CardBody>
                    {/* <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Wallet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Send
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav> */}
                    <div>
                      <h4 className="description">
                        BLK• Design System PRO comes with 100 custom icons made
                        by our friends from NucleoApp.
                      </h4>
                      <div className="btn-wrapper profile pt-3">
                        <Button
                          className="btn-icon btn-round"
                          color="twitter"
                          href="https://twitter.com/creativetim"
                          id="tooltip639225725"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip639225725"
                        >
                          Follow us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="facebook"
                          href="https://www.facebook.com/creativetim"
                          id="tooltip982846143"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip982846143"
                        >
                          Like us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="dribbble"
                          href="https://dribbble.com/creativetim"
                          id="tooltip951161185"
                          target="_blank"
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip951161185"
                        >
                          Follow us
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
          <Col lg="4">
            <div className="section section-nucleo-icons">
              <img alt="..." className="path" />
              <Container>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("../assets/img/mike.jpg")}
                    />
                    <h4 className="title">Name</h4>
                    <h4 className="description">Designation</h4>
                  </CardHeader>
                  <CardBody>
                    {/* <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Wallet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Send
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav> */}
                    <div>
                      <h4 className="description">
                        BLK• Design System PRO comes with 100 custom icons made
                        by our friends from NucleoApp.
                      </h4>
                      <div className="btn-wrapper profile pt-3">
                        <Button
                          className="btn-icon btn-round"
                          color="twitter"
                          href="https://twitter.com/creativetim"
                          id="tooltip639225725"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip639225725"
                        >
                          Follow us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="facebook"
                          href="https://www.facebook.com/creativetim"
                          id="tooltip982846143"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip982846143"
                        >
                          Like us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="dribbble"
                          href="https://dribbble.com/creativetim"
                          id="tooltip951161185"
                          target="_blank"
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip951161185"
                        >
                          Follow us
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
          <Col lg="4">
            <div className="section section-nucleo-icons">
              <img alt="..." className="path" />
              <Container>
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("../assets/img/mike.jpg")}
                    />
                    <h4 className="title">Name</h4>
                    <h4 className="description">Designation</h4>
                  </CardHeader>
                  <CardBody>
                    {/* <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Wallet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Send
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav> */}
                    <div>
                      <h4 className="description">
                        BLK• Design System PRO comes with 100 custom icons made
                        by our friends from NucleoApp.
                      </h4>
                      <div className="btn-wrapper profile pt-3">
                        <Button
                          className="btn-icon btn-round"
                          color="twitter"
                          href="https://twitter.com/creativetim"
                          id="tooltip639225725"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip639225725"
                        >
                          Follow us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="facebook"
                          href="https://www.facebook.com/creativetim"
                          id="tooltip982846143"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip982846143"
                        >
                          Like us
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-round"
                          color="dribbble"
                          href="https://dribbble.com/creativetim"
                          id="tooltip951161185"
                          target="_blank"
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip951161185"
                        >
                          Follow us
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      {/*    <Signup />
          <Examples />
          <Download /> */}
    </>
  );
}
