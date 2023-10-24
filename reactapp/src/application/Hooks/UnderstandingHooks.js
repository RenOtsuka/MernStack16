import React, { useState, useCallback, useMemo } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

function Hooks(props) {
  //let age = 18, text1 = "Age";
  let text1 = "Age"
  let [age, setAge] = useState(19);
  let [salary, setSalary] = useState(20000);

  //memoizes input values and avoids re-rendering untill there is change in input values
  let incrementAge = useCallback(() => {
    console.log("Incremented Age " + age)
    setAge(age + 1)
  }, [age])

  let incrementSalary = useCallback(() => {
    console.log("Incremented salary")
    setSalary(salary + 100)
  }, [salary]);

  //memoizes data and calculates only if the input value is changed
  let isEven = useMemo(() => {
    console.log("IsEven")
    let i = 1
    while (i < 2000000000) i++;

    return age % 2 === 0;
  }, [age]);

  return (
    <>
      <Title />

      <Count text={text1} count={age} />

      <Button handleClick={incrementAge} >
        Increment Age
      </Button>

      {/* <span>{isEven() ? ' Even' : ' Odd'}</span> */}

      <span>{isEven ? ' Even' : ' Odd'}</span>

      <Count text={"Salary"} count={salary} />
      <Button handleClick={incrementSalary}>
        Increment Salary
      </Button>
    </>
  )
}

export default Hooks;
//we should avoid using react.memo in the parent pages so that there is no unnessaray caching to increment states