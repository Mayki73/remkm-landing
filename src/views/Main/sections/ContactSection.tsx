import React from "react";
import { FormattedMessage } from "react-intl";
import PhoneNumberForm from "../PhoneNumberForm";
import ContactBackground from "../../../assets/contact_bg.png";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact-section"
      className="flex flex-col items-center text-white bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${ContactBackground})` }}
    >
      <div className="flex flex-col md:flex-row justify-center max-w-7xl w-full py-10 md:py-20 px-5 md:mx-auto">
        <div className="space-y-20">
          <h1 className="text-center text-2xl max-w-[60rem]">
            <FormattedMessage
              id="VISIT_US"
              values={{
                b: (chunks) => (
                  <span className="text-[#B8621B] font-bold">{chunks}</span>
                ),
                t: (chunks) => (
                  <p className="text-[#B8621B] font-bold mb-5 text-3xl md:text-5xl">
                    {chunks}
                  </p>
                ),
              }}
            />
          </h1>

          <div className="flex flex-col md:flex-row space-x-0 space-y-10 md:space-y-0 md:space-x-10 justify-between">
            <div className="bg-white p-10 rounded-md space-y-8">
              <div>
                <p className="text-base text-gray-700 font-bold">
                  <FormattedMessage id="SERVICE_HOURS.LABEL" />
                </p>
                <p className="text-black text-lg">
                  <FormattedMessage id="SERVICE_HOURS" />
                </p>
              </div>

              <div>
                <p className="text-base text-gray-700 font-bold">
                  <FormattedMessage id="SERVICE_HOURS.LABEL" />
                </p>
                <p className="text-black text-lg">
                  <FormattedMessage id="CALL_CENTRE" />
                </p>
              </div>
              <div>
                <p className="text-base text-gray-700 font-bold">
                  <FormattedMessage id="PHONE.LABEL" />
                </p>
                <p className="text-black text-lg">
                  <FormattedMessage id="PHONE" />
                </p>
              </div>
              <div>
                <p className="text-base text-gray-700 font-bold">
                  <FormattedMessage id="EMAIL.LABEL" />
                </p>
                <p className="text-black text-lg">
                  <FormattedMessage id="EMAIL" />
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-10 h-fit bg-white rounded-md text-black space-y-10">
              <h1 className="text-xl max-w-[18rem]">
                <FormattedMessage
                  id="INVITE_AFTER_REPAIR.FORM.TITLE"
                  values={{
                    b: (chunks) => (
                      <p className="text-[#B8621B] font-bold text-4xl mb-3">
                        {chunks}
                      </p>
                    ),
                  }}
                />
              </h1>

              <PhoneNumberForm className="max-w-[20rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
