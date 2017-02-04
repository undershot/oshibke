import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as pageActions from "./redux/actions/pageActions";

import "./styles/global.css";

import PageContainer from "./components/PageContainer";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="remedis-app">
          <Drawer opened={this.props.page.drawerOpened} />

          <Header />

          <PageContainer page={this.props.page} pageContent={this.props.children} />

          <Footer page={this.props.page} />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
    return {
        user: state.user,
        page: state.page,
        rounting: state.routing
    }
};

const mapDispatchesToProps = (dispatch) => {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchesToProps)(App);