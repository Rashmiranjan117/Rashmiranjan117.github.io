import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./navbar.css";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { ImStatsBars2 } from "react-icons/im";
import RRMremovebgpreview from "../../assests/RRM-removebg-preview.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Heading,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
const data = [
  {
    id: 1,
    link: "#",
    title: "Home",
  },
  {
    id: 2,
    link: "#about",
    title: "About Me",
  },
  {
    id: 3,
    link: "#skills",
    title: "Skills",
  },
  {
    id: 4,
    link: "#projects",
    title: "Projects",
  },
  {
    id: 5,
    link: "#githubStats",
    title: "Github Stats",
  },
  {
    id: 6,
    link: "#contact",
    title: "Contact Me",
  },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={RRMremovebgpreview} alt="websiteLogo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="menu-btn">
          {/* <div className="menu-btn__burger"></div> */}
          <Button className="btn">
            <HamburgerIcon onClick={onOpen} />
          </Button>
          <Modal
            className="modal"
            isCentered
            initialFocusRef={true}
            onClose={onClose}
            size="full"
            isOpen={isOpen}
            z-index={1}
          >
            <ModalOverlay backdropBlur="3px" />
            <ModalContent className="content">
              <ModalBody className="items">
                {data.map((item) => (
                  <h3 key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </h3>
                ))}
              </ModalBody>
              <ModalFooter className="footer">
                <Button onClick={onClose} className="btn">
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// floating nav (bottom)

{
  /* <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <VscAccount />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <HiOutlineCheckBadge />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#githubStats"
        onClick={() => setActiveNav("#githubStats")}
        className={activeNav === "#githubStats" ? "active" : ""}
      >
        <ImStatsBars2 />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineContacts />
      </a> */
}

// **************************
{
  /* <Heading as="h3" size="lg">
                  <Link href="#">Home</Link>
                </Heading>
                <Heading as="h3" size="lg">
                  <Link href="#">Home</Link>
                </Heading>
                <Heading as="h3" size="lg">
                  <Link href="#">Home</Link>
                </Heading>
                <Heading as="h3" size="lg">
                  <Link href="#">Home</Link>
                </Heading>
                <Heading as="h3" size="lg">
                  <Link href="#">Home</Link>
                </Heading>
                <Heading as="h3" size="lg">
                  <Link href="#">Home</Link>
                </Heading> */
}
