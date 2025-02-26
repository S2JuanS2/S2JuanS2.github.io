import Button from "./Button";

function Nav(){
    return(
        <div className="w-fit ml-5">
            <div className="flex flex-col space-y-2">
                <Button title="Compartir"></Button>
                <Button title="Limpiar todo"></Button>
                <Button title="Generar por IA"></Button>
            </div>
        </div>
    );
}

export default Nav;