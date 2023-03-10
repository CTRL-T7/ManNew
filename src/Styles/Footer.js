import { styled } from '@mui/material/styles'
import { Colors } from './theme/Theme'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'

export const FooterContainer = styled(Box)(({ matches, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '50px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 20px',
  },
}))

export const FooterItemsContainer = styled(Box)(({ matches, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'left',
  height: '100%',
  padding: '0px 0px',
  width: '23%',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    alignItems: 'center',
    marginBottom: '20px',
    textAlign: 'center',
  },
}))
export const FooterImg = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '100px',
  marginTop: '30px',
  overFlow: 'hidden',
  paddingBottom: '20px',
}))

export const MyButton = styled(Button)(() => ({
  width: '246px',
  color: Colors.black,
  textDecoration: 'none',
  padding: '8px 16px 8px 16px',
  margin: 0,
  height: 34,
  borderRadius: 500,
  fontSize: 16,
  border: '1px solid #000',
  fontSize: '14px',
  padding: '16px 20px',
}))

export const FooterDescription = styled(Typography)(({ theme }) => ({
  lineHeight: '25px',
  fontSize: '14px',
  cursor: 'pointer',
  color: Colors.black,
  paddingBottom: '10px',
}))
