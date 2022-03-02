import Panel from '../Components/Panel.js';
import Button from '../Components/Button.js';
import Inputfield from '../Components/Inputfield.js';

function AddCategoryPage(props){
    return(
        <div className="flex flex-col p-5 gap-5" >
            <Panel inner={
                <div className="flex flex-col gap-2 items-center justify-center text-white " >
                    <h1>Name</h1>
                    <Inputfield value={e=>{console.log(e)}} ></Inputfield>
                    <h1>Discription</h1>
                    <Inputfield value={e=>{console.log(e)}} ></Inputfield>
                    <Button text="Add Category" ></Button>
                </div>
            } ></Panel>
        <Panel inner={
            <div></div>
        } ></Panel>
        </div>
    );
}

export default AddCategoryPage;
