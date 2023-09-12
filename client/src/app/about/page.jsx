"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade"
      className="relative w-full min-h-screen my-4 mx-auto md:w-8/12 lg:w-6/12 px-8"
    >
      <Image
        className="w-full absolute mt-40 top-0 opacity-60"
        src="/about.svg"
        width={1000}
        height={1000}
        alt="about"
      />
      <Accordion
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "0.5rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Quiénes somos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Somos un grupo de desarrolladores IT, contamos con personas
            trabajando en UX/UI, Testing, Frontend, Backend y más. Trabajando
            todos para que puedas elegir muebles desde la comodidad de tu hogar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "0.5rem",
          margin: "0.5rem 0",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Nuestra misión</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Conseguir un trabajo pago en el sector IT para tener una vida digna
            mientras disfrutamos lo que hacemos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "0.5rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Agradecimientos:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Nara Humano</Typography>
          <Typography>Joaquin Bianchi</Typography>
          <Typography>Tomás Arteaga</Typography>
          <Typography>Mario Godoy</Typography>
          <Typography>Samantha Sánchez</Typography>
          <Typography>Ezequiel Soto</Typography>
          <Typography>EmiTypographya Quintana</Typography>
          <Typography>Alex Martín</Typography>
          <Typography>TL Masiel Venegas</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
