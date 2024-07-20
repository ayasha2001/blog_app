"use client";
// Base Imports
import React from "react";

// Package Imports
import { Formik } from "formik";
import * as Yup from "yup";

// Component Imports
import FlagInput from "../components/common/FlagInput";
import SubscribeDialog from "../components/about/SubscribeDialog";

const config = [
  {
    type: "text",
    placeholder: "Enter blog title",
    name: "title",
    label: "Blog Title",
  },
  {
    type: "textarea",
    placeholder: "Write your blog here...",
    name: "content",
    label: "Main Blog",
  },
  {
    type: "keywords",
    placeholder: "Enter keywords",
    name: "keywords",
    label: "Keywords",
  },
  {
    type: "file",
    name: "photo",
    label: "Upload Photo",
  },
];
const initialValues = {
  title: "",
  content: "",
  keywords: [],
  photo: null,
};

const validationSchema = Yup.object({
  title: Yup.string().required("Enter Title"),
  content: Yup.string().required("Enter Content"),
  // keywords: Yup.required("Keywords will help us to feature your blog"),
  photo: Yup.mixed().notRequired(),
});

const handleSubmitForm = (values: any) => {
  console.log(values);
  // Add your form submission logic here
};

const writeWithUs = () => {
  return (
    <div className="sm:flex sm:bg-themeGrey h-full w-full absolute p-4 sm:p-0">
      <div className="hidden sm:flex sm:bg-themePink sm:h-1/2 md:w-1/5 sm:relative lg:left-28 sm:my-auto"></div>{" "}
      <div className="flex flex-col w-full items-center bg-white sm:w-3/5 my-auto">
        <h1 className="text-themeRed text-3xl sm:text-6xl text-center my-10">
          Write with Us..
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
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
              setFieldValue,
            }: any = context;

            return (
              <form
                onSubmit={handleSubmit}
                className="sm:my-10 w-full lg:w-[40vw] bg-white rounded-lg p-4"
              >
                {config?.map((field, idx) => (
                  <div key={idx} className="mb-4">
                    {field?.type === "textarea" ? (
                      <textarea
                        placeholder={field?.placeholder}
                        name={field?.name}
                        value={values[field?.name]}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        rows={8}
                        className="w-full px-3 py-2 border border-gray-300 overflow-y-auto rounded-sm focus:outline-none focus:border-themeRed"
                      />
                    ) : field?.type === "keywords" ? (
                      <FlagInput
                        placeholder={field.placeholder}
                        value={values[field.name]}
                        onChange={(keywords: string[]) => {
                          setFieldValue("keywords", keywords);
                        }}
                      />
                    ) : field?.type === "file" ? (
                      <input
                        type={field?.type}
                        name={field?.name}
                        onBlur={handleBlur}
                        onChange={(event: any) => {
                          setFieldValue("photo", event.currentTarget.files[0]);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-themeRed"
                      />
                    ) :(
                      <input
                        type={field?.type}
                        placeholder={field?.placeholder}
                        name={field?.name}
                        value={values[field?.name]}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-themeRed"
                      />
                    )}
                    {errors[field?.name] && touched[field?.name] && (
                      <p className="text-sm text-themeRed">
                        {errors[field?.name]}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="btn-red"
                >
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
      <SubscribeDialog/>
    </div>
  );
};

export default writeWithUs;