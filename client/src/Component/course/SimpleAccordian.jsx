import  React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const contents = [
    {
    title: "৪ মাস আর ২ বছরের হিসাবটা বুঝিনি",
    details: "মূল প্রোগ্রাম চার মাসের। অর্থাৎ প্রজেক্ট রিভিউ, মেন্টর সাপোর্ট, প্রজেক্ট সাবমিশন, সার্টিফিকেট, ক্যারিয়ার গাইডলাইন, ইন্টার্নশিপ সম্ভাবনা – এই ফীচারগুলো থাকবে প্রথম চার মাস। তবে কোর্স কন্টেন্টগুলো (ভিডিও, কোড, কুইজ) আপনার একাউন্টে ২ বছর পর্যন্ত থাকবে; যাতে প্রয়োজনমত শেখা এবং প্র্যাকটিস করা চালু রাখতে পারেন।"
    },
    {title: "৪ মাস আর ২ বছরের হিসাবটা বুঝিনি",
    details: "মূল প্রোগ্রাম চার মাসের। অর্থাৎ প্রজেক্ট রিভিউ, মেন্টর সাপোর্ট, প্রজেক্ট সাবমিশন, সার্টিফিকেট, ক্যারিয়ার গাইডলাইন, ইন্টার্নশিপ সম্ভাবনা – এই ফীচারগুলো থাকবে প্রথম চার মাস। তবে কোর্স কন্টেন্টগুলো (ভিডিও, কোড, কুইজ) আপনার একাউন্টে ২ বছর পর্যন্ত থাকবে; যাতে প্রয়োজনমত শেখা এবং প্র্যাকটিস করা চালু রাখতে পারেন।"},
    {title: "৪ মাস আর ২ বছরের হিসাবটা বুঝিনি",
    details: "মূল প্রোগ্রাম চার মাসের। অর্থাৎ প্রজেক্ট রিভিউ, মেন্টর সাপোর্ট, প্রজেক্ট সাবমিশন, সার্টিফিকেট, ক্যারিয়ার গাইডলাইন, ইন্টার্নশিপ সম্ভাবনা – এই ফীচারগুলো থাকবে প্রথম চার মাস। তবে কোর্স কন্টেন্টগুলো (ভিডিও, কোড, কুইজ) আপনার একাউন্টে ২ বছর পর্যন্ত থাকবে; যাতে প্রয়োজনমত শেখা এবং প্র্যাকটিস করা চালু রাখতে পারেন।"},
    {title: "৪ মাস আর ২ বছরের হিসাবটা বুঝিনি",
    details: "মূল প্রোগ্রাম চার মাসের। অর্থাৎ প্রজেক্ট রিভিউ, মেন্টর সাপোর্ট, প্রজেক্ট সাবমিশন, সার্টিফিকেট, ক্যারিয়ার গাইডলাইন, ইন্টার্নশিপ সম্ভাবনা – এই ফীচারগুলো থাকবে প্রথম চার মাস। তবে কোর্স কন্টেন্টগুলো (ভিডিও, কোড, কুইজ) আপনার একাউন্টে ২ বছর পর্যন্ত থাকবে; যাতে প্রয়োজনমত শেখা এবং প্র্যাকটিস করা চালু রাখতে পারেন।"},
    {title: "৪ মাস আর ২ বছরের হিসাবটা বুঝিনি",
    details: "মূল প্রোগ্রাম চার মাসের। অর্থাৎ প্রজেক্ট রিভিউ, মেন্টর সাপোর্ট, প্রজেক্ট সাবমিশন, সার্টিফিকেট, ক্যারিয়ার গাইডলাইন, ইন্টার্নশিপ সম্ভাবনা – এই ফীচারগুলো থাকবে প্রথম চার মাস। তবে কোর্স কন্টেন্টগুলো (ভিডিও, কোড, কুইজ) আপনার একাউন্টে ২ বছর পর্যন্ত থাকবে; যাতে প্রয়োজনমত শেখা এবং প্র্যাকটিস করা চালু রাখতে পারেন।"},
    {title: "৪ মাস আর ২ বছরের হিসাবটা বুঝিনি",
    details: "মূল প্রোগ্রাম চার মাসের। অর্থাৎ প্রজেক্ট রিভিউ, মেন্টর সাপোর্ট, প্রজেক্ট সাবমিশন, সার্টিফিকেট, ক্যারিয়ার গাইডলাইন, ইন্টার্নশিপ সম্ভাবনা – এই ফীচারগুলো থাকবে প্রথম চার মাস। তবে কোর্স কন্টেন্টগুলো (ভিডিও, কোড, কুইজ) আপনার একাউন্টে ২ বছর পর্যন্ত থাকবে; যাতে প্রয়োজনমত শেখা এবং প্র্যাকটিস করা চালু রাখতে পারেন।"},

]
export default function SimpleAccordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='accodion'>
        {contents.map((c, i) => {
            return <>
            <Accordion 
            style={{border: "none", backgroundColor: "#F2F5F9"}}
            disableGutters={"true"} expanded={expanded === `panel${i}`} onChange={handleChange( `panel${i}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={`panel${i}bh-header`}
          
        >
          
          <Typography sx={{ color: 'text.secondary', border: "none", fontWeight: "500", }}>{c.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{lineHeight: "2rem" }}>
           {c.details}
          </Typography>
        </AccordionDetails>
      </Accordion>
            </>
        } )}
      

    </div>
  );
}