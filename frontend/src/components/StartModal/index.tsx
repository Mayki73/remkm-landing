import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IonIcon } from "@ionic/react";
import { addOutline, giftOutline } from "ionicons/icons";
import { FormattedMessage } from "react-intl";
import PhoneNumberForm from "../../views/Main/PhoneNumberForm";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const StartModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative flex flex-col lg:flex-row w-full text-white md:w-1/2 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                <div className="absolute right-0 top-0 pr-4 pt-4 block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setIsOpen()}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="bg-black p-10">
                  <div className="p-5 border-b border-gray-600">
                    <h2 className="font-bold text-2xl text-center">
                      <FormattedMessage id="START_MODAL.WARNING" />
                    </h2>
                  </div>

                  <div className="flex border-b border-gray-600 justify-between items-center py-5 text-xl">
                    <div className="text-center space-y-3">
                      <IonIcon
                        icon={giftOutline}
                        className="text-[#B8621B] w-24 h-24"
                      />
                      <p>
                        <FormattedMessage
                          id="START_MODAL.COFFEE_GIFT"
                          values={{
                            b: (chunks) => (
                              <p className="text-[#B8621B] font-bold text-3xl">
                                {chunks}
                              </p>
                            ),
                          }}
                        />
                      </p>
                    </div>

                    <IonIcon
                      icon={addOutline}
                      className="w-14 h-14 font-bold"
                    />

                    <div className="space-y-5 text-center">
                      <p>
                        <FormattedMessage
                          id="START_MODAL.COFFEE_DISCOUNT"
                          values={{
                            b: (chunks) => (
                              <p className="text-[#B8621B] font-bold text-3xl">
                                {chunks}
                              </p>
                            ),
                          }}
                        />
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <h2 className="font-bold text-xl text-center">
                      <FormattedMessage id="START_MODAL.LEFT_PHONE" />
                    </h2>
                  </div>
                </div>

                <div className="py-14 px-5 text-center mx-auto space-y-3 text-black">
                  <h2 className="text-lg">
                    <FormattedMessage id="START_MODAL.DO_YOU_HAVE_ANY_QUESTIONS" />
                  </h2>
                  <p>
                    <FormattedMessage id="START_MODAL.CALL" />
                  </p>
                  <PhoneNumberForm setIsOpenModal={setIsOpen}/>
                  <p className="text-gray-600 text-xs">
                    <FormattedMessage id="START_MODAL.CALL_IS_FREE" />
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default StartModal;
