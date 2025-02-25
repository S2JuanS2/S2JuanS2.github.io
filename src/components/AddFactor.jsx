import NumberInput from './NumberInput';

function AddFactor(){
    return(
        <div >
            <h1 className="text-white mb-2 mt-8">Nueva pro o contra</h1>
            <div className="flex justify-between mt-2">
                <textarea type="text" className="border-2 border-blue-400 text-white rounded-b-md resize-none overflow-hidden h-10 w-11/12 pl-2 pr-2 pt-1 mr-2 mb-8 bg-gray-900" placeholder="Es muy costoso" maxLength={80}/>
                <div className="ml-2 mr-2">
                    <NumberInput></NumberInput>
                </div>
                <div className="flex flex-row justify-center">
                    <button className="text-white bg-green-500 focus:outline-none w-auto cursor-pointer rounded-l-md font-bold p-1 pl-2 pr-2 h-10 border-1 border-black hover:border-1 hover:border-white transition-colors duration-300">PRO</button>
                    <button className="text-white bg-red-500 focus:outline-none w-auto cursor-pointer rounded-r-md font-bold p-1 pr-2 h-10 border-1 border-black hover:border-1 hover:border-white transition-colors duration-300">CONTRA</button>
                </div>
            </div>
        </div>
    )
}

export default AddFactor;