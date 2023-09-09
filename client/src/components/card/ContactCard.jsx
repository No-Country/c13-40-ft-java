import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactCard = ({ position, name, linkedin }) => {
  return (
    <div className="w-9/12 border-2 border-slate-500 mt-8 h-40 rounded-lg shadow-2xl flex flex-col gap-2 justify-center items-center">
      <span className="text-gray-400">{position}</span>
      <span className="font-bold text-base">{name}</span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center text-blue-600"
        href={linkedin}
      >
        <LinkedInIcon />
        <span className="ml-1 text-slate-800 text-sm hover:underline">
          LinkedIn
        </span>
      </a>
    </div>
  );
};

export default ContactCard;
