import React, { useRef } from 'react';
import { PhoneNumberUtil, ShortNumberInfo, PhoneNumberFormat } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();
const shortInfo = ShortNumberInfo.getInstance();

function format(input) {
    try {
        let phoneNumber = phoneUtil.parseAndKeepRawInput(input, 'CN');
        let output = phoneUtil.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL);
        console.log(output);

        if (shortInfo.connectsToEmergencyNumber(input, 'CN')) {
            console.log('Emergency', input);
        }
    } catch(e) {
        console.log(e);
    }
}

export default function KeepFocus() {
    const inputRef = useRef();

    const onMouseDown = (e) => {
        e.preventDefault();
    }

    const onKeyDown = (e) => {
        e.preventDefault();
        onMouseDown(e);
    }

    const onChange = (e) => {
        format(e.target.value);
    }

    return (
        <div>
            <input placeholder="input your name" ref={inputRef} onChange={onChange}></input>
            <div>
                <button onMouseDown={onMouseDown} onKeyDown={onKeyDown}>+</button>
                <button onMouseDown={onMouseDown} onKeyDown={onKeyDown}>-</button>
            </div>
        </div>

    )
}