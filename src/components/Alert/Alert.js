import React from 'react';
import styles from './Alert.css';

const AlertComponent = ({ message = 'this is an alert' }) => (
  <div className={styles.Alert}>
    <span>{message}</span>
  </div>
);

export default AlertComponent;
