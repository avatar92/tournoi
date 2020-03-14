import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllEquipe } from "../action/equipeAction";
class HomePage extends Component {
  componentDidMount() {
    this.props.getAllEquipe();
  }
  render() {
    console.log(this.props);
    let content;
    if (equipes.length === 0) {
      content = <div>Loading</div>;
    } else {
      content = equipes.map(equipe => (
        <div className="equipe-wrapper" key={equipe._id}>
          {equipe.title}
        </div>
      ));
    }
    return <div className="home page wrapper">{content}</div>;
  }
}

const mapStateToProps = state => ({
  equipes: state.equipes
});

export default connect(mapStateToProps, { getAllEquipe })(HomePage);
