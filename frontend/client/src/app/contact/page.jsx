"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactCard from "@/components/card/ContactCard";
import team from "../../services/team";

const Contact = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade"
      className="w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl mt-12 mb-4 tracking-wide">Team</h1>
      <div className="w-full grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {team.map((member) => (
          <ContactCard
            key={member.name}
            position={member.position}
            name={member.name}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
