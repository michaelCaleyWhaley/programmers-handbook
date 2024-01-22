import { useState } from "react";
import "./App.scss";
import classnames from "classnames";

// Notes for improving after MVP
// add state to local storage so position is remembered when closing reopening
//

const tabableContent = [
  { button: "btn1", text: "First tab" },
  { button: "btn2", text: "Second tab" },
  { button: "btn3", text: "Third tab" },
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
