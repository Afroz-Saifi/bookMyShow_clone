import React from 'react';
import { Container, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, Pinterest } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';


const Footer = () => {
    return (
        <>
        <div
        style={{
          width: '100%',
          backgroundColor: '#f3f3f3',
          paddingTop: '20px',
          marginTop: "30px",
          paddingBottom: '20px',
        }}
      >
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px 0' }}>
              <Typography variant="body1">CONNECT WITH US</Typography>
              <Facebook style={{ color: '#000333' }} />
              <Twitter style={{ color: '#000333' }} />
              <Instagram style={{ color: '#000333' }} />
              <YouTube style={{ color: '#000333' }} />
              <Pinterest style={{ color: '#000333' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0' }}>
              <PhoneIcon
                style={{
                  '--fa-primary-color': '#000333',
                  '--fa-secondary-color': '#000333',
                  fontSize: '2rem',
                }}
              />
              <Typography variant="body1">DOWNLOAD THE APP FOR iOS / ANDROID</Typography>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{
          width: '100%',
          backgroundColor: '#333',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '150px',
          color: '#fff',
        }}
      >
        <Container>
          <Typography variant="body1" className="row-1">
            POWERED BY SHOWVIBES NET-A-PORTER GROUP - COPYRIGHT © 2000-2023 SHOWVIBES NET-A-PORTER GROUP S.P.A. - ALL RIGHTS
            RESERVED - SIAE LICENCE # 401/I/526
          </Typography>
          <Typography variant="body1" className="row-2">
            LEGAL AREA / PRIVACY POLICY
          </Typography>
        </Container>
      </div>
        </>
    )
}

export default Footer;
