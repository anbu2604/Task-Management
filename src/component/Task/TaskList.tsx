import React, { useState } from 'react';
import moment from 'moment';
import { TaskFormData } from '../../types';


interface TaskTableProps {
    tasks: any[];
    setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedEmployee: React.Dispatch<React.SetStateAction<TaskFormData | null>>;
    setDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskList: React.FC<TaskTableProps> = ({ tasks, setEditModalOpen, setDeleteModalOpen, setSelectedEmployee }) => {

    const handleEdit = (task: any) => {
        setSelectedEmployee(task);
        setEditModalOpen(true);
    };

    const handleDelete = () => {
        setDeleteModalOpen(true);
    };

    return (
        <div className="container-xl">
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{moment(task.dueDate).format('DD/MM/YYYY')}</td>
                                <td>{task.priority}</td>
                                <td>
                                    <a href={`#editEmployeeModal-${task.id}`} onClick={() => handleEdit(task)} className="edit" data-toggle="modal">
                                        <i className="material-icons" data-toggle="tooltip" title="Edit">
                                            
                                        </i>
                                    </a>
                                    <a href={`#deleteEmployeeModal-${task.id}`} onClick={handleDelete} className="delete" data-toggle="modal">
                                        <i className="material-icons" data-toggle="tooltip" title="Delete">
                                            
                                        </i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="clearfix">
                    <div className="hint-text">
                        Showing <b>{tasks.length}</b> out of <b>{tasks.length}</b> entries
                    </div>
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a href="#">Previous</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link">
                                Next
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
