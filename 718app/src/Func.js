// 2020, 7/18, am 11:10 by Kate Chen
// memory of usage 
// function
// useState()

/*constructor: Function components don’t need a constructor. 
You can initialize the state in the useState call. 
If computing the initial state is expensive, 
you can pass a function to useState.*/

/*function CountOnFunc() {
    const [c, setC] = useState(0);
    useEffect(() => {
      document.title = `You clicked ${c} times`;
    });
    return (
      <div>
        <p>You clicked {c} times</p>
        <button onClick={() => setC(c + 1)}>
          Click me
        </button>
      </div>
    );
  }

export default CountOnFunc;*/