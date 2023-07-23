export default function ListeTodoComponent() {
  const today = new Date();
  const targatedate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const todos = [
    { id: 1, desc: "learn js", completed: false, targetdate: targatedate },
    { id: 2, desc: "learn flutter", completed: false, targetdate: targatedate },
    { id: 3, desc: "learn web", completed: false, targetdate: targatedate },
    { id: 4, desc: "learn aws", completed: false, targetdate: targatedate },
  ];
  return (
    <div className="ListeTodoComponent container">
      <table className="table  table-bordered table-hover ">
        <thead>
          <tr className="table-primary">
            <th>Id</th>
            <th>Desc</th>
            <th>Completed</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <th>{todo.id}</th>
              <th>{todo.desc}</th>
              <th>{todo.completed.toString()}</th>
              <th>{todo.targetdate.toDateString()}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
