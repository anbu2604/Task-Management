
export interface AddTaskProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (formData: TaskFormData) => void;
    handleChange: (args: any, args2: any, args3?: any, args4?: any) => void;
}

export interface EditTaskProps {
    isOpen: boolean;
    onClose: () => void;
    task: any | null;
    onEdit: (formData: TaskFormData) => void;
}

export interface DeleteTaskProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}
;
export interface TaskFormData {
    id?: string;
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    selected?: boolean;
}