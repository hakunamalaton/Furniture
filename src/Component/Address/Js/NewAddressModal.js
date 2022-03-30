import React, { useState } from "react";
import Mapbox from "./Mapbox";

function NewAddressModal(children) {
    const [address, setAddress] = useState("");
    const handleAddress = (value) => {
        setAddress(value);
    };

    console.log(children);

    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                        </button>
                    </div>

                    <div className="modal-body">
                        <label for="fullname">Full Name: </label>
                        <input type="text" id="fullname" /> <br />
                        <label for="phone">Phone Number: </label>
                        <input type="text" id="phone" /> <br />
                        <label for="street">No. Street: </label>
                        <input type="text" id="street" />
                        <Mapbox handleAddress={(e) => handleAddress(e)} />
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewAddressModal;
