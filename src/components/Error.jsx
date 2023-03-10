import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.css'

const Error =({message})=>(
    <div className={`${styles.error}alert position-absolute`} role="alert">
        {message}

    </div>
);
// if any string error available then show this
Error.propTypes={
    message:PropTypes.string,
};
// if not available then default props for showing error message
Error.deafultProps={
    message:'An error occurred',
}

export default Error