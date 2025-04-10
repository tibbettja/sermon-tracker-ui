import type { Theme } from '@mui/material'

const Accordion = (theme: Theme) => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          '& .Mui-disabled': {
            backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
          },
          '& .Mui-expanded': {
            boxShadow: theme.shadows[3]
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: `0 ${theme.spacing(5)}`,
          '& + .MuiCollapse-root': {
            '& .MuiAccordionDetails-root:first-of-type': {
              paddingTop: 0
            }
          }
        },
        content: {
          margin: `${theme.spacing(2.5)} 0`
        },
        expandedIconWrapper: {
          color: theme.palette.text.secondary
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          '& + .MuiAccordionDetails-root': {
            paddingTop: 0
          }
        }
      }
    }
  }
}

export default Accordion
