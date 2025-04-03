import { useState } from "react";
import "./App.css";
import { useReducer } from 'react';
import MyContextComponent  from "./components/usecontext";
import { CounterUI, ActionForm} from "./components/useState";


interface State {
   count: number
};

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}


const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Jane" },
];

function AdminPanel() {
  return <div>Admin Panel</div>;
}

type ButtonProps = {
  name: string;
};

function MyButton({ name }: ButtonProps) {
  return <button>{name}</button>;
}
const listProducts = [
  { id: 1, name: "fruit", description: "fruit description", price: 100 },
  {
    id: 2,
    name: "vegetable",
    description: "vegetable description",
    price: 200,
  },
  { id: 3, name: "meat", description: "meat description", price: 300 },
  { id: 4, name: "fish", description: "fish description", price: 400 },
];

const ListProductsItem = listProducts.map((product) => {
  return (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
});
function App() {
  const [count, setCount] = useState(0);

  const [isloggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [enable, setEnable] = useState<boolean>(false);
  type status = "loading" | "success" | "error";
  const [status, setStatus] = useState<status>('loading');

  // autre exemple
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 2 });
  const reset = () => dispatch({ type: "reset" });


  return (
    <>
      <CounterUI />
      <ActionForm />
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={() => setCount(count - 1)}>{count}</button>

        {users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
        {isloggedIn ? <AdminPanel /> : <div>Login</div>}
        {isloggedIn && <AdminPanel />}
        <button
          onClick={() =>
            isloggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
          }
        >
          {isloggedIn ? "Logout" : "Login"}
        </button>
        {enable && <div>Enable</div>}
        <button onClick={() => setEnable(!enable)}>Enable</button>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'success' && <div>Success</div>}
        {status === 'error' && <div>Error</div>}

        <button onClick={() => status==='loading' ? setStatus("success"): setStatus('error')}>Loading</button>
        <MyButton name="Submit" />
      </div>

      <div>{ListProductsItem}</div>

      {/* faire un compteur */}
      <p>Compteur: {state.count}</p>
      <button onClick={addFive}>Ajouter 2</button>
      <button onClick={reset}>Réinitialiser</button>
      <MyContextComponent />
    </>
  );
}

export default App;
