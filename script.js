const taskName =document.getElementById("taskName")
const priority = document.getElementById("priority")
const tableData = document.getElementById("tableData")
const baseurl="https://67618d7346efb37323722400.mockapi.io/api/v1/"

async function getTask() {
    try {
        const response=await fetch(`${baseurl}tasks`)
        console.log(response)
        console.log(response.JSON)
        const data=await response.json()
        console.log(data)
        renderTask(data)
        return data

    } catch (error) {
        console.log(error)
    }
    
}

getTask();

function renderTask(data) {
    tableData.innerHTML=""
    tableData.innerHTML+=data.map(toDo => {
        return`
        <tr>
      <td>
 ${toDo.taskName}
      </td>
      <td>

      </td>
      <td>

      </td>
      <td>

      </td>
       </tr>`
    });
}
