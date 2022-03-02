function Button(props){
    return (
        <div onClick={props.onClick} className="h-full w-1/3 hover:opacity-0  bg-white opacity-25">
        </div>
    );
}


function Mobile(props){
    return(
        <div className="flex flex-row bg-white h-16  bg-opacity-25" >
            <Button onClick={e=>{props.getPage(0)}} ></Button>
            <Button onClick={e=>{props.getPage(1)}}></Button>
            <Button onClick={e=>{props.getPage(2)}}></Button>
        </div>
    );
}
export default Mobile;
