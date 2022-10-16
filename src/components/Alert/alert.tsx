import { Alert } from 'antd';
import React from 'react';
import './alert.css'

interface prop {
    message: string
    type: "success" | "error" | "info" | "warning" | undefined
}
const AlertComponent: React.FC<prop> = ({message, type}) => (
    <>
      <div className='alert'>
        <Alert message={message} type={type} />
      </div>
    </>
)

export default AlertComponent;