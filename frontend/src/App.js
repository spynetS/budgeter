import Home from './Pages/Home.js';
import Mobile from './Components/NavBar/Mobile.js';
import Panel from './Components/Panel.js';
import React, { useState } from 'react';
import AddPage from './Pages/AddPage.js';
import AddCategoryPage from './Pages/AddCategory.js';

function Page(props){
    if(props.pagenumber=="1")
        return <Home></Home>;
    else if(props.pagenumber=="0")
        return <AddCategoryPage/>;
    else if(props.pagenumber=="2")
        return <AddPage></AddPage>;
    return <Home></Home>;
}


function App() {
    const[page,setPage] = useState(1);



    return (
    <div className="bg-gradient-to-r from-[#56FF7B] to-[#704DD2] h-screen w-screen">
        <Page pagenumber={page} ></Page>
        <div className="absolute w-full  bottom-0">
            <Mobile getPage={e=>{setPage(e);console.log(e)}} ></Mobile>
        </div>
      </div>
  );
}

export default App;
