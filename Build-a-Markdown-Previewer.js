// import React from "react";

// $(window).on("load", () => {
//   $("#preview").html(marked($("#editor").text()));
// });

$(document).ready(() => {
  $("#editor").on("keyup", function () {
    $("#preview").html(marked($("#editor").text()));
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
      markDown: `# H1 \n## H2\n### H3 \n#### H4\n- li\n- li\n- liiiiiiiii \n\n ####  **BOLD** example \n *ITALIC* example \n\n#### Checkout my github! [Github](https://github.com/codeMonkeyHopeful) \n\n \`\`\`\n codeblocks look like this!  \n\`\`\` \n \`inline code\` \n > blockquote \n\n Scan me =>![you wanna see this!](https://upload.wikimedia.org/wikipedia/commons/3/3f/Totally_not_a_Rickroll_QR_code.png)`,
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
        {/* intial state is pulled from state above */}
      </textarea>
    );
  }
}

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("#preview").html(marked($("#editor").text()));
  }
  render() {
    return (
      <div className="col-xs-4" id="preview">
        {/* we populate here from edior */}
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById("root"));
