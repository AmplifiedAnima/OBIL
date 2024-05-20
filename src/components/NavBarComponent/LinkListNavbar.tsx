import { Link } from 'react-router-dom';

export const LinkListNavbar = () => {
  return (
    <>
      <Link to="/">
        <li className="pt-8 pl-3 text-darkGrey font-bold">Content </li>
      </Link>
      <Link to="/about-creator">
        <li className="pt-8 pl-4 text-darkGrey font-bold">Creator</li>
      </Link>
      <Link to="/contact-me">
        <li className="pt-8 pl-4 text-darkGrey font-bold">Contact </li>
      </Link>{' '}
    </>
  );
};
