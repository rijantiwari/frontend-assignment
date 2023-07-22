// components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-orange-600  to-cyan-600 text-white text-center py-4">
      <p>
        &copy; {new Date().getFullYear()} Made for the Frontend Internship
        Assignment . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
