import { memo, useState } from "react";
import { WorkSpaceHeader } from '../WorkSpaceHeader'
import {Router, Route, Link, Redirect, Switch, Routes, NavLink} from 'react-router-dom'
import { MainPage } from '../../pages/account/main'

export const Workspace = memo(({changeStateMenu, className, stateMenu}) => {

    return(
        <div className={`workspace ${className}`}>
            <WorkSpaceHeader stateMenu={stateMenu} changeStateMenu={changeStateMenu}/>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<div />} />
                </Routes>
            </main>
        </div>
    )
})


