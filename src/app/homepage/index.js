import React, { PureComponent } from 'react';
// import Counter from './counter';
// import RequestMaker from './requestMaker';
import styles from './styles.module.scss';

class Homepage extends PureComponent {
    render () {
        return (
            <div className={`${styles['title-text']} ${styles.rotating}`}>
                <img src="/app/homepage/MMC_Logo1.png" alt='bantz'/>
            </div>
        );
    }
}
export default Homepage;
