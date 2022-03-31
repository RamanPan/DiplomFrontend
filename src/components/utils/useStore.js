import {useContext} from 'react';
import {StoreContext} from '../../index.js';


import React from 'react';

export default function useStore() {
    return useContext(StoreContext);
}