import React from "react";
import { useNavigate } from "react-router-dom";

export const SupportSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Support Confirmed!</div>
      <button onClick={() => navigate(-1)}> go back</button>
    </>
  );
};
