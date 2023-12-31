import { FormGroup } from "@mui/material";
import React from "react";
import { useGetQuizzersQuery } from "../features/quizzers/quizzersAPI";
import Error from "./Error";
import Loading from "./Loading";

const QuizzersForm = () => {
  const { data: quizzers, isLoading, isError } = useGetQuizzersQuery(1);
  console.log(quizzers);

  let content;
  if (isLoading && !isError) {
    content = <Loading></Loading>;
  } else if (!isLoading && isError) {
    content = <Error></Error>;
  } else if (!isLoading && !isError && quizzers.length === 0) {
    content = <div>No quizzers Found</div>;
  } else if (!isLoading && !isError && quizzers.length > 0) {
    content = quizzers.map((quizz) => (
      <FormGroup>
        <h3 className="text-2xl text-blue-600 capitalize">{quizz.question}</h3>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {quizz.options.map((option) => (
            <div className="w-full   ">
              <input
                type="checkbox"
                className="hidden clickInput"
                name=""
                id={`ques${quizz.id}-q${option.id}`}
              />
              <label
                htmlFor={`ques${quizz.id}-q${option.id}`}
                className="option-label"
              >
                {option.option}
              </label>
            </div>
          ))}
        </div>
      </FormGroup>
    ));
  }
  return <>{content}</>;
};

export default QuizzersForm;
