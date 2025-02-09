import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SubscribeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    setTimeout(openModal, 3000)
  },[])

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your subscription logic here
    closeModal();
  };

  return (
    <>
      {/* <button
        className="bg-themePink text-white py-2 px-4 rounded-sm"
        onClick={openModal}
      >
        Subscribe
      </button> */}

      <Transition appear show={isOpen} as={Fragment}>
      {/* <Transition appear show={true} as={Fragment}> */}
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Subscribe to our Blog
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Enter your email address to receive notifications about new posts.
                    </p>
                  </div>

                  <form onSubmit={handleSubscribe} className="mt-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-themeRed"
                    />
                    <button
                      type="submit"
                      className="btn-red"
                    >
                      Subscribe
                    </button>
                  </form>

                  <button
                    type="button"
                    className="btn-grey"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SubscribeDialog;
