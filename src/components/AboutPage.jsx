import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="page-content">
      <div>about page</div>
      <div className="member-links">
        {" "}
        <Link to="magdalena bio"></Link>
        <Link to="cole bio">Cole Bio</Link>
        <Link to="cameron bio">Cameron Bio</Link>
      </div>
    </div>
  );
};
