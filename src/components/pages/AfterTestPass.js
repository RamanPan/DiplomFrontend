import {observer} from "mobx-react-lite";
import NavigationThenPassingTest from "../UI/NavigationThenPassingTest";
import React, {useEffect, useState} from "react";
import {PASSING_TEST} from "../UI/TestCard";

const AfterTestPass = () => {
    return (
        <div>
            <NavigationThenPassingTest name = {PASSING_TEST.name}/>


        </div>
    )
}


export default observer(AfterTestPass);