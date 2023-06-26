import React from 'react'

export default function Alert(props) {
    const Capitalized = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return (
        <div style={{ height: "50px" }}>
            {
                props.alert &&
                <div>
                    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                        <b>{Capitalized(props.alert.type)}! </b>{props.alert.msg}
                    </div>
                </div>
            }


        </div>
    )
}
