const container = document.getElementById("app");

function Soma(props){
    const [contador, setContador] = React.useState(0);

    function somar10(){
       setContador(contador + 10);
       console.log(contador);
    }

    return(
        <div>
            <h3>{props.titulo}</h3>
            Votos: {contador} <br/>
            <button onClick={somar10}>Somar 10</button>
        </div>
    );
}

function App(){
    return(
        <div>
            <Soma titulo="Quantidade de Ovos de Páscoa"/>
        </div>
    );
}

ReactDOM.render(App(), container);