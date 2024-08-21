import PropTypes from 'prop-types'


const Button = ({ className = "", children, ...rest }) => {
    return (
        <button className={`button ${className}`} {...rest}>
            <b className="log-in1">
                {children}
            </b>
        </button>
    )
}

export default Button;

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    disabled: false
}