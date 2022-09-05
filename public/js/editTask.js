const taskIDDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
const editFormDOM = document.querySelector(".single-task-form");
const formAlertDOM = document.querySelector(".form-alert");
const taskCompletedDOM = document.querySelector(".task-edit-completed");

const params = window.location.search;
const id = new URLSearchParams(params).get("id");
console.log(id);

/// 1つの特定のタスクを取得する。
const showTask = async () => {
  try {
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    // console.log(task);
    const { _id , completed , name } = task;
    taskIDDOM.textContent = _id;
    taskNameDOM.value = name;
    if(completed) {
        taskCompletedDOM.checked = true;
    }
  } catch (err) {
    console.log(err);
  }
};

showTask();

//タスクの編集


editFormDOM.addEventListener("submit" ,async (e) => {
    e.preventDefault();
    try {
        const taskName = taskNameDOM.value;
        taskCompleted = taskCompletedDOM.checked
        const {data:task} = await axios.patch(`api/v1/tasks/${id}`,{
            name:taskName,
            completed:taskCompleted
        });
        formAlertDOM.style.display = "block";
        formAlertDOM.textContent = "編集に成功しました。";
        formAlertDOM.classList.add("text-success");
    }catch(err) {
        console.log(err);
    }

    setTimeout(() => {
        formAlertDOM.style.display = "none";
        formAlertDOM.classList.remove("text-success");
      },3000);
});

//タスクの完了・未完了か判定
