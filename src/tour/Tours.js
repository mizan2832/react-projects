import React from "react";
import Tour from './Tour'

const Tours = ({ tours,removeTour }) => {
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
            </div>
            <div className="underLine"></div>
            <div>
                {tours.map((tour) => {
                    console.log(tour);
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div>
        </section>
    )
}

export default Tours;