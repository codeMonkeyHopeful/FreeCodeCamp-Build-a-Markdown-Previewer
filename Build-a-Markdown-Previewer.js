// import React from "react";
const Application = () => {
  return (
    <div class="text-center">
      <div className="main">App Component</div>
      <Child />
    </div>
  );
};

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>I'm the child!</div>;
  }
}

ReactDOM.render(<Application />, document.getElementById("root"));
