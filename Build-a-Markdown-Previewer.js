// import React from "react";
const Application = () => {
  return (
    <div class="text-center">
      App Component
      <div className="main row d-flex justify-content-around">
        <div className="col-xs-1"></div>
        <Editor />
        <div className="col-xs-2"></div>
        <Viewer />
        <div className="col-xs-1"></div>
      </div>
    </div>
  );
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <textarea id="editor" className="col-xs-4"></textarea>;
  }
}

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="col-xs-4">I'm the viewer</div>;
  }
}

ReactDOM.render(<Application />, document.getElementById("root"));
