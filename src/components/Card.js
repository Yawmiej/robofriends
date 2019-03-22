import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 bw3 grow tc shadow-5 crd">
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;