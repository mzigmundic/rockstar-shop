import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text }) => {
    // fas fa-star - full star
    // far fa-star - empty star
    // fas fa-star-half-alt - half star

    return (
        <div className="rating">
            <span>
                <i
                    className={
                        value >= 1
                            ? "fas fa-star text-warning"
                            : value >= 0.5
                            ? "fas fa-star-half-alt text-warning"
                            : "far fa-star text-warning"
                    }
                ></i>
            </span>
            <span>
                <i
                    className={
                        value >= 2
                            ? "fas fa-star text-warning"
                            : value >= 1.5
                            ? "fas fa-star-half-alt text-warning"
                            : "far fa-star text-warning"
                    }
                ></i>
            </span>
            <span>
                <i
                    className={
                        value >= 3
                            ? "fas fa-star text-warning"
                            : value >= 2.5
                            ? "fas fa-star-half-alt text-warning"
                            : "far fa-star text-warning"
                    }
                ></i>
            </span>
            <span>
                <i
                    className={
                        value >= 4
                            ? "fas fa-star text-warning"
                            : value >= 3.5
                            ? "fas fa-star-half-alt text-warning"
                            : "far fa-star text-warning"
                    }
                ></i>
            </span>
            <span>
                <i
                    className={
                        value >= 5
                            ? "fas fa-star text-warning"
                            : value >= 4.5
                            ? "fas fa-star-half-alt text-warning"
                            : "far fa-star text-warning"
                    }
                ></i>
            </span>
            <span>{text && text}</span>
        </div>
    );
};

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default Rating;
