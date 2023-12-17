import React from "react";
import ReactDOM from "react-dom/client";

const result = {
  header: "Your Result",
  resultNum: "76",
  resultSub: "of 100",
  rating: "Great",
  summaryPara:
    "You scored higher than 65% of the people who have taken these tests.",
};

const summary = {
  header: "Summary",
  total: "/ 100",
  buttonTxt: "Continue",
};

const reactionRow = {
  img: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#F55"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
      />
    </svg>
  ),
  title: <p className="reacText">Reaction</p>,
  num: "80",
};

const memoryRow = {
  img: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#FFB21E"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
      />
      <path
        stroke="#FFB21E"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
      />
      <path
        stroke="#FFB21E"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
      />
    </svg>
  ),
  title: <p className="memoText">Memory</p>,
  num: "92",
};

const verbalRow = {
  img: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#00BB8F"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
      />
    </svg>
  ),
  title: <p className="verbText">Verbal</p>,
  num: "61",
};

const visualRow = {
  img: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#1125D6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
      />
      <path
        stroke="#1125D6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
      />
    </svg>
  ),
  title: <p className="visText">Visual</p>,
  num: "72",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const ContainerBox = () => {
  return (
    <main className="primary-ff main-container">
      <div className="mainBox">
        <ResultContainerBox
          header={result.header}
          resultNum={result.resultNum}
          resultSub={result.resultSub}
          rating={result.rating}
          summaryPara={result.summaryPara}
        />
        <SummaryContainerBox
          header={summary.header}
          buttonTxt={summary.buttonTxt}
        />
      </div>
    </main>
  );
};

const ResultContainerBox = (props) => {
  const { header, resultNum, resultSub, rating, summaryPara } = props;
  return (
    <section className="resultBox result-container| resultBackgroundColor">
      <div className="resultWrap">
        <p className="fw-md-500 header-text fw-bold-700">{header}</p>
        <div className="resultNumContainer">
          <p className="bigNumber | fw-xBold-800">{resultNum}</p>
          <p className="subNumber |fw-bold-700">{resultSub}</p>
        </div>
        <div className="subBox">
          <p className="rating fw-bold-700">{rating}</p>
          <p className="para">{summaryPara}</p>
        </div>
      </div>
    </section>
  );
};

const SummaryContainerBox = (props) => {
  const { header, buttonTxt } = props;
  return (
    <section className="summaryBox summary-container">
      <div className="summaryWrap">
        <p className="sumHead fw-bold-700">{header}</p>
        <div className="summaryRows">
          <section className="reactionSection">
            <SummaryRows
              img={reactionRow.img}
              title={reactionRow.title}
              total={summary.total}
              num={reactionRow.num}
            />
          </section>

          <section className="memorySection">
            <SummaryRows
              img={memoryRow.img}
              title={memoryRow.title}
              total={summary.total}
              num={memoryRow.num}
            />
          </section>

          <section className="verbalSection">
            <SummaryRows
              img={verbalRow.img}
              title={verbalRow.title}
              total={summary.total}
              num={verbalRow.num}
              color={verbalRow.color}
            />
          </section>

          <section className="summarySection">
            <SummaryRows
              img={visualRow.img}
              title={visualRow.title}
              total={summary.total}
              num={visualRow.num}
            />
          </section>

          <button className="myButton">{buttonTxt}</button>
        </div>
      </div>
    </section>
  );
};

const SummaryRows = (props) => {
  const { total, img, title, num } = props;
  return (
    <div className="myRow | ">
      <div className="singleRow">
        <div className="name">
          {img}
          {title}
        </div>
        <div className="data">
          <p className="fw-bold-700 ntrl-drk-gry-blu">{num}</p>
          <p className="total fw-bold-700">{total}</p>
        </div>
      </div>
    </div>
  );
};

root.render(<ContainerBox />);
