import React, { useMemo, useState } from 'react';
import { TaskList } from '../../component';
import AddTask from '../../component/Task/AddTask';
import EditTask from '../../component/Task/EditTask';
import DeleteTask from '../../component/Task/DeleteTask';
import { TaskFormData } from '../../types';

const TaskManagement: React.FC = () => {
    const [tasks, setTasks] = useState<TaskFormData[]>([]);

    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<TaskFormData | null>(null);

    const [filterPriority, setFilterPriority] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');
    const [sortBy, setSortBy] = useState<'title' | 'dueDate' | 'priority'>('title');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState('');


    const filteredTasks = useMemo(() => {
        if (filterPriority === 'All') {
            return tasks;
        } else {
            return tasks.filter(task => task.priority === filterPriority);
        }
    }, [tasks, filterPriority]);

    const sortedTasks = useMemo(() => {
        return filteredTasks.sort((a, b) => {
            const aValue = a[sortBy];
            const bValue = b[sortBy];
            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    }, [filteredTasks, sortBy, sortOrder]);

    const searchedTasks = useMemo(() => {
        if (!searchQuery) return sortedTasks;
        const lowercaseQuery = searchQuery.toLowerCase();
        return sortedTasks.filter(
            task =>
                task.title.toLowerCase().includes(lowercaseQuery) ||
                task.description.toLowerCase().includes(lowercaseQuery)
        );
    }, [sortedTasks, searchQuery]);

    const handleAddTask = (task: TaskFormData) => {
        setTasks([...tasks, task]);
        setAddModalOpen(false);
    };

    const handleEditTask = (editedEmployee: TaskFormData) => {
        const updatedEmployees = tasks.map(task =>
            task.id === editedEmployee.id ? editedEmployee : task
        );
        setTasks(updatedEmployees);
        setEditModalOpen(false);
    };

    const handleDeleteTask = () => {
        const updatedEmployees = tasks.filter(tasks => !tasks.id);
        setTasks(updatedEmployees);
        setDeleteModalOpen(false);
    };

    return (
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>
                                        Task Management
                                    </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a
                                        onClick={() => setAddModalOpen(true)}
                                        className="btn btn-success"
                                        data-toggle="modal"
                                    >
                                        <i className="material-icons"></i>{" "}
                                        <span>Add New Employee</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Task filters */}

                        <div className="col-sm-3 form-group" >
                            <select className="form-select" aria-label="Default select example" value={filterPriority} onChange={(e) => setFilterPriority(e.target.value as any)}>
                                <option value="All">All Priorities</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>

                        </div>
                        <div className="col-sm-3 " >
                            <select className="form-select" aria-label="Default select example" value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
                                <option value="title">Title</option>
                                <option value="dueDate">Due Date</option>
                                <option value="priority">Priority</option>
                            </select>

                        </div>
                        <div className="col-sm-3" >
                            <select className="form-select" aria-label="Default select example" value={sortOrder} onChange={(e) => setSortOrder(e.target.value as any)}>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                        <div className="col-sm-3" >
                            <input type="text" className="input" id="myInput" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search for title and descriptoin.." title="Type in a title"></input>
                        </div>
                        <TaskList
                            tasks={searchedTasks}
                            setEditModalOpen={setEditModalOpen}
                            setSelectedEmployee={setSelectedEmployee}
                            setDeleteModalOpen={setDeleteModalOpen}
                        />
                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <AddTask
                isOpen={isAddModalOpen}
                onClose={() => setAddModalOpen(false)}
                onAdd={handleAddTask}
            />
            {/* Edit Modal HTML */}
            {isEditModalOpen && (
                <EditTask
                    isOpen={isEditModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    task={selectedEmployee!}
                    onEdit={handleEditTask}
                />
            )}
            {/* Delete Modal HTML */}
            {isDeleteModalOpen && (
                <DeleteTask
                    isOpen={isDeleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onDelete={handleDeleteTask}
                />
            )}
        </>

    );
};

export default TaskManagement;
