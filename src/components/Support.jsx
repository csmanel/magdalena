import { useNavigate } from "react-router-dom";

export const Support = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>support page</div>
      <button onClick={() => navigate("/support-summary")}>donate here</button>
      {/* if wanting to replace history use { replace: true } as a second argument */}
    </>
  );
};
