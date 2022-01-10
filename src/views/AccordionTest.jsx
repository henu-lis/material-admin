import React, { useState } from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const list = [
    {
        id: 'panel1',
        header: 'General settings',
        secondaryHeader: 'I am an accordion',
        content: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam.'
    },
    {
        id: 'panel2',
        header: 'Users',
        secondaryHeader: 'You are currently not an owner',
        content: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,varius pulvinar diam eros in elit. Pellentesque convallis laoreet'
    },
    {
        id: 'panel3',
        header: 'Advanced settings',
        secondaryHeader: 'Filtering has been entirely disabled for whole web server',
        content: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sitamet egestas eros, vitae egestas augue. Duis vel est augue.'
    }
]

function AccordionTest() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div>
            {
                list.map((accordion) => {
                    const { id, header, secondaryHeader, content } = accordion;
                    return (
                        <Accordion expanded={expanded === id} onChange={handleChange(id)} key={id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                id={id}
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {header}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {secondaryHeader}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {content}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }

        </div>
    )
}

export default AccordionTest
