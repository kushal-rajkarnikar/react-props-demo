import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Content from "./components/Content";

import Block from "./Block";

export default function App() {
  return (
    <div className="flex">
      <Block name="Kushal Rajkarnikar" ward={20} address="Lalitpur" />
      <Block name="Ram Thapa" ward={16} address="Kathmandu" />
      <Block name="Sita Chaudhary" ward={2} address="Bhaktapur" />
    </div>
  );
}
