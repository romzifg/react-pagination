import { useState, useEffect } from "react";
import { generateData } from "./helpers/generateData";
import { listData } from "./helpers/datas";
import "./app.css";

const App = () => {
  const [inititalPage, setInitialPage] = useState(5);
  const [employeeData, setEmployeeData] = useState([]);

  const convertData = () => {
    const data = generateData(listData);
    setEmployeeData(data);
  };

  useEffect(() => {
    convertData();
  }, []);

  const onClickAddOne = () => {
    if (inititalPage >= 5) {
      setInitialPage(inititalPage + 1);
    }
  };

  const onClickRemoveOne = () => {
    if (inititalPage > 5) {
      setInitialPage(inititalPage - 1);
    }
  };

  const onClickNext = () => {
    if (inititalPage <= employeeData.length) {
      setInitialPage(inititalPage + 5);
    }
  };

  const onCLickPrev = () => {
    if (inititalPage > 5) {
      setInitialPage(inititalPage - 5);
    }
  };

  const onClickLast = () => {
    setInitialPage(employeeData.length);
  };

  const onClickFirst = () => {
    setInitialPage(5);
  };

  return (
    <div className="body-screen">
      <div className="content">
        <h1>Simple Table Pagination</h1>
        <div className="table-card">
          <table className="table">
            <thead>
              <tr>
                <td>NO</td>
                <td>ID</td>
                <td>Name</td>
                <td>Birthday</td>
                <td>Age</td>
              </tr>
            </thead>
            <tbody>
              {employeeData
                .slice(inititalPage - 5, inititalPage)
                .map((el, key) => (
                  <tr key={key}>
                    <td>{el.no}</td>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el?.birthday}</td>
                    <td>{el.age}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="card-button">
          <button className="buttom-btn" onClick={onClickFirst}>{`|<`}</button>
          <button className="buttom-btn" onClick={onCLickPrev}>{`<<`}</button>
          <button
            className="buttom-btn"
            onClick={onClickRemoveOne}
          >{`<`}</button>
          <button className="buttom-btn" onClick={onClickAddOne}>{`>`}</button>
          <button className="buttom-btn" onClick={onClickNext}>{`>>`}</button>
          <button className="buttom-btn" onClick={onClickLast}>{`>|`}</button>
        </div>
      </div>
    </div>
  );
};

export default App;
