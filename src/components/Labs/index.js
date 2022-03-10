import React from "react";
import { Link } from "react-router-dom";

import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import ReduxExamples from "./redux-examples";
import Styles from "./Styles";
import TodoList from "./Todo/TodoList";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
            
            <ConditionalOutput/>
            <Styles/>
            <Classes/>

            <h2>Todo List</h2>
            <TodoList/>

            <ReduxExamples/>
        
        </>
    )

};

export default Labs;