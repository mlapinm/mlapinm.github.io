let objs04 = [
  {
   "name": "1 Create a Simple JSX Element",
   "code": [
    "const JSX = <h1>Hello JSX!</h1>;",
    "Create a Complex JSX Element",
    "const JSX = (<div>",
    "<h1>h</h1>",
    "<p>p</p>",
    "<ul>",
    "<li>1</li>",
    "<li>2</li>",
    "<li>3</li>",
    "</ul>",
    "</div>)"
   ]
  },
  {
   "name": "2 Add Comments in JSX",
   "code": [
    "const JSX = (",
    "  <div>",
    "    <h1>This is a block of JSX</h1>",
    "    <p>Here's a subtitle</p>",
    "    {/* comment */}",
    "  </div>",
    ");"
   ]
  },
  {
   "name": "3 Render HTML Elements to the DOM",
   "code": [
    "const JSX = (",
    "  <div>",
    "    <h1>Hello World</h1>",
    "    <p>Lets render this to the DOM</p>",
    "  </div>",
    ");",
    "// Change code below this line",
    "",
    "<div id='challenge-node'></div>",
    "",
    "ReactDOM.render(JSX, document.getElementById('challenge-node'))",
    ""
   ]
  },
  {
   "name": "4 Define an HTML Class in JSX",
   "code": [
    "const JSX = (",
    "  <div className=\"myDiv\">",
    "    <h1>Add a class to this div</h1>",
    "  </div>",
    ");",
    ""
   ]
  },
  {
   "name": "5 Learn About Self-Closing JSX Tags",
   "code": [
    "const JSX = (",
    "  <div>",
    "    <h2>Welcome to React!</h2> <br />",
    "    <p>Be sure to close all tags!</p>",
    "    <hr />",
    "  </div>",
    ");",
    ""
   ]
  },
  {
   "name": "6 Create a Stateless Functional Component",
   "code": [
    "const MyComponent = function() {",
    "  // Change code below this line",
    "",
    "  return (",
    "    <div>text</div>",
    "  )",
    "",
    "  // Change code above this line",
    "}"
   ]
  },
  {
   "name": "7 Create a React Component",
   "code": [
    "class MyComponent extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    // Change code below this line",
    "    return (<div>",
    "    <h1>Hello React!</h1>",
    "    </div>)",
    "",
    "",
    "    // Change code above this line",
    "  }",
    "};"
   ]
  },
  {
   "name": "8 Create a Component with Composition",
   "code": [
    "const ChildComponent = () => {",
    "  return (",
    "    <div>",
    "      <p>I am the child</p>",
    "    </div>",
    "  );",
    "};",
    "",
    "class ParentComponent extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <h1>I am the parent</h1>",
    "        { /* Change code below this line */ }",
    "<ChildComponent />",
    "",
    "        { /* Change code above this line */ }",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "9 Use React to Render Nested Components",
   "code": [
    "const TypesOfFruit = () => {",
    "  return (",
    "    <div>",
    "      <h2>Fruits:</h2>",
    "      <ul>",
    "        <li>Apples</li>",
    "        <li>Blueberries</li>",
    "        <li>Strawberries</li>",
    "        <li>Bananas</li>",
    "      </ul>",
    "    </div>",
    "  );",
    "};",
    "",
    "const Fruits = () => {",
    "  return (",
    "    <div>",
    "      { /* Change code below this line */ }",
    "  <TypesOfFruit />",
    "      { /* Change code above this line */ }",
    "    </div>",
    "  );",
    "};",
    "",
    "class TypesOfFood extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "",
    "  render() {",
    "    return (",
    "      <div>",
    "        <h1>Types of Food:</h1>",
    "        { /* Change code below this line */ }",
    "         <Fruits />",
    "        { /* Change code above this line */ }",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "10 Compose React Components",
   "code": [
    "class Fruits extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <h2>Fruits:</h2>",
    "        { /* Change code below this line */ }",
    "        <NonCitrus />",
    "        <Citrus />",
    "        { /* Change code above this line */ }",
    "      </div>",
    "    );",
    "  }",
    "};",
    "",
    "class TypesOfFood extends React.Component {",
    "  constructor(props) {",
    "     super(props);",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <h1>Types of Food:</h1>",
    "        { /* Change code below this line */ }",
    "        <Fruits />",
    "        { /* Change code above this line */ }",
    "        <Vegetables />",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "11 Render a Class Component to the DOM",
   "code": [
    "class TypesOfFood extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <h1>Types of Food:</h1>",
    "        {/* Change code below this line */}",
    "        <Fruits />",
    "        <Vegetables />",
    "        {/* Change code above this line */}",
    "      </div>",
    "    );",
    "  }",
    "};",
    "",
    "// Change code below this line",
    "",
    "ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))"
   ]
  },
  {
   "name": "12 Write a React Component from Scratch",
   "code": [
    "// Change code below this line",
    "class MyComponent extends React.Component {",
    "  constructor(props){",
    "    super(props)",
    "  }",
    "  render(){",
    "    return (",
    "      <div>",
    "        <h1>My First React Component!</h1>",
    "      </div>",
    "    )",
    "  }",
    "} ",
    "",
    "ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))",
    ""
   ]
  },
  {
   "name": "13 Pass Props to a Stateless Functional Component",
   "code": [
    "const CurrentDate = (props) => {",
    "  return (",
    "    <div>",
    "      { /* Change code below this line */ }",
    "      <p>The current date is: {props.date}</p>",
    "      { /* Change code above this line */ }",
    "    </div>",
    "  );",
    "};",
    "",
    "class Calendar extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <h3>What date is it?</h3>",
    "        { /* Change code below this line */ }",
    "        <CurrentDate date={Date()}/>",
    "        { /* Change code above this line */ }",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "14 Pass an Array as Props",
   "code": [
    "const List = (props) => {",
    "  { /* Change code below this line */ }",
    "  return <p>{props.tasks.join(', ')}</p>",
    "  { /* Change code above this line */ }",
    "};",
    "",
    "class ToDo extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <h1>To Do Lists</h1>",
    "        <h2>Today</h2>",
    "        { /* Change code below this line */ }",
    "        <List tasks = {[\"walk dog\", \"workout\"]}/>",
    "        <h2>Tomorrow</h2>",
    "        <List tasks = {[\"walk dog\", \"workout\", \"workout\"]}/>",
    "        { /* Change code above this line */ }",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "15 Use Default Props",
   "code": [
    "const ShoppingCart = (props) => {",
    "  return (",
    "    <div>",
    "      <h1>Shopping Cart Component</h1>",
    "    </div>",
    "  )",
    "};",
    "// Change code below this line",
    "ShoppingCart.defaultProps = {",
    "  items: 0",
    "}"
   ]
  },
  {
   "name": "16 Override Default Props",
   "code": [
    "const Items = (props) => {",
    "  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>",
    "}",
    "",
    "Items.defaultProps = {",
    "  quantity: 0",
    "}",
    "",
    "class ShoppingCart extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    { /* Change code below this line */ }",
    "    return <Items quantity={10}/>",
    "    { /* Change code above this line */ }",
    "  }",
    "};"
   ]
  },
  {
   "name": "17 Use PropTypes to Define the Props You Expect",
   "code": [
    "const Items = (props) => {",
    "  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>",
    "};",
    "",
    "// Change code below this line",
    "Items.propTypes = { quantity : PropTypes.number.isRequired }",
    "// Change code above this line",
    "",
    "Items.defaultProps = {",
    "  quantity: 0",
    "};",
    "",
    "class ShoppingCart extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    return <Items quantity={4}/>",
    "  }",
    "};"
   ]
  },
  {
   "name": "18 Access Props Using this.props",
   "code": [
    "class App extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "",
    "  }",
    "  render() {",
    "    return (",
    "        <div>",
    "            { /* Change code below this line */ }",
    "            <Welcome name=\"Smith\"/>",
    "            ",
    "            { /* Change code above this line */ }",
    "        </div>",
    "    );",
    "  }",
    "};",
    "",
    "class Welcome extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "",
    "  }",
    "  render() {",
    "    return (",
    "        <div>",
    "          { /* Change code below this line */ }",
    "          <p>Hello, <strong>{this.props.name}</strong>!</p>",
    "          { /* Change code above this line */ }",
    "        </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "19 Review Using Props with Stateless Functional Components",
   "code": [
    "class CampSite extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <Camper/>",
    "      </div>",
    "    );",
    "  }",
    "};",
    "// Change code below this line",
    "class Camper extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render(){",
    "    return(",
    "    <p>{this.props.name}</p>",
    "    )",
    "  }",
    "",
    "};",
    "",
    "Camper.propTypes = {",
    "  name : PropTypes.string.isRequired",
    "}",
    "",
    "Camper.defaultProps = {",
    "  name: 'CamperBot'",
    "}"
   ]
  },
  {
   "name": "20 Create a Stateful Component",
   "code": [
    "React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    // Only change code below this line",
    "    this.state = {",
    "      name: 'aa'",
    "    }",
    "",
    "    // Only change code above this line",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <h1>{this.state.name}</h1>",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "21 Render State in the User Interface",
   "code": [
    "class MyComponent extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    this.state = {",
    "      name: 'freeCodeCamp'",
    "    }",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        { /* Change code below this line */ }",
    "<h1>{this.state.name}</h1>",
    "        { /* Change code above this line */ }",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "22 Render State in the User Interface Another Way",
   "code": [
    "class MyComponent extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    this.state = {",
    "      name: 'freeCodeCamp'",
    "    }",
    "  }",
    "  render() {",
    "    // Change code below this line",
    "    const name = this.state.name",
    "    // Change code above this line",
    "    return (",
    "      <div>",
    "        { /* Change code below this line */ }",
    "        <h1>{name}</h1>",
    "        { /* Change code above this line */ }",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "23 Set State with this.setState",
   "code": [
    "class MyComponent extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    this.state = {",
    "      name: 'Initial State'",
    "    };",
    "    this.handleClick = this.handleClick.bind(this);",
    "  }",
    "  handleClick() {",
    "    // Change code below this line",
    "    this.setState({",
    "      name: 'React Rocks!'",
    "    })",
    "    // Change code above this line",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <button onClick={this.handleClick}>Click Me</button>",
    "        <h1>{this.state.name}</h1>",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "24 Bind 'this' to a Class Method",
   "code": [
    "class MyComponent extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    this.state = {",
    "      text: \"Hello\"",
    "    };",
    "    // Change code below this line",
    "    this.handleClick = this.handleClick.bind(this)",
    "",
    "    // Change code above this line",
    "  }",
    "  handleClick() {",
    "    this.setState({",
    "      text: \"You clicked!\"",
    "    });",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        { /* Change code below this line */ }",
    "        <button onClick={this.handleClick}>Click Me</button>",
    "        { /* Change code above this line */ }",
    "        <h1>{this.state.text}</h1>",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "25 Use State to Toggle an Element",
   "code": [
    "class MyComponent extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    this.state = {",
    "      visibility: false,",
    "    };",
    "    // Change code below this line",
    "    this.toggleVisibility = this.toggleVisibility.bind(this)",
    "    // Change code above this line",
    "  }",
    "  // Change code below this line",
    "  toggleVisibility(){",
    "    this.setState(state => ({",
    "      visibility: !state.visibility,",
    "    }));",
    "  }",
    "  // Change code above this line",
    "  render() {",
    "    if (this.state.visibility) {",
    "      return (",
    "        <div>",
    "          <button onClick={this.toggleVisibility}>Click Me</button>",
    "          <h1>Now you see me!</h1>",
    "        </div>",
    "      );",
    "    } else {",
    "      return (",
    "        <div>",
    "          <button onClick={this.toggleVisibility}>Click Me</button>",
    "        </div>",
    "      );",
    "    }",
    "  }",
    "}"
   ]
  },
  {
   "name": "26 Write a Simple Counter",
   "code": [
    "class Counter extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    this.state = {",
    "      count: 0",
    "    };",
    "    // Change code below this line",
    "    this.increment = this.increment.bind(this)",
    "    this.decrement = this.decrement.bind(this)",
    "    this.reset = this.reset.bind(this)",
    "    // Change code above this line",
    "  }",
    "  // Change code below this line",
    "  increment(){",
    "    this.setState(state => ({",
    "      count: state.count + 1",
    "    }))",
    "  }",
    "  decrement(){",
    "    this.setState(state => ({",
    "      count: state.count - 1",
    "    }))",
    "  }",
    "  reset(){",
    "    this.setState({",
    "      count: 0",
    "    })",
    "  }",
    "  // Change code above this line",
    "  render() {",
    "    return (",
    "      <div>",
    "        <button className='inc' onClick={this.increment}>Increment!</button>",
    "        <button className='dec' onClick={this.decrement}>Decrement!</button>",
    "        <button className='reset' onClick={this.reset}>Reset</button>",
    "        <h1>Current Count: {this.state.count}</h1>",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "27 Create a Controlled Input",
   "code": [
    "class ControlledInput extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    this.state = {",
    "      input: '',",
    "    };",
    "    // Change code below this line",
    "    this.handleChange = this.handleChange.bind(this)",
    "    // Change code above this line",
    "  }",
    "  // Change code below this line",
    "  handleChange(event){",
    "    this.setState({",
    "      input: event.target.value",
    "    })",
    "  }",
    "  // Change code above this line",
    "  render() {",
    "    return (",
    "      <div>",
    "        { /* Change code below this line */}",
    "        <input value={this.state.input} onChange={this.handleChange}/>",
    "",
    "        { /* Change code above this line */}",
    "        <h4>Controlled Input:</h4>",
    "        <p>{this.state.input}</p>",
    "      </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "28 Create a Controlled Form",
   "code": [
    "class MyForm extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    this.state = {",
    "      input: '',",
    "      submit: '',",
    "    };",
    "    this.handleChange = this.handleChange.bind(this);",
    "    this.handleSubmit = this.handleSubmit.bind(this);",
    "  }",
    "  handleChange(event) {",
    "    this.setState({",
    "      input: event.target.value",
    "    });",
    "  }",
    "  handleSubmit(event) {",
    "    // Change code below this line",
    "    this.setState((state) => ({",
    "      submit: state.input",
    "    }))",
    "    event.preventDefault()",
    "    // Change code above this line",
    "  }",
    "  render() {",
    "    return (",
    "      <div>",
    "        <form onSubmit={this.handleSubmit}>",
    "          {/* Change code below this line */}",
    "          <input value={this.state.input} onChange={this.handleChange}/>",
    "          {/* Change code above this line */}",
    "          <button type='submit'>Submit!</button>",
    "        </form>",
    "        {/* Change code below this line */}",
    "        <h1>{this.state.submit}</h1>",
    "        {/* Change code above this line */}",
    "      </div>",
    "    );",
    "  }",
    "}"
   ]
  },
  {
   "name": "29 Pass State as Props to Child Components",
   "code": [
    "class MyApp extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "    this.state = {",
    "      name: 'CamperBot'",
    "    }",
    "  }",
    "  render() {",
    "    return (",
    "       <div>",
    "         {/* Change code below this line */}",
    "         <Navbar name={this.state.name}/>",
    "         {/* Change code above this line */}",
    "       </div>",
    "    );",
    "  }",
    "};",
    "",
    "class Navbar extends React.Component {",
    "  constructor(props) {",
    "    super(props);",
    "  }",
    "  render() {",
    "    return (",
    "    <div>",
    "      {/* Change code below this line */}",
    "      <h1>Hello, my name is: {this.props.name}</h1>",
    "      {/* Change code above this line */}",
    "    </div>",
    "    );",
    "  }",
    "};"
   ]
  },
  {
   "name": "30 Pass a Callback as Props",
   "code": [
    ""
   ]
  },
  {
   "name": "31 Use the Lifecycle Method componentWillMount",
   "code": [
    ""
   ]
  },
  {
   "name": "32 Use the Lifecycle Method componentDidMount",
   "code": [
    ""
   ]
  },
  {
   "name": "33 Add Event Listeners",
   "code": [
    ""
   ]
  },
  {
   "name": "34 Optimize Re-Renders with shouldComponentUpdate",
   "code": [
    ""
   ]
  },
  {
   "name": "35 Introducing Inline Styles",
   "code": [
    ""
   ]
  },
  {
   "name": "36 Add Inline Styles in React",
   "code": [
    ""
   ]
  },
  {
   "name": "37 Use Advanced JavaScript in React Render Method",
   "code": [
    ""
   ]
  },
  {
   "name": "38 Render with an If-Else Condition",
   "code": [
    ""
   ]
  },
  {
   "name": "39 Use && for a More Concise Conditional",
   "code": [
    ""
   ]
  },
  {
   "name": "40 Use a Ternary Expression for Conditional Rendering",
   "code": [
    ""
   ]
  },
  {
   "name": "41 Render Conditionally from Props",
   "code": [
    ""
   ]
  },
  {
   "name": "42 Change Inline CSS Conditionally Based on Component State",
   "code": [
    ""
   ]
  },
  {
   "name": "43 Use Array.map() to Dynamically Render Elements",
   "code": [
    ""
   ]
  },
  {
   "name": "44 Give Sibling Elements a Unique Key Attribute",
   "code": [
    ""
   ]
  },
  {
   "name": "45 Use Array.filter() to Dynamically Filter an Array",
   "code": [
    ""
   ]
  },
  {
   "name": "46 Render React on the Server with renderToString",
   "code": [
    "",
    ""
   ]
  }
 ]
 