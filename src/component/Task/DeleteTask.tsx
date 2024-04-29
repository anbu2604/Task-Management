import React from 'react';
import { DeleteTaskProps } from '../../types';

const DeleteTask: React.FC<DeleteTaskProps> = ({ isOpen, onClose, onDelete }) => {
    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={onDelete}>
                        <div className="modal-header">
                            <h4 className="modal-title">Delete Task</h4>
                            <button type="button" className="close" onClick={onClose}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete these Records?</p>
                            <p className="text-warning">
                                <small>This action cannot be undone.</small>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={onClose}>Cancel</button>
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeleteTask;
