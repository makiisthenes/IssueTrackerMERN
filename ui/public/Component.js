"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _reactTypingEffect = _interopRequireDefault(require("react-typing-effect"));

var _graphQLFetch = _interopRequireDefault(require("./graphQLFetch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var graph_api_url = "http://localhost:3000/graphql";
var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

var IssueFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  var _super = _createSuper(IssueFilter);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _super.call(this);
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "PLaceholder div for issue filter.");
    }
  }]);

  return IssueFilter;
}(_react.default.Component);

;

function IssueRow(props) {
  var issue = props.issue;
  var rowStyle = props.rowStyle;
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: rowStyle
  }, issue.id), /*#__PURE__*/_react.default.createElement("td", {
    style: rowStyle
  }, issue.status), /*#__PURE__*/_react.default.createElement("td", {
    style: rowStyle
  }, issue.owner), /*#__PURE__*/_react.default.createElement("td", {
    style: rowStyle
  }, issue.created.toDateString()), /*#__PURE__*/_react.default.createElement("td", {
    style: rowStyle
  }, issue.effort), /*#__PURE__*/_react.default.createElement("td", {
    style: rowStyle
  }, issue.due ? issue.due.toDateString() : ""), /*#__PURE__*/_react.default.createElement("td", {
    style: rowStyle
  }, issue.title));
}

function IssueTable(props) {
  var rowStyle = {
    border: "1px solid silver",
    padding: 4
  };
  {
    /*const issueRows = this.issues.map(issue => <IssueRow rowStyle={rowStyle} issue={issue}>{issue.title}</IssueRow>)*/
  }
  var issueRows = props.issues.map(function (issue) {
    return /*#__PURE__*/_react.default.createElement(IssueRow, {
      key: issue.id,
      rowStyle: rowStyle,
      issue: issue
    });
  });
  return /*#__PURE__*/_react.default.createElement("table", {
    style: {
      border: "solid 2.5px black"
    }
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "ID"), /*#__PURE__*/_react.default.createElement("th", null, "Status"), /*#__PURE__*/_react.default.createElement("th", null, "Owner"), /*#__PURE__*/_react.default.createElement("th", null, "Created"), /*#__PURE__*/_react.default.createElement("th", null, "Effort"), /*#__PURE__*/_react.default.createElement("th", null, "Due Date"), /*#__PURE__*/_react.default.createElement("th", null, "Title"))), /*#__PURE__*/_react.default.createElement("tbody", null, issueRows));
}

var IssueAdd = /*#__PURE__*/function (_React$Component2) {
  _inherits(IssueAdd, _React$Component2);

  var _super2 = _createSuper(IssueAdd);

  function IssueAdd() {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _super2.call(this);
    {
      /*setTimeout(()=>{
      this.props.createIssue(sampleIssue);
      }, 2000)*/
    }
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueAdd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title",
        required: true
      }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner"
      }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("select", {
        type: "text",
        name: "status",
        placeholder: "Status"
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: "New"
      }, "New"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Assigned"
      }, "Assigned"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Fixed"
      }, "Fixed"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Closed"
      }, "Closed")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", null, "Add New Issue"));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      {
        /* Handle sumbit of form send. */
      }
      e.preventDefault();
      var form = document.forms.issueAdd;
      var issue = {
        owner: form.owner.value,
        title: form.title.value,
        due: new Date(new Date().getTime() + 1000 * 60 * 30 * 24 * 10),
        status: form.status.value == "" || form.status.value == null ? "New" : form.status.value
      };
      console.log("form status value: ".concat(JSON.stringify(issue)));
      this.props.createIssue(issue);
      form.reset();
    }
  }]);

  return IssueAdd;
}(_react.default.Component);

;
IssueAdd.propTypes = {
  createIssue: PropTypes.func.isRequired
};

var IssueList = /*#__PURE__*/function (_React$Component3) {
  _inherits(IssueList, _React$Component3);

  var _super3 = _createSuper(IssueList);

  function IssueList() {
    var _this2;

    _classCallCheck(this, IssueList);

    _this2 = _super3.call(this);
    _this2.state = {
      issues: []
    };
    {
      /* setTimeout(()=>{this.createIssue(sampleIssue)}, 2000); */
    }
    {
      /* setTimeout(()=>{this.createIssue(sampleIssue1)}, 3000); */
    }
    _this2.createIssue = _this2.createIssue.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement(_reactTypingEffect.default, {
        text: ["Issue Tracker, made with MERN <3 Maki"]
      })), /*#__PURE__*/_react.default.createElement(IssueFilter, null), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(IssueTable, {
        issues: this.state.issues
      }), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(IssueAdd, {
        createIssue: this.createIssue
      }), " ");
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query{issueList{id title status owner created effort due}}";
                _context.next = 3;
                return (0, _graphQLFetch.default)(query);

              case 3:
                data = _context.sent;

                if (data) {
                  this.setState({
                    issues: data.issueList
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "createIssue",
    value: function () {
      var _createIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(issue) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "mutation issueAdd($issue: IssueInputs!) {issueAdd(issue: $issue) {id}}";
                _context2.next = 3;
                return (0, _graphQLFetch.default)(query, {
                  issue: issue
                });

              case 3:
                data = _context2.sent;

                if (data) {
                  this.loadData();
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createIssue(_x) {
        return _createIssue.apply(this, arguments);
      }

      return createIssue;
    }()
  }]);

  return IssueList;
}(_react.default.Component); //  What Im actually going to render from the classes inheriting from React Components.


var elem1 = /*#__PURE__*/_react.default.createElement(IssueList, null);

ReactDOM.render(elem1, document.getElementById("root1"));
{
  /* Ignore all of this below. */
}
{
  /* import Typing from 'react-typing-animation';*/
}
{
  /*
  const initialIssues = [
  {
  	id:1, status:'New', owner:'Maki', effort:5, created: new Date('2021-09-03'), due: undefined, title:"Homework for Operating System worksheet on Qmplus."
  },
  {
  	id:2, status:'New', owner:'Maki', effort:3, created: new Date('2021-08-30'), due: new Date('2021-09-06'), title:"Prepare speech letter for celebration ceremony next week."
  }
  ];
  */
}
var sampleIssue = {
  status: "New",
  owner: "Pieta",
  effort: 4,
  title: "Completion date should be optional"
};
var sampleIssue1 = {
  status: "New",
  owner: "Maki1",
  effort: 4,
  title: "Testing out timing of functions in render func"
}; // const issues = [];

var MyComponent = /*#__PURE__*/function (_React$Component4) {
  _inherits(MyComponent, _React$Component4);

  var _super4 = _createSuper(MyComponent);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _super4.apply(this, arguments);
  }

  _createClass(MyComponent, [{
    key: "render",
    value: function render() {
      var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
      var helloContinents = Array.from(continents, function (c) {
        return "Hello ".concat(c, "!");
      });
      var message = helloContinents.join(" ");
      return /*#__PURE__*/_react.default.createElement("div", {
        id: ""
      }, message, /*#__PURE__*/_react.default.createElement("h2", null, "Welcome to React using Classes."));
    }
  }]);

  return MyComponent;
}(_react.default.Component);

{
  /*
  render(){
  	const rowStyle = this.props.rowStyle;
  	const issue = this.props.issue;
  	return(
  		<tr>
  			<td style={rowStyle}>{issue.id}</td>
  			<td style={rowStyle}>{issue.status}</td> 
  			<td style={rowStyle}>{issue.owner}</td>
  			<td style={rowStyle}>{issue.created.toDateString()}</td>
  			<td style={rowStyle}>{issue.effort}</td>
  			<td style={rowStyle}>{issue.due ? issue.due.toDateString() : 'No Due Date'}</td>
  			<td style={rowStyle}>{issue.title}</td>
  		</tr>
  	)
  }
  };
  */
}
{
  /*
  class IssueTable extends React.Component{
  render(){
  const rowStyle = {border: "1px solid silver", padding:4};
  const issueRows = this.props.issues.map(issue => <IssueRow rowStyle={rowStyle} issue={issue}></IssueRow>)
  return(
  	<table style={{border: "solid 2.5px black"}}>
  		<thead>
  			<tr>
  				<th>ID</th>
  				<th>Status</th>
  				<th>Owner</th>
  				<th>Created</th>
  				<th>Effort</th>
  				<th>Due Date</th>
  				<th>Title</th>
  			</tr>
  		</thead>
  		<tbody>
  			{issueRows}
  		</tbody>
  	</table>
  )
  }
  };
  */
}