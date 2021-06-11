import React from "react";

export default class FetchUser extends React.Component {
  state = {
    loading: true,
    person: null
  };


  async componentDidMount() {
    const url = "https://swapi.dev/api/people/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person deatils</div>;
    }

    return (
     
     <div>
        <div>{this.state.person.name}</div>
        <div>{this.state.person.height}</div>
        <div>{this.state.person.mass}</div>
        <div>{this.state.person.hair_color}</div>
        <div>{this.state.person.skin_color}</div>
        <div>{this.state.person.eye_color}</div>
        <div>{this.state.person.name}</div>
        <div>{this.state.person.height}</div>
        <div>{this.state.person.mass}</div>
        <div>{this.state.person.hair_color}</div>
        <div>{this.state.person.skin_color}</div>
        <div>{this.state.person.eye_color}</div>
        <div>{this.state.person.name}</div>
        <div>{this.state.person.height}</div>
        <div>{this.state.person.mass}</div>
        <div>{this.state.person.hair_color}</div>
        <div>{this.state.person.skin_color}</div>
        <div>{this.state.person.eye_color}</div>
        <div>{this.state.person.name}</div>
        <div>{this.state.person.height}</div>
        <div>{this.state.person.mass}</div>
        <div>{this.state.person.hair_color}</div>
        <div>{this.state.person.skin_color}</div>
        <div>{this.state.person.eye_color}</div>
        
      </div>
    );
  }
}
