function Button({className, children, ...props}){
    return(
        <button 
            className={`bg-blue-600 px-4 py-2 rounded-lg hover:bg-amber-400 active:bg-amber-900 active:ring active:ring-blue-300 mt-2 transition-all ${className}`}
            {... props}
        >
            {children}
        </button>
    );
}
export default Button;