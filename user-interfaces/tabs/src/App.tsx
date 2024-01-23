import { useState } from "react";
import "./App.scss";
import classnames from "classnames";

// Notes for improving after MVP
// add state to local storage so position is remembered when closing reopening
//

const tabableContent = [
  {
    button: "btn1",
    text: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    button: "btn2",
    text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    button: "btn3",
    text: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <ul className="btn-list">
        {tabableContent.map(({ button }, index) => (
          <li key={`btn-${index}`}>
            <button
              className={classnames("btn-list__btn", {
                "btn-active": index === activeTab,
              })}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {button}
            </button>
          </li>
        ))}
      </ul>

      <ul className="content-list">
        {tabableContent.map(({ text }, index) => (
          <li
            key={`ctn-${index}`}
            className={classnames("content-list__content", {
              active: index === activeTab,
            })}
          >
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
