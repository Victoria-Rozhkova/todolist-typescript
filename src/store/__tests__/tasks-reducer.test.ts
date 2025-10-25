import {
    addTaskActionCreator, changeTaskActionCreator,
    changeTaskStatusActionCreator,
    removeTaskActionCreator
} from "@/store/tasks-action-creators";
import {addTodoListActionCreator, removeTodoListActionCreator} from "@/store/todolists-action-creators";
import { tasksReducer } from "@/store/tasks-reducer";
import { Task, Tasks } from "@/types/task/tasks.type";

test("correct task should be deleted from correct array", () => {
    const state: Tasks = {
        'todolistId1': [
            { id: '1', task: "CSS", isDone: false },
            { id: '2', task: "JS", isDone: true },
        ],
        'todolistId2': [
            { id: '1', task: "bread", isDone: false },
            { id: '2', task: "milk", isDone: true },
            { id: '3', task: "tea", isDone: false },
        ]
    };

    const action = removeTaskActionCreator('2', 'todolistId2')
    const expectedState = tasksReducer(state, action)

    expect(expectedState['todolistId1'].length).toBe(2);
    expect(expectedState['todolistId2'].length).toBe(2);
    expect(expectedState['todolistId2'].every((task: Task) =>task.id !== '2')).toBeTruthy()
    expect(expectedState['todolistId2'][1].id).toBe('3');
});

test("correct task should be added to correct array", () => {
    const state: Tasks = {
        'todolistId1': [
            { id: '1', task: "CSS", isDone: false },
            { id: '2', task: "JS", isDone: true },
        ],
        'todolistId2': [
            { id: '1', task: "bread", isDone: false },
            { id: '2', task: "milk", isDone: true },
            { id: '3', task: "tea", isDone: false },
        ]
    };

    const action = addTaskActionCreator('sugar', 'todolistId2')
    const expectedState = tasksReducer(state, action)

    expect(expectedState['todolistId1'].length).toBe(2);
    expect(expectedState['todolistId2'].length).toBe(4);
    expect(expectedState['todolistId2'][0].id).toBeDefined();
    expect(expectedState['todolistId2'][0].task).toBe('sugar');
    expect(expectedState['todolistId2'][0].isDone).toBe(false);
});

test("status of specified task should be changed", () => {
    const state: Tasks = {
        'todolistId1': [
            { id: '1', task: "CSS", isDone: false },
            { id: '2', task: "JS", isDone: true },
        ],
        'todolistId2': [
            { id: '1', task: "bread", isDone: false },
            { id: '2', task: "milk", isDone: true },
            { id: '3', task: "tea", isDone: false },
        ]
    };

    const action = changeTaskStatusActionCreator('todolistId2', '1', true)
    const expectedState = tasksReducer(state, action)

    expect(expectedState['todolistId2'].length).toBe(3);
    expect(expectedState['todolistId2'][2].isDone).toBeFalsy()
    expect(expectedState['todolistId2'][0].isDone).toBeTruthy()
});

test("title of specified task should be changed", () => {
    const state: Tasks = {
        'todolistId1': [
            { id: '1', task: "CSS", isDone: false },
            { id: '2', task: "JS", isDone: true },
        ],
        'todolistId2': [
            { id: '1', task: "bread", isDone: false },
            { id: '2', task: "milk", isDone: true },
            { id: '3', task: "tea", isDone: false },
        ]
    };

    const action = changeTaskActionCreator('todolistId2', '1', 'sweets')
    const expectedState = tasksReducer(state, action)

    expect(expectedState['todolistId2'].length).toBe(3);
    expect(expectedState['todolistId2'][0].task).toBe('sweets')
    expect(expectedState['todolistId1'][0].task).toBe('CSS')
});

test("new property with new array be added when new todolist is added", () => {
    const state: Tasks = {
        'todolistId1': [
            { id: '1', task: "CSS", isDone: false },
            { id: '2', task: "JS", isDone: true },
        ],
        'todolistId2': [
            { id: '1', task: "bread", isDone: false },
            { id: '2', task: "milk", isDone: true },
            { id: '3', task: "tea", isDone: false },
        ]
    };

    const newTodoListTitle = "New todoList";


    const expectedState = tasksReducer(state, addTodoListActionCreator(newTodoListTitle));

    const todolistKeys = Object.keys(expectedState)
    const newKey = todolistKeys.find(key => key !== 'todolistId1' && key !== 'todolistId2');

    if(!newKey) {
        throw Error("new key is missing")
    }

    expect(todolistKeys.length).toBe(3);
    expect(expectedState[newKey]).toEqual([]);
});

test("property with todolistId should be deleted", () => {
    const state: Tasks = {
        'todolistId1': [
            { id: '1', task: "CSS", isDone: false },
            { id: '2', task: "JS", isDone: true },
        ],
        'todolistId2': [
            { id: '1', task: "bread", isDone: false },
            { id: '2', task: "milk", isDone: true },
            { id: '3', task: "tea", isDone: false },
        ]
    };

    const expectedState = tasksReducer(state, removeTodoListActionCreator('todolistId2'));

    const keys = Object.keys(expectedState)

    expect(keys.length).toBe(1);
    expect(expectedState['todolistId2']).toBeUndefined();
});
