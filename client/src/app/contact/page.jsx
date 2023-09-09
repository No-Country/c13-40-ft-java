import ContactCard from "@/components/card/ContactCard";
import team from "../../services/team";

const Contact = () => {
  return (
    <div className="w-full grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
      {team.map((member) => (
        <ContactCard
          key={member.name}
          position={member.position}
          name={member.name}
          linkedin={member.linkedin}
        />
      ))}
    </div>
  );
};

export default Contact;
