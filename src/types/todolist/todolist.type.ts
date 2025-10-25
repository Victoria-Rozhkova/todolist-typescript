export enum FilterEnum {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export type TodoList = { id: string; title: string; filter: FilterEnum };
