import { FaHouseUser, FaSync } from 'react-icons/fa';
export default function Main({ children }) {
    return (
        <div>
            <div className="container mx-auto flex flex-col items-center px-4">
                <h1 className="animate-bounce mt-8 text-center  text-4xl text-amber-50">
	    		Hula ooOPs!
                </h1>
	    	<h5>Guess the Pic!</h5>
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
	    <a href={'https://www.python.org/about/apps/'}>
	    <FaHouseUser />
	    </a>
	    </div>
            </div>
        </div>
    );
}
