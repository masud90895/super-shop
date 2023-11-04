import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface InputFieldProps {
  label?: string;
  name?: string;
  required?: boolean;
  errors?: any;
  defaultValue?: any;
  setValue?: any;
  height?: string;
}

const ReactQuills = ({
  label,
  name,
  required,
  errors,
  setValue,
  height = "200",
}: InputFieldProps) => {
  return (
    <div className="w-full mb-[40px]">
      {label && (
        <div className="flex gap-1 items-center mb-1">
          <label
            className={`${
              errors?.name
                ? "text-[13px] leading-6 font-inter text-rose-500 font-semibold capitalize"
                : "text-[13px] leading-6 font-inter text-gray-40 font-semibold capitalize"
            }`}
          >
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        </div>
      )}

      <ReactQuill
        theme="snow"
        onChange={(e) => setValue(name, e)}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            [{ color: [] }, { background: [] }],
            ["link", "image"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "color",
          "background",
          "link",
          "image",
        ]}
        style={{ maxHeight: height }}
        placeholder={`Write ${name}...`}
        className="md:h-40  px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
      />
      {errors?.name && <p className="text-rose-500">{label} is required</p>}
    </div>
  );
};

export default ReactQuills;
