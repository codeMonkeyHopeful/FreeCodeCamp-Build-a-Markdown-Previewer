// import React from "react";
const Application = () => {
  return (
    <div class="text-center">
      <div className="main">App Component</div>
      <Editor />
      <Viewer />
    </div>
  );
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>I'm the Editor!</div>;
  }
}

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>I'm the viewer</div>;
  }
}

ReactDOM.render(<Application />, document.getElementById("root"));
