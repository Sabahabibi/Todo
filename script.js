const taskName = document.getElementById("taskName").value;
const priority = document.getElementById("priority").value;
const tableData = document.getElementById("tableData");
const form = document.getElementById("form");
const status = document.getElementById("status").value;
const baseurl = "https://67618d7346efb37323722400.mockapi.io/api/v1/";
async function getTask() {
  try {
    const response = await fetch(`${baseurl}tasks`);
    const data = await response.json();
    renderTask(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

getTask();

function renderTask(data) {
  tableData.innerHTML = "";
  tableData.innerHTML += data.map((toDo) => {
    return `
        <tr>
      <td>
 ${toDo.taskName}
      </td>
      <td>
${toDo.priority}
      </td>
      <td>
${toDo.status}
      </td>
      <td>
<button>👁️</button>
<button>❌</button>


      </td>
       </tr>`;
  });
}
form.addEventListener("submit", creatTodo());

async function creatTodo() {
  try {
    const response = await fetch(`${baseurl}tasks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        taskName,
        status,
        priority,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}
