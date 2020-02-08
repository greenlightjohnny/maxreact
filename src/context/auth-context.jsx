import React, { Component } from 'react';

const authContext = React.createContext({
    auth: false, 
    login: () => {}
})

export default authContext;
