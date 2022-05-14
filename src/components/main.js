
	export default function Main ({children}) {
		return (
        <div>
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h1 className="mt-8 text-center text-4xl text-amber-50">
                    Guess the Pic!
                </h1>
				{children}	
                <button
                    className="border rounded-xl w-40 h-9 hover:bg-rose-500"
                    onClick={() => window.location.reload()}
                >
                    Reload
                </button>
			</div>
        </div>

		); 
	}
