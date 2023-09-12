import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactCard = ({ position, name, linkedin }) => {
  return (
    <div className="w-9/12 border-4 border-primary mt-8 h-40 rounded-lg shadow-lg hover:relative hover:top-0.5 flex flex-col gap-2 justify-center items-center">
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
