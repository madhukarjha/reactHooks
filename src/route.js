import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UseCallbackHook from './components/UseCallbackHook';
import UseRefHook from './components/UseRefHook';
// import Home from './Home';

export const appRoutes = [<Routes>
    {/* <Route path="/" exact element={<Home />} /> */}
    <Route path="/UseRefHook" element={<UseRefHook />} />
    <Route path="/UseCallbackHook" element={<UseCallbackHook />} />

</Routes>];

