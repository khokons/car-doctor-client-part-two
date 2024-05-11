import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/servicesTwo")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center">
      <h3 className="text-orange-500">Services</h3>
      <h1 className="text-3xl font-bold">Our Service Area</h1>
      <p>
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
