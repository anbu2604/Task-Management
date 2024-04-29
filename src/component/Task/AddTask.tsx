import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { connect } from 'react-redux';
import { AddTaskProps, TaskFormData } from '../../types';
import { handleChange } from '../../redux/action';

const AddTask: React.FC<AddTaskProps> = ({ isOpen, onClose, onAdd, handleChange }) => {

  const unique_id = uuid();

  const [formData, setFormData] = useState<TaskFormData>({
    id: unique_id,
    title: '',
    description: '',
    dueDate: '',
    priority: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    onAdd(formData);
    setFormData({
      id: '',
      title: '',
      description: '',
      dueDate: '',
      priority: ''
    });
  };

  return (
    <div id="addEmployeeModal" className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">Add Task</h4>
              <button type="button" className="close" onClick={onClose}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" name="title" value={formData.title} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" name="description" value={formData.description} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input type="date" className="form-control" name="dueDate" value={formData.dueDate} onChange={handleInputChange} required />
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
              <button type="submit" className="btn btn-success">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state: any) => ({
  state: state.task.state
});

const mapDispatchToProps = {
  handleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
