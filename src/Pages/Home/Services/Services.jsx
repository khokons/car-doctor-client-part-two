import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-khokons-c1e583e9.vercel.app/servicesTwo")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center">
      <h3 class="text-orange-500 text-2xl">Services</h3>
      <h1 className="text-[#151515] font-sans text-5xl font-bold leading-normal">Our Service Area</h1>
      <p className="text-center font-inter text-base font-normal leading-7 capitalize">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which do not look even slightly believable.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
    {
        services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
    }
      </div>

    </div>
  );
};

export default Services;
