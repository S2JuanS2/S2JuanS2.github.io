function Title(){
    return (
        <div className="flex flex-col items-center mt-5">
            <div className="flex">
                <h1 className="text-white font-bold text-2xl mb-3">Decision title</h1>
                <img src="/images/edit.png" alt="edit" className="cursor-pointer w-6 h-6 mt-1 ml-2 transition-transform duration-300 hover:scale-120"/>
            </div>
            <img src="/images/confused.png" alt="" className="shadow-lg"/>
        </div>
    );
}

export default Title;