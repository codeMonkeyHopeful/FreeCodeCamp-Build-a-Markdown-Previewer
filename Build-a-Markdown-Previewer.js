// import React from "react";

$(document).ready(() => {
  $("#editor").on("keyup", function () {
    $("#preview").text($("#editor").text());
  });
});

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
    this.state = {
      markDown: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ markDown: e.target.value });

    console.log(this.state.markDown);
  }

  render() {
    return (
      <textarea
        id="editor"
        className="col-xs-4"
        onChange={this.handleChange}
        value={this.state.markDown}
      >
        {/* {this.state.markDown} */}
      </textarea>
    );
  }
}

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="col-xs-4" id="preview"></div>;
  }
}

ReactDOM.render(<Application />, document.getElementById("root"));
