﻿import React from 'react';
import HomeHeader from '../../Header/HomeHeader';
import UserHeader from '../../Header/UserHeader';
import Inbox from '../../Inbox/Inbox';

function Mailbox() {
    return (
        <>
            { sessionStorage['userData'] ? <UserHeader /> : <HomeHeader />}
            <Inbox />
        </>
    );
}

export default Mailbox;