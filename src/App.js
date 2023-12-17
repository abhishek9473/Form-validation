import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import BasicForm from "./components/forms/BasicForm";
import SimpleForm from "./components/forms/SimpleForm";
import NestedForm from "./components/forms/NestedForm";
import DynamicForm from "./components/forms/DynamicForm";
import NestedDynamicForm from "./components/forms/NestedDynamicForm";
import ContextForm from "./components/forms/ContextForm";
import InputArea from "./components/InputArea";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<InputArea/>}  />
        <Route path="basicForm" element={<BasicForm />} />
        <Route path="simpleForm" element={<SimpleForm />} />
        <Route path="nestedForm" element={<NestedForm />} />
        <Route path="dynamicForm" element={<DynamicForm />} />
        <Route path="nestedDynamicForm" element={<NestedDynamicForm />} />
        <Route path="useformcontext" element={<ContextForm />} />
      </Routes>
    </>
  );
}

export default App;
