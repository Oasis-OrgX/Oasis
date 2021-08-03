import React, { useState } from "react";

const Feedback = () => {
  const [response, setResponse] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState(
    "thank you for submitting your response!!!"
  );
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      setFeedbackMsg("please fill the input field");
    } else {
      setFeedbackMsg("thank you for submitting your response!!!");
    }
    setInput("");
    setResponse(true);
    setTimeout(() => setResponse(false), 3000);
  };

  return (
    <>
      <div className="feedback">
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            type="text"
            name="feedback"
            id="feedback"
            placeholder="Feedback/suggestion"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button type="submit">submit</button>
        </form>
      </div>

      {response && <div>{feedbackMsg}</div>}
    </>
  );
};

export default Feedback;
