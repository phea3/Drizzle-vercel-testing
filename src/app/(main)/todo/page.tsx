import { getData } from "@/actions/todoAction";
import Todos from "@/components/todos";

const TodoView = async () => {
  const data = await getData();
  // console.log(data);

  return <Todos todos={data} />;
};

export default TodoView;
