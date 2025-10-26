export enum FilterEnum {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export enum FilterTitleEnum {
  ALL = "All",
  ACTIVE = "Active",
  COMPLETED = "Completed",
}

export type TodoList = { id: string; title: string; filter: FilterEnum };
