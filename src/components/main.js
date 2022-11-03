import { FaHouseUser } from 'react-icons/fa';
export default function Main({ children }) {
    return (
        <div>
            <div className="container mx-auto flex flex-col items-center px-4">
                <h1 className="animate-bounce mt-8 text-center md:text-8xl text-4xl text-amber-50">
	    		Hula ooOPs!
                </h1>
	    	<h3 className="text-2xl" >Guess the Pic!</h3>
                {children}
	    	<div>
                <button
                    className="h-9 w-40 rounded-xl border hover:bg-rose-500"
                    onClick={() => window.location.reload()}
                >
                    Reload
                </button>
	    	</div>
	    <div className="mt-4">
	    <a href={'https://vinz009.github.io/homepage/'}>
	    <FaHouseUser size={40} />
	    </a>
	    </div>
            </div>
        </div>
    );
}
