import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import { getPhotos } from "../actions/pageActions";
import "./App.css";

class App extends Component {
    render() {
        const { user, page, getPhotosAction } = this.props;
        return (
            <div className="app">
                <Page
                    photos={page.photos}
                    year={page.year}
                    isFetching={page.isFetching}
                    getPhotos={getPhotosAction}
                />
                <User name={user.name} />
            </div>
        );
    }
}

// приклеиваем данные из store
const mapStateToProps = store => {
    console.log(store); // посмотрим, что же у нас в store?
    return {
        user: store.user,
        page: store.page
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPhotosAction: year => dispatch(getPhotos(year))
    };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
