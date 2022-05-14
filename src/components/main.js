export default function Main({ children }) {
    return (
        <div>
            <div className="container mx-auto flex flex-col items-center px-4">
                <h1 className="mt-8 text-center text-4xl text-amber-50">
                    Guess the Pic!
                </h1>
                {children}
                <button
                    className="h-9 w-40 rounded-xl border hover:bg-rose-500"
                    onClick={() => window.location.reload()}
                >
                    Reload
                </button>
            </div>
        </div>
    );
}
