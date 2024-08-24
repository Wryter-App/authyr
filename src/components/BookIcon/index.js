import { useMemo } from "react";
import { Link } from "react-router-dom";

const BookIcon = ({ id, className = "", title, backgroundImage }) => {
  const bookIconStyle = useMemo(() => {
    return {
      backgroundImage: backgroundImage,
    };
  }, [backgroundImage]);

  return (
    <Link to={`/app/project/${id}`}>
      <div className={`bookicon ${className}`} style={bookIconStyle}>
        <h5 className="book-title">{title}</h5>
      </div>
    </Link>
  );
};

export default BookIcon;
