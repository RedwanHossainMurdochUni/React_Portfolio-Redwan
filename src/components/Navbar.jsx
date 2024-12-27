
import logo from "../assets/kevinRushLogo.png";

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // For Font Awesome icons
import { AiOutlineMail } from 'react-icons/ai'; // For Ant Design icons
const Navbar = () => {
    return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center"> {/* Logo Container */}
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl"> {/* Icons Container */}
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
          <AiOutlineMail />
        </div>
      </nav>
    );
  };

export default Navbar;