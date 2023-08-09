import "../App.css";
import "../Contact.css"
import "../Support.css"

export const Support = () => {
  return (
    <div className="support-container">
      <div className="support-text">
        <h1>Help Magdalena spread the joy of early music across generations!</h1>
        <p style={{ fontSize: 18 }}>Just as music shines brightest with an audience, the Magdalena ensemble soars highest with your support. By making a donation, you can help us bring the gift of music to the world. All proceeds directly ensure the ensemble’s success by supporting venue rentals, recording fees, advertising, instrument purchases, and other administrative costs. We deeply thank you and your support of early music!</p>
      </div>


      <div className="support-form">
        <form action="https://www.paypal.com/donate" method="post" target="_blank">
          <input type="hidden" name="hosted_button_id" value="NWTAKY2NXS8YU" />

          {/* <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /> */}
          <input 
          className="pill" 
          type="submit" 
          border="0" 
          value="donate!" 
          title="PayPal - The safer, easier way to pay online!" 
          alt="Donate with PayPal button" /> 


        </form>
      </div>


    </div>
  );
};

