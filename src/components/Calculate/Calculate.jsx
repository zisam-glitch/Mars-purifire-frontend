import "./Calculate.css";

function App() {
  function calculate() {
    var num1, num2, num3, res;

    num1 = Number(document.getElementById("length").value);
    num2 = Number(document.getElementById("width").value);
    num3 = Number(document.getElementById("height").value);
    res = num1 * num2 * num3;
    document.formcalcvolume.volume.value = res.toFixed(2);

    document.getElementById("tbl").innerHTML = "";

    if (res > 0) {
      var table = `<tr>
                      <td data-col-title="Name" class="tabledatastyle"><b>${"GEN S"}</b></td>
                      <td data-col-title="CADR (m3/h)">${180}</td>
                      <td data-col-title="Volume">${res.toFixed(2)}</td>
                      <td data-col-title="100% ACH">${(180 / res).toFixed(
                        2
                      )}</td>
                      <td data-col-title="50% ACH">${(90 / res).toFixed(2)}</td>
                  </tr>`;
      document.getElementById("tbl").innerHTML += table;

      var table = `<tr>
                      <td data-col-title="Name" class="tabledatastyle"><b>${"GEN X"}</b></td>
                      <td data-col-title="CADR (m3/h)">${727}</td>
                      <td data-col-title="Volume">${res.toFixed(2)}</td>
                      <td data-col-title="100% ACH">${(727 / res).toFixed(
                        2
                      )}</td>
                      <td data-col-title="50% ACH">${(727 / (res * 2)).toFixed(
                        2
                      )}</td>
                  </tr>`;
      document.getElementById("tbl").innerHTML += table;

      var table = `<tr>
                      <td data-col-title="Name" class="tabledatastyle"><b>${"GEN Y"}</b></td>
                      <td data-col-title="CADR (m3/h)">${633}</td>
                      <td data-col-title="Volume">${res.toFixed(2)}</td>
                      <td data-col-title="100% ACH">${(633 / res).toFixed(
                        2
                      )}</td>
                      <td data-col-title="50% ACH">${(633 / (res * 2)).toFixed(
                        2
                      )}</td>
                  </tr>`;
      document.getElementById("tbl").innerHTML += table;

      var table = `<tr>
                      <td data-col-title="Name" class="tabledatastyle"><b>${"GEN Z"}</b></td>
                      <td data-col-title="CADR (m3/h)">${1156}</td>
                      <td data-col-title="Volume">${res.toFixed(2)}</td>
                      <td data-col-title="100% ACH">${(1156 / res).toFixed(
                        2
                      )}</td>
                      <td data-col-title="50% ACH">${(1156 / (res * 2)).toFixed(
                        2
                      )}</td>
                  </tr>`;
      document.getElementById("tbl").innerHTML += table;

      clearForm();
    } else reset();
  }
  function clearForm() {
    document.getElementById("length").value = null;
    document.getElementById("height").value = null;
    document.getElementById("width").value = null;
  }

  function reset() {
    document.getElementById("length").value = null;
    document.getElementById("height").value = null;
    document.getElementById("width").value = null;
    document.getElementById("volume").value = null;

    document.getElementById("tbl").innerHTML = "";
  }

  return (
    <div className="App">
      <>
        <div className="boddy">
          <div className="total">
            <div className="cadr-info">
              <form name="formcalcvolume" id="form1" className="classicForm">
                <h3 style={{ color: "rgb(64,141,194)" }}>Room Volume</h3>
                <p>
                  <label>
                    <b>Length (m)</b>
                    <b style={{ color: "red" }}>*</b>
                  </label>
                  <input type="text" id="length" />
                </p>
                <p>
                  <label>
                    <b>Width (m)</b>
                    <b style={{ color: "red" }}>*</b>
                  </label>
                  <input type="text" id="width" />
                </p>
                <p>
                  <label>
                    <b>Height (m)</b>
                    <b style={{ color: "red" }}>*</b>
                  </label>
                  <input type="text" id="height" />
                </p>
                <p>
                  <button type="button" onClick={calculate}>
                    Calculate
                  </button>
                </p>
                <p>
                  <button type="button" onClick={reset}>
                    Reset
                  </button>
                </p>
                <p>
                  <label>Room Volume (m3)</label>
                  <input type="text" id="volume" />
                </p>
              </form>
            </div>
            <div className="cadr-info">
              <h3 style={{ color: "rgb(64,141,194)" }}>
                <b>Air Changes per Hour</b>
              </h3>
              <form className="cadr-form">
                <table
                  id="cadrtable"
                  className="cadr-table"
                  style={{ width: "100%" }}
                >
                  <thead className="tableheading">
                    <tr>
                      <th
                        scope="col"
                        style={{ backgroundColor: "#1b75bc", color: "white" }}
                      >
                        <b>Name</b>
                      </th>
                      <th
                        scope="col"
                        style={{ backgroundColor: "#1b75bc", color: "white" }}
                      >
                        <b>CADR(m3/h)</b>
                      </th>
                      <th
                        scope="col"
                        style={{ backgroundColor: "#1b75bc", color: "white" }}
                      >
                        <b>Room Volume</b>
                      </th>
                      <th
                        scope="col"
                        style={{ backgroundColor: "#1b75bc", color: "white" }}
                      >
                        <b>100% ACH</b>
                      </th>
                      <th
                        scope="col"
                        style={{ backgroundColor: "#1b75bc", color: "white" }}
                      >
                        <b>50% ACH</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="tbl" className="tablecontent" />
                </table>
              </form>
              <h4 id="emaillink" style={{ color: "rgb(64,141,194)" }}>
                For a more detailed report, contact us on <br />
                enquiries@marspurifier.com
              </h4>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
