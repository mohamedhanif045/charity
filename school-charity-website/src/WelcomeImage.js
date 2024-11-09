import React from 'react';
import './WelcomeImage.css'; // Import CSS file for styling

const WelcomeImage = () => {
  const imageUrl1 = "https://images.pexels.com/photos/6757958/pexels-photo-6757958.jpeg?auto=compress&cs=tinysrgb&w=600"; // First image
  const imageUrl2 = "https://www.schoolsforkenya.co.uk/wp-content/uploads/2019/03/Schools-For-Kenya-Flag.jpg"; // Second image
  
  return (
    <div className="image-container">
      <div className="image-box">
        <img src={imageUrl1} alt="Inspiration" className="welcome-image" />
        <div className="image-text">
          <h2>Inspiration in Action</h2>
          <p>Every child deserves the opportunity to learn and grow. This image represents the hope and potential of students in rural areas, inspiring us to take action towards a brighter future.</p>
        </div>
      </div>

      <div className="image-box">
        <img src={imageUrl2} alt="Schools for Kenya" className="welcome-image" />
        <div className="image-text">
          <h2>Building Strong Foundations</h2>
          <p>Schools for Kenya is committed to making education accessible to children in remote areas. The flag of our charity represents our ongoing efforts in building and supporting schools, ensuring a path to success for students who need it most.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeImage;
