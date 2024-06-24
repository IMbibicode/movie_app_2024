import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location, navigate]);

  if (location.state) {
    const { title } = location.state;
    return (
          <h3 className="movie__title">{title}</h3>
    );
    } else {
        return null;
    }
}

export default Detail;