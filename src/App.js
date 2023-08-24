import "./App.css";
import { Form } from "antd";
import React from "react";
import { FormRow } from "./components/FormRow/row.tsx";
// import { StyledSelect } from "./styles/select.style";

function App() {
  const rowsDatas = [
    { lable1: "Name", lable2: "Delivery", type1: "input", type2: "input" },
    {
      lable1: "Phone number",
      lable2: "Select Location/Branch",
      type1: "input",
      type2: "select",
    },
    { lable1: "Email", lable2: "Building", type1: "input", type2: "input" },
    { lable1: "Sex", lable2: "Street", type1: "select", type2: "input" },
    { lable1: "Date of birth", lable2: "City", type1: "date", type2: "input" },
    {
      lable1: "Customer group",
      lable2: "Country",
      type1: "select",
      type2: "select",
    },
  ];

  return (
    <>
      <div>Contact</div>
      <Form layout="vertical">
        {rowsDatas.map((rowData, index) => {
          console.log(rowData);
          return (
            <FormRow
              key={index}
              lable1={rowData.lable1}
              lable2={rowData.lable2}
              type1={rowData.type1}
              type2={rowData.type2}
            />
          );
        })}
      </Form>
    </>
  );
}

export default App;
