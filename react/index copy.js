const container = document.getElementById("app");

/*
const titulo = document.createElement("h1");
titulo.innerHTML = "Esse titulo foi criado com JS";
container.appendChild(titulo);
*/

function Titulo(props){
    return (
        <div>
            <h1>{props.texto}</h1>
            <h3>Esse título foi criado com React</h3>
        </div>
    );
}

function Titulos(){
    return(
        <div>
            <Titulo texto="Eu sou o primeiro título"></Titulo>
            <Titulo texto="Eu venho depois do primeiro título"></Titulo>
            <Titulo texto="Eu sou o último título"></Titulo>
        </div>
    );
}

ReactDOM.render(Titulos(), container);