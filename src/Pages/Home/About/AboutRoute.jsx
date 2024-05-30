import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React from 'react';
import Slider from 'react-slick';

// Sample team members data
const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: "https://i.postimg.cc/HsM30MqN/PXL-20220202-103717694-PORTRAIT.jpg",
    phone: "123-456-7890",
    social: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe"
    }
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: "https://i.postimg.cc/grb0v3vd/PXL-20211015-121557530-PORTRAIT.jpg",
    phone: "987-654-3210",
    social: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith"
    }
  },
  {
    name: "Bob Johnson",
    position: "Lead Developer",
    image: "https://i.postimg.cc/KztySw67/IMG-3301.jpg",
    phone: "555-555-5555",
    social: {
      linkedin: "https://www.linkedin.com/in/bobjohnson",
      twitter: "https://twitter.com/bobjohnson"
    }
  },

  // Add more team members as needed
];

const AboutRoute = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold uppercase">Team</h3>
        <h2 className="text-5xl font-bold my-4 uppercase">Meet Our Team</h2>
        <p className="text-lg">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="container mx-auto">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-4 text-center bg-black text-white">
                  <h4 className="text-xl font-semibold">{member.name}</h4>
                  <p className="font-bold">{member.position}</p>
                  <p className="mt-2">Phone: {member.phone}</p>
                  <div className="mt-2">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="mx-2">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutRoute;
