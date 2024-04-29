import React, { useState, useEffect } from 'react';
import { TaskFormData, EditTaskProps } from '../../types';


const EditTask: React.FC<EditTaskProps> = ({ isOpen, onClose, task, onEdit }) => {
    const [formData, setFormData] = useState<TaskFormData>({
        id: '',
        title: '',
        description: '',
        dueDate: '',
        priority: ''
    });

    useEffect(() => {
        if (task) {
            setFormData({
                id: task.id,
                title: task.title,
                description: task.description,
                dueDate: task.dueDate,
                priority: task.priority
            });
        }
    }, [task]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            priority: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onEdit(formData);
    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Task</h4>
                            <button type="button" className="close" onClick={onClose}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" name="description" value={formData.description} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Due Date</label>
                                <input type="date" className="form-control" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Priority</label>
                                <select id="priority" className="form-group form-select" aria-label="Default select example" value={formData.priority} onChange={handlePriorityChange}>
                                    <option value="All">All Priorities</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={onClose}>Cancel</button>
                            <button type="submit" className="btn btn-info">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditTask;
