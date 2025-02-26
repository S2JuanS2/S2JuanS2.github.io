import Button from "./Button";

function Nav(){
    return(
        <div className="w-fit mt-5">
            <div className="flex space-x-5">
                <Button title="Nueva"></Button>
                <Button title="Borrar"></Button>
                <Button title="Compartir"></Button>
            </div>
        </div>
    );
}

export default Nav;