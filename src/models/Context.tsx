import { createContext, useContext, type ReactNode, useReducer } from 'react';
import type { Task } from '../models/Task';

// Action type definitions

type TaskAction = 

  {type: "NEW"; payload: Task}
  |{type: "LIST"; payload: Task[]}
  |{type: "UPDATE"; payload: Task}
  |{type: "REMOVE"; payload: number}
  |{type: "INDEX"; payload: number}

// State setup and default 

interface TaskState  {
    tasks: Task[];
    i: number;
};  

const stateInit = {
    tasks: [],
    i: 1,
};

const taskReduce = (
    state: TaskState,
    action: TaskAction,
): TaskState => {
    switch(action.type) {
        case "NEW":
            return {...state, tasks: [...state.tasks, action.payload]};
        case "LIST":
            return {...state};
        case "UPDATE":{
            const newArray:Task[] = state.tasks.map((taskItem) => taskItem.id === action.payload.id?action.payload:taskItem);
            return {...state, tasks: newArray};
        };
        case "REMOVE":{
            const newArray:Task[] = state.tasks.filter((taskItem) => taskItem.id !== action.payload);
            return {...state, tasks: newArray};
        };
        case "INDEX":{
            return {...state, i: action.payload};
        };
        default:
            return {...state};
    };
};

interface TaskContextType extends TaskState {
    dispatch: React.Dispatch<TaskAction>;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps{
    children: ReactNode;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(taskReduce, stateInit);

    return(
        <TaskContext.Provider value = {{...state, dispatch}}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = (): TaskContextType =>{
    const context = useContext(TaskContext);
    if(!context){
        throw new Error("useProductContext must be used within a ProductProvider");
    };
    return context;
};
