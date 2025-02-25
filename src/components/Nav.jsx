import Button from "./Button";

function Nav(){
    return(
        <div className="w-fit ml-45 mt-5">
            <div className="flex space-x-5">
                <Button>New Board</Button>
                <Button>Clean Board</Button>
                <Button>Share Board</Button>
            </div>
        </div>
    );
}

export default Nav;