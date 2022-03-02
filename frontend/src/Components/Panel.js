function Panel(props){
    return(
        <div className=" p-5 bg-white bg-opacity-25 rounded-lg  " >
            {props.inner}
        </div>

    );
}

export default Panel;
