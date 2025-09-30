const getItem = ()=>{
  const tasks = localStorage.getItem("tasks");

  return tasks?JSON.parse(tasks):[];
}

const setItem = items => {
  const itemsString = JSON.stringify(items)
  localStorage.setItem("tasks",itemsString)
}

export {getItem,setItem}