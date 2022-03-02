import Panel from '../Components/Panel.js';

function Home(){


    return(
        <div className="flex flex-col p-5 gap-5" >
            <Panel inner={
                <div className="flex flex-col p-4 gap-5" >
                    <h1 className="text-2xl text-white font-bold ">Nuvarande 8000 kr</h1>
                    <h1 className="text-lg text-white font-bold ">Ingoende saldo 9000 kr</h1>
                    <h1 className="text-lg text-white font-bold ">Utgoende saldo 13000 kr</h1>

                </div>
            }>
            </Panel>
       </div>
    );

}

export default Home;
