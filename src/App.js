import "./styles.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const [state, setState] = useState({ records: [], lastId: 0 });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log("state", state);
    console.log("records", state.records);
    let records = state.records;
    let id = state.lastId + 1;
    records.push({ id: id, text: data.record });
    setState((prev) => ({ records: records, lastId: id }));
  };

  function editHandler(e) {
    e.preventDefault();
    console.log(state);
  }

  let rows = state.records.map((record) => (
    <tr key={record.id}>
      <th scope="row">{record.id}</th>
      <td>{record.text}</td>
      <td>
        <a href="" onClick={editHandler}>
          edit
        </a>
      </td>
      <td className="text-danger" style={{ cursor: "pointer" }}>
        X
      </td>
    </tr>
  ));
  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control m-2"
          {...register("record")}
          placeholder="add your record"
        />

        <input className="btn btn-success m-2" type="submit" />
      </form>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Record</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
