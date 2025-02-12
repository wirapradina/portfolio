import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <SingleInfo text="pradinaresti@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="(+628) 2261017427 " Image={FiPhone} />
      <SingleInfo text="Sleman, Yogyakarta" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
