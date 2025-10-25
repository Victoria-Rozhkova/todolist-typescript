export type Task = {
    id: string;
    task: string;
    isDone: boolean;
};

export type Tasks = {
    [key: string]: Task[];
};
