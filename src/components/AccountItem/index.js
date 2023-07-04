import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/30cb78c22703e88b2d94d657ddcdca4d~c5_100x100.jpeg?x-expires=1688641200&x-signature=Xhv6lSRVFRh3S2fdsOnx4w%2B%2FE3M%3D"
                alt="Account name"
            />
            <div className={cx('information')}>
                <h4 className={cx('name')}>
                    Satomi Koutarou
                    <span>
                        <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />
                    </span>
                </h4>
                <span className={cx('username')}>satomikoutarou</span>
            </div>
        </div>
    );
}

export default AccountItem;
