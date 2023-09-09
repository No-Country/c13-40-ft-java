import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function About() {
  return (
    <div className="w-full my-20 mx-auto md:w-8/12 lg:w-6/12 px-8">
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
          <Typography>
            <ul className="pl-2 list-disc text-gray-400">
              <li>Nara Humano</li>
              <li>Joaquin Bianchi</li>
              <li>Tomás Arteaga</li>
              <li>Mario Godoy</li>
              <li>Samantha Sánchez</li>
              <li>Ezequiel Soto</li>
              <li>Emilia Quintana</li>
              <li>Alex Martín</li>
              <li>TL Masiel Venegas</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
