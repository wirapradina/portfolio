const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link.startsWith("http") ? link : `https://${link}`} // Pastikan format link benar
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center cursor-pointer"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;
