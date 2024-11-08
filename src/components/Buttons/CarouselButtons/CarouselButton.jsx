const CarouselButton = ({ label, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`inline-flex items-center justify-center bg-[#ffe8cd] rounded-[10px] text-md font-bold 
              m-[20px] w-[150px] h-[30px] border-none cursor-pointer select-none 
              hover:border-2 hover:border-[#222] 
              active:bg-[#222] active:text-white 
              disabled:bg-[#cccccc] disabled:border disabled:border-[#999999] disabled:text-[#666666] disabled:cursor-not-allowed`}
  >
    {label}
  </button>
);

export default CarouselButton;
