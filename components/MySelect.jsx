"use client"
import React from "react";
import Select from "react-select";

const customStyles = {
  control: (base, state) => ({
      ...base,
      width: "100%",
      height: "100%",
      color: "#fff",
      backgroundColor: "none",
      border: "none",
      borderRadius: "none",
      borderBottom: state.isFocused ? "1px solid var(--primary)" : "1px solid #616161",
      boxShadow: state.isFocused ? "none" : "none",
  }),
  label: (base, state) => ({
    ...base,
    display: "none"
  }),
  valueContainer: (base) => ({
      ...base,
      height: "100%",
      color: "#fff"
    }),
  input: (base, state) => ({
      ...base,
      width: "100%",
      height: "40px",
      color: "#fff",
      minHeight: "100%",
      minWidth: "100%"
  }),
  placeholder: (base, state) => ({
      ...base,
      color: "#9C9A9A",
      fontFamily: "Circular"
  }),
  option: (base, state) => ({
      ...base,
      width: "100%",
      background: state.isFocused ? "var(--gradient-a)" : "#fff",
      marginBottom: "5px",
      fontSize: "16px",
      padding: "3px 10px",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        color: "#fff"
      }
    }),
    singleValue: (base, state) => ({
    ...base,
    color: "#fff",
    }),
  menu: (base) => ({
  ...base,
  zIndex: 10,
  width: "200px"
  })
}

export default function MySelect({
  id,
  placeholder,
  options,
  selectedValue,
  onValueChange, 
}) {
  return (
    <Select
      inputId={id}
      placeholder={placeholder}
      options={options}
      value={selectedValue}
      onChange={onValueChange}
      styles={customStyles}
      components={{ IndicatorSeparator: () => null }}
    />
  );
}