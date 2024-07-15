"use client";
// Base Imports
import React from "react";

// Other Imports
import { Formik } from "formik";
import * as Yup from "yup";

const Comments = () => {
  const config = [
    {
      type: "textarea",
      placeholder: "Share you views here..",
      name: "comment",
      label: "Comment",
    },
    {
      type: "text",
      placeholder: "email@email.com",
      name: "email",
      label: "Email",
    },
    {
      type: "text",
      placeholder: "John Doe",
      name: "name",
      label: "Name",
    },
    {
      type: "text",
      placeholder: "Website",
      name: "website",
      label: "Website",
    },
  ];

  const handleSubmitForm = (values: any) => {
    console.log(values,"values");
  };

  const initialValues = {
    email: "",
    name: "",
    website: "",
    comment: "",
  };

  const validationObj = Yup.object({
    email: Yup.string().required("Enter email").email(),
    name: Yup.string().required("Enter name"),
    website: Yup.string().url("Invalid URL"),
    comment: Yup.string().required("Enter your comment"),
  });

  return (
    <div className="flex flex-col">
      <Formik
        initialValues={initialValues}
        validationSchema={validationObj}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
      >
        {(context) => {
          const {
            values,
            errors,
            handleSubmit,
            handleBlur,
            touched,
            handleChange,
          }: any = context;

          return (
            <form onSubmit={handleSubmit} className="p-10">
              {config.map((field, idx) => (
                <div key={idx} className="mb-4">
                  {field?.type === "textarea" ? (
                    <textarea
                      placeholder={field?.placeholder}
                      name={field?.name}
                      value={values[field?.name]}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      rows={4} // Adjust height as needed
                      className="w-full px-3 py-2 border border-themeBlack rounded-sm /focus:outline-none focus:border-themePink"
                    />
                  ) : (
                    <input
                      type={field?.type}
                      placeholder={field?.placeholder}
                      name={field?.name}
                      value={values[field?.name]}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-themeBlack rounded-sm focus:outline-none focus:border-themePink"
                    />
                  )}
                  {errors[field?.name] && touched[field?.name] && (
                    <p className="text-themeRed text-sm">{errors[field?.name]}</p>
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                className="text-white text-lg py-2 px-4  mt-4 bg-themePink hover:bg-themeRed rounded-sm transition duration-300"
              >
                Post Comment
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Comments;
