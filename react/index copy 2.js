const container = document.getElementById("app");

function Votacao(props){

//  let contador = 0;
    const [contador, setContador] = React.useState(0);

    function votarMais(){
       setContador(contador + 1);
       console.log(contador);
    }

    function votarMenos(){
        setContador(contador - 1);
        console.log(contador);
    }

    return(
        <div>
            <h3>{props.titulo}</h3>
            Votos: {contador} <br/>
            <button onClick={votarMais}>+</button>
            <button onClick={votarMenos}>-</button>
        </div>
    );
}

function App(){
    return(
        <div>
            <Votacao titulo="hora de aventura - o filme"/>
            <Votacao titulo="bob esponja - o resgate de gary"/>
            <Votacao titulo="turma da monica e uma aventura no tempo"/>
            <Votacao titulo="lucas, um intruso no formigueiro"/>
        </div>
    );
}

ReactDOM.render(App(), container);