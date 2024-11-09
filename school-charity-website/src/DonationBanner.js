// src/DonationBanner.js
import React from 'react';

function DonationBanner() {
  return (
    <div style={{
      backgroundColor: '#0e76a8',  // A M-Pesa-like dark blue color
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
    }}>
      <p style={{
        margin: 0,
        fontSize: '18px',
        fontWeight: 'bold',
        letterSpacing: '1px',
      }}>
        M-PESA Paybill Number
      </p>
      <p style={{
        margin: '10px 0',
        fontSize: '24px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        textTransform: 'uppercase',
      }}>
        123456
      </p>
      <p style={{
        margin: '10px 0',
        fontSize: '16px',
      }}>
        Account Number: <strong>0580261358406</strong>
      </p>
      <p style={{
        margin: '10px 0',
        fontSize: '16px',
      }}>
        Please donate via M-Pesa using the Paybill number above.
      </p>
      <p style={{
        margin: '10px 0',
        fontSize: '16px',
        fontStyle: 'italic',
      }}>
        Thank you for supporting education in Kenya!
      </p>
    </div>
  );
}

export default DonationBanner;
