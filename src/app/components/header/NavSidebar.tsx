"use client";

// Base Imports
import { useState, Fragment } from "react";

// Component Imports
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

// Other Imports
import { NAV_ITEMS } from "./config";

const NavSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Bars3Icon className="h-4 w-4 mx-auto text-white" onClick={() => setIsOpen(true)}/>
      {/* <button className='' >☰</button> */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300 sm:duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300 sm:duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="w-screen max-w-md">
                    <div className="h-full flex flex-col bg-themeRed shadow-xl">
                      <div className="px-4 py-6 bg-themeRed sm:px-6">
                        <div className="flex items-start justify-between">
                          <h2 className="text-lg font-medium text-gray-900">
                            Sidebar
                          </h2>
                          <div className="ml-3 flex items-center">
                            <button
                              type="button"
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              onClick={onClose}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6 shadow-md" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex-1 px-4 sm:px-6">
                        {/* Sidebar Body */}
                        <div className="py-6">
                          {NAV_ITEMS?.map((item: any, idx: any) => (
                            <a
                              href={item?.href}
                              className="text-white hover:bg-white hover:text-black py-4"
                            >
                              {item?.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default NavSidebar;
