export const Support = () => {
  return (
    <div
      className="support-container flex flex-col items-center justify-center bg-[rgba(189,126,74,0.856)] rounded-[15px] mt-32 max-h-[600px] w-[1000px] z-[1] 
    md:w-1/2 lg:w-[900px] xl:w-[1000px] sm:w-9/10"
    >
      <div className="support-text text-center font-poppins mt-20 w-3/4 font-medium whitespace-pre-line">
        <h1 className="text-lg font-semibold pb-8">
          Help Magdalena spread the joy of early music across generations!
        </h1>
        <p className="text-base">
          Just as music shines brightest with an audience, Magdalena soars
          highest with your support. By making a donation, you can help us bring
          the gift of music to audiences near and far. All proceeds go directly
          toward operating costs such as venue rentals, recording fees,
          advertising, instrument purchases, and artist compensation. We deeply
          thank you for your support of early music!
        </p>
      </div>
      <div className="support-form flex flex-col items-center justify-center h-[500px]">
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="hosted_button_id" value="NWTAKY2NXS8YU" />
          <input
            className="donate-btn rounded-[10px] bg-[#ffc43a] text-[rgba(7,54,98,1)] text-[25px] font-bold h-[45px] w-[200px] shadow-[inset_0_0_15px_#ffc43a,0_0_15px_#ffc43a]  
            hover:shadow-[inset_0_0_30px_#073662,0_0_30px_#073662] hover:border-[2px] hover:border-[rgba(7,54,98,1)] hover:cursor-pointer hover:shadow-md 
            active:bg-[rgba(7,54,98,1)] active:text-white
            md:w-[180px] md:h-[40px] 
            sm:w-[150px] sm:h-[35px] sm:text-[20px]"
            type="submit"
            value="donate!"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        </form>
      </div>
    </div>
  );
};
