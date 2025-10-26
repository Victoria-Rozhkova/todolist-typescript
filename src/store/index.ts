import { combineReducers, legacy_createStore as createStore } from "redux";
import { tasksReducer } from "@/store/tasks-reducer";
import { todoListsReducer } from "@/store/todolists-reducer";

const rootReducer = combineReducers({
    todolists: todoListsReducer,
    tasks: tasksReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store
