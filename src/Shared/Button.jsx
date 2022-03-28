import PropTypes from "prop-types";

const Button = ({children, version, type, isDisabled }) => {
    return <button
        disabled={isDisabled}
        type={type}
        className={`btn btn-${version}`}
    > {children} </button>
}

Button.defaultPtops = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.protoType = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button