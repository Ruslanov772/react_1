import PropType from 'prop-types';


const Header = ({text, bgColor, textColor}) => {
    const headerStyle = {
        background: bgColor,
        color: textColor,

    }
    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>)
}

//def text
Header.defaultProps = {
    text: 'FeedBack UL App',
    bgColor: 'rgba(0, 0, 0, 0.4)',
    textColor: '#ff6a95',
}
//typeOf elm
Header.propTypes = {
    text: PropType.string,
    bgColor: PropType.string,
    textColor: PropType.string,
}

export default Header;