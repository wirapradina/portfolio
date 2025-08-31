import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.instagram.com/wirapradin.aa/" Icon={FaInstagram} />
      <SingleContactSocial link="https://github.com/wirapradina" Icon={FiGithub} />
      <SingleContactSocial link="https://www.linkedin.com/in/wirapradinaresti/" Icon={FaLinkedinIn} />
    </div>
  );
};

export default ContactSocial;
