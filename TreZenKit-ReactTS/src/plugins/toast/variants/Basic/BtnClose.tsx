interface BtnCloseProps {
	onClick?: () => void;
}

const BtnClose = ({ onClick }: BtnCloseProps) => {
	return (
		<button type="button" onClick={onClick} className="absolute cursor-pointer text-lg right-2 top-1/2 -translate-y-1/2 size-7 hover:bg-gray-100 flex items-center justify-center rounded-lg transition-all duration-200 ease-in-out" aria-label="Close notification">
			<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
				<path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
			</svg>
		</button>
	);
};

export default BtnClose;
