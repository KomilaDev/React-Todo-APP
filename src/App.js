import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import {Header} from "./Components/Header/header.jsx"
import { Footer } from "./Components/Footer/footer.jsx";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState("O'rtacha");
  const [price, setPrice] = useState();
  const [task, setTask] = useState([]);

  console.log(value);
  console.log(data);
  console.log(price);

  const addItem = () => {
    const taskName = {
      id: uuidv4(),
      product: value,
      task: data,
      price: price,
    };
    if (
      value.trim().length === 0 ||
      data.trim().length === 0 ||
      price.trim().length === 0
    ) {
      toast.error("PLEASE COMPLETE ALL", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    } else {
      setTask([...task, taskName]);
      setData("");
      setPrice("");
      setValue("");
      toast.success("TASKS SUCCSESSFULLY ADDED", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }
  };
  const deleteBtn = (id) => {
    const resultTask = task.filter((element) => {
      return element.id !== id;
    });
    setTask(resultTask);
  };

  return (
    <div className="App container">
      <ToastContainer />
        <Header/>
        <h1 className="mx-auto text-success py-3">Enter a product</h1>
      <div className="box">
        <div className="">
          <input
            className="form-control mb-3 shadow w-50"
            type="text"
            placeholder="Enter a product..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <select
            className="form-control mb-3 shadow w-50"
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          >
            <option value="Big">Big</option>
            <option value="Average">Average</option>
            <option value="Small">Small</option>
          </select>
        </div>
        <div>
          <input
            className="form-control mb-3 shadow w-50"
            type="number"
            placeholder="Enter the price..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            addItem();
          }}
          className="btn btn-success"
        >
          ADD TASK
        </button>
      </div>

      <table class="table mt-5 w-50">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {task.length > 0 ? (
            task.map((e, i) => {
              return (
                <>
                  <tr key={e.id}>
                    <th scope="row">{i}</th>
                    <td>{e.product}</td>
                    <td>{e.task}</td>
                    <td>{e.price}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteBtn(e.id)
                          toast.info("TASK DELETED", {
                            position: "bottom-left",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            })
                          }}
                        className="btn btn-danger"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <p className="text-danger">NOT FOUND!</p>
          )}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
}

export default App;