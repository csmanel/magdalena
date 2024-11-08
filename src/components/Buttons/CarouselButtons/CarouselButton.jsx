const CarouselButton = ({ label, onClick, disabled }) => (
  // here we can use conditional logic to handle disabled states
  // in tailwind, if there are disabled attributes the hover styling won't apply
  <button
    onClick={onClick}
    disabled={disabled}
    className={`inline-flex items-center justify-center rounded-[10px] text-md font-bold 
              m-[20px] w-[150px] h-[30px] cursor-pointer select-none 
              ${
                disabled
                  ? 'bg-[#cccccc] border border-[#999999] text-[#666666] cursor-not-allowed'
                  : 'bg-[#ffe8cd] hover:border-2 hover:border-[#222] active:bg-[#222] active:text-white'
              }`}
  >
    {label}
  </button>
);

export default CarouselButton;
