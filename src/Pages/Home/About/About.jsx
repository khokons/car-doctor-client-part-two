import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
      <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">

        <div className='lg:w-1/2 relative'>
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
        </div>

        <div className="lg:w-1/2 space-y-5 flex flex-col justify-center items-center lg:items-start px-5">
          <h3 className="text-red-600 text-4xl">About us</h3>
          <h1 className="text-5xl font-bold">We are qualified & have years of experience in this field</h1>
          <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
          <p className="py-3">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
          <button className="btn btn-primary w-full lg:w-auto">Get Started</button>
        </div>

      </div>
    </div>
    );
};

export default About;