import React, { useEffect } from "react";

import Select from "react-select";
type optionType = {
  options: any;
  name: string;
  placeholder?: string;
  setValue?: any;
  setData?: any;
  defaultValue?: any;
  isMulti: boolean;
};
const ReactMultiSelect = ({
  options,
  name,
  placeholder,
  setValue,
  setData,
  defaultValue,
  isMulti,
}: optionType) => {
  const colorStyles = {
    control: (styles: any, { isFocused }: any) => {
      return {
        ...styles,
        backgroundColor: "#F9FAFB",
        borderColor: isFocused ? "#009788" : "#D9DEE3",
        borderRadius: "8px",
        fontSize: "14px",
        padding: "2px",
      };
    },
    option: (styles: any, { isFocused }: any) => {
      return {
        ...styles,
        color: isFocused ? "white" : null,
        backgroundColor: isFocused ? "#009788" : null,
      };
    },
    indicatorSeparator: (styles: any) => ({
      ...styles,
      display: "none",
    }),
    multiValueRemove: (styles: any) => ({
      ...styles,
      color: "white",
      ":hover": {
        backgroundColor: "#009788",
        color: "white",
      },
    }),
  };

  /* Set Default value */
  useEffect(() => {
    if (defaultValue) {
      const transformedValue = isMulti
        ? defaultValue.map((option: any) => ({
            id: option.value,
            name: option.label,
          }))
        : { id: defaultValue.value, name: defaultValue.label };
      setValue && setValue(name, transformedValue);
      setData && setData(transformedValue);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Select
        options={options}
        isMulti={isMulti}
        defaultValue={defaultValue ? defaultValue : null}
        styles={colorStyles}
        name={name}
        placeholder={placeholder}
        onChange={(options: any) => {
          isMulti
            ? (setValue &&
                setValue(
                  name,
                  options.map((option: any) => {
                    return { id: option.value, name: option.label };
                  })
                )) ||
              (setData &&
                setData(
                  options.map((option: any) => {
                    return { id: option.value, name: option.label };
                  })
                ))
            : (setValue &&
                setValue(name, { id: options.value, name: options.label })) ||
              (setData && setData({ id: options.value, name: options.label }));
        }}
      />
    </div>
  );
};

export default ReactMultiSelect;
