import React, { Component } from "react";
import UserContainer from "./userContainer";
import PageContainer from "./pageContainer";

class App extends Component {
    render() {
        return (
            <div className="app">
                <PageContainer />
                <UserContainer />
            </div>
        );
    }
}
export default App;
