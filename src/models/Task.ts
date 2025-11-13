export interface Task{
    id: number
    created: string;
    title: string;
    info?: string;
    status: "preliminary" | "in progress" | "completed";
    category: "personal" | "business";
    priority: "low" | "normal" | "high";
    duration?: number;
};
