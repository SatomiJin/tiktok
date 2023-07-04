import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disable = false,
    rightIcon,
    leftIcon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const _props = { onClick, passProps };

    //disable true
    if (disable) {
        //remove event listener  when button  is disable
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    if (to) {
        _props.to = to;
        Component = Link;
    } else if (href) {
        _props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        //dùng để custome riêng ở một file riêng biệt nào đó khác file global này
        [className]: className, //khi có className thì lấy giá trị của className làm key

        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
    });

    return (
        <Component className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}

            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Component>
    );
}

export default Button;
