import React from "react";

const Field = ({handleChange, handleBlur, values, errors, name, touched}) => {
  
    return (
        <>
            <input
                type={name}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
            />
            {errors[name] && touched[name] && (
                <div>
                    <span>
                        {errors[name]}
                    </span>
                </div>
            )}
            {/* {errors.email && touched.email ? errors.email:''} */}
        </>     
    )
}
export default Field;