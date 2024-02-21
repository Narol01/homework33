import { useDispatch } from "react-redux";
import ProducktList from "./components/ProducktList";
import { RootDispatch } from "./store/store";
import { loadProduct } from "./store/slice/sliceProduckt";

function App() {
  const dispatch = useDispatch<RootDispatch>();
  return (
    <div >
 <ProducktList/>
 <button onClick={() =>dispatch(loadProduct())}>Download</button>
    </div>
  );
}

export default App;
