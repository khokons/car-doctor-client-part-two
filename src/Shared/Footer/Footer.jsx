import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content flex flex-col md:flex-row justify-between">
      <aside className="mb-6 md:mb-0 md:mr-6">
        <img src={logo} alt="Company Logo" className="mb-4" />
        <p>Edwin Diaz is a software and web<br />technologies engineer, a life coach<br />trainer who is also a serial entrepreneur.</p>
      </aside>
      <nav className="mb-6 md:mb-0 md:mr-6">
        <h6 className="footer-title">About</h6>
        <Link to='/' className="link link-hover">Home</Link>
        <Link to='/services' className="link link-hover">Service</Link>
        <Link to='/contact' className="link link-hover">Contact</Link>
      </nav>
      <nav className="mb-6 md:mb-0 md:mr-6">
        <h6 className="footer-title">Company</h6>
        <Link to='' className="link link-hover">Why Car Doctor?</Link>
        <Link to='/about' className="link link-hover">About</Link>
      </nav>
      <nav className="mb-6 md:mb-0">
        <h6 className="footer-title">Support</h6>
        <Link to='' className="link link-hover">Support Center</Link>
        <Link to='' className="link link-hover">Feedback</Link>
        <Link className="link link-hover">Accessibility</Link>
      </nav>
    </footer>
  );
};

export default Footer;