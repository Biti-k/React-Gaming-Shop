import { useState } from "react"

export const Filter = (props) => {

    return (
        <>
            {
                props.genre != '' ?
                <h3>Seeing {props.genre.toLowerCase()} games</h3>
                :
                <h3>Seeing all games</h3>
            }
            
            <div className="col-md-6">
                <span className="fa-lg">Filter: Genre</span>

                <div className="form-check mt-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="black" onClick={() => props.setGenre("")} checked={props.genre == ''} />
                    <label className="form-check-label" htmlFor="inlineRadio1">ALL</label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="rpg" onClick={() => props.setGenre("RPG")}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">RPG</label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Action" onClick={() => props.setGenre("Action")} />
                    <label className="form-check-label" htmlFor="inlineRadio3">ACTION</label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="adventure" onClick={() => props.setGenre("Adventure")}/>
                    <label className="form-check-label" htmlFor="inlineRadio4">ADVENTURE</label>
                </div>
            </div>
        </>
    )
}