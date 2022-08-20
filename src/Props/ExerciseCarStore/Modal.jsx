import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {productModal} = this.props;
        return (
            //bs5-modal-default:
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modelId">
                    Launch
                </button>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{productModal.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <img src={productModal.img} alt="" className='w-100' />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
