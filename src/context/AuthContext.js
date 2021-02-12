import React from 'react';

let Authcontext = React.createContext({
    userId: null,
    token: null,
    login: () => {},
    logout: () => {},
    isAuthed: false
});

export default Authcontext;