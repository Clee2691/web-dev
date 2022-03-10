import React, {useState} from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
    let[whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }

    return (
        <div className="d-flex justify-content-start">
            <div className="d-flex flex-column mt-2">
                <img className="image-prof me-0" src="../tuiter/images/elonprofpic.jpg"/>
            </div>

            <div className="d-flex flex-column flex-grow-1">
                <div className="row mb-2 mt-2 me-1 ms-2">
                    <textarea value={whatsHappening}
                        onChange={(event) =>
                        setWhatsHappening(event.target.value)}
                        className="text-area-custom border-color-gray"
                        placeholder="What's Happening?">
                    </textarea>
                </div>

                <div className="d-flex d-row mb-2 justify-content-between">
                    <div className="d-flex ms-2">
                        <span className="me-2"><i className="far fa-image text-primary"></i></span>
                        <span className="me-2"><i className="fas fa-chart-line text-primary"></i></span>
                        <span className="me-2"><i className="fas fa-smile text-primary"></i></span>
                        <span className="me-2"><i className="far fa-calendar text-primary"></i></span>
                    </div>
                    <button onClick={tuitClickHandler}
                        className="btn btn-primary me-1 rounded-pill">
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WhatsHappening;