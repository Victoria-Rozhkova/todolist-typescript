import { tasksReducer } from "@/store/tasks-reducer";
import { addTodoListActionCreator } from "@/store/todolists-action-creators";
import { Tasks } from "@/types/task/tasks.type";
import { TodoList } from "@/types/todolist/todolist.type";
import { todoListsReducer } from "@/store/todolists-reducer";

test("ids should be equals", () => {
    const tasksState: Tasks = {};
    const todolistsState: TodoList[] = [];

    const action = addTodoListActionCreator('new todolist')

    const expectedTasksState = tasksReducer(tasksState, action);
    const expectedTodolistsState = todoListsReducer(todolistsState, action);

    const keys = Object.keys(expectedTasksState);
    const idFromTasks = keys[0]
    const idFromTodolists = expectedTodolistsState[0].id

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toBe(action.todolistId);
});
