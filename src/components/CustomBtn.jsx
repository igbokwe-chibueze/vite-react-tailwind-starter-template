import PropTypes from 'prop-types';

const CustomBtn = ({
  classProps,
  children,
  label,
  showLabelOnHover,
  iconURL,
  backgroundStyle,
  textStyle,
  borderStyle,
  focusStyle,
  btnType,
  onBtnClick,
  disabled,
}) => {
  const handleClick = () => {
    if (onBtnClick && !disabled) {
      onBtnClick();
    }
  };

  return (
    <button
      className={`inline-flex items-center justify-center px-5 py-3 rounded-lg transition-colors duration-700 ease-in-out
        disabled:bg-[#81926D] disabled:opacity-90 disabled:cursor-not-allowed ${classProps}
        ${` bg-skin-fill-accent hover:bg-skin-fill-accent-hover ${backgroundStyle} `}
        ${` text-base font-medium text-center text-skin-inverted ${textStyle} `}
        ${` border border-skin-border ${borderStyle} `} 
        ${` focus:ring-4 focus:ring-skin-focus2 ${focusStyle} `}
      `}
      type={btnType || "button"}
      onClick={handleClick}
      disabled={disabled}
    >
      <p className={showLabelOnHover ? " hidden group-hover:flex  " : ""}>
        {label || 'See More'}
      </p>

      {/* Use the iconUrl if i want to use an svg icon */}
      {iconURL && (
        <img
          src={iconURL}
          alt='icon'
          className=" ml-2 w-5 h-5 rounded-full bg-skin-fill-primary "
        />
      )}
      
      {/* Use this instead of iconUrl if i want to use a jsx icon component */}
      {children}
    </button>
  );
};

CustomBtn.propTypes = {
  classProps: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  showLabelOnHover: PropTypes.bool,
  iconURL: PropTypes.string,
  backgroundStyle: PropTypes.string,
  textStyle: PropTypes.string,
  borderStyle: PropTypes.string,
  focusStyle: PropTypes.string,
  btnType: PropTypes.oneOf(['button', 'submit', 'reset']),
  onBtnClick: PropTypes.func,
  disabled: PropTypes.bool,
};

CustomBtn.defaultProps = {
  classProps: '',
  showLabelOnHover: false,
  btnType: 'button',
  disabled: false,
};

export default CustomBtn;
