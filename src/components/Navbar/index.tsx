import React, { useDeferredValue } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { useIntl } from "react-intl";
import Logo from "../../assets/logo-remkm.png";

const Navbar: React.FC = () => {
  const intl = useIntl();
  const deferredLogo = useDeferredValue(Logo);
  const pages = [
    {
      name: intl.formatMessage({ id: "NAVBAR.COST" }),
      to: "price-section",
    },
    {
      name: intl.formatMessage({ id: "NAVBAR.DIAGNOSTIC" }),
      to: "diagnostic-section",
    },
    {
      name: intl.formatMessage({ id: "NAVBAR.REPAIR" }),
      to: "repair-section",
    },
    {
      name: intl.formatMessage({ id: "NAVBAR.RESULT" }),
      to: "result-section",
    },
    {
      name: intl.formatMessage({ id: "NAVBAR.SPECIAL_THINGS" }),
      to: "special-things-section",
    },
    {
      name: intl.formatMessage({ id: "NAVBAR.CONTACTS" }),
      to: "contact-section",
    },
  ];

  return (
    <Disclosure as="nav" className="w-full absolute">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between">
              <div className="w-full flex justify-between">
                <div className="flex flex-shrink-0 items-center text-white">
                  <img
                    className="w-full h-[7rem]"
                    src={deferredLogo}
                    alt="Логотип компании REMKM"
                  />
                </div>
                <div className="hidden text-white sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {pages.map((page) => {
                    return (
                      <Link
                        key={page.name}
                        to={page.to}
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust the offset if needed to account for fixed headers or other elements
                        duration={500}
                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium hover:border-gray-300 hover:cursor-pointer"
                      >
                        {page.name}
                      </Link>
                    );
                  })}
                  {/* <NavLink
                    to="#"
                    className="inline-flex items-center border-b-2 border-gray-300 px-1 pt-1 text-sm font-medium"
                  >
                    <FormattedMessage id="NAVBAR.REPAIR_CONDITIONS" />
                  </NavLink> */}
                </div>
              </div>

              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex justify-center text-white rounded-md p-2 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 mt-6 bg-black/90 rounded-b-lg">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {pages.map((page) => {
                return (
                  <Disclosure.Button
                    as={Link}
                    to={page.to}
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset if needed to account for fixed headers or other elements
                    duration={500}
                    className="block py-2 pl-3 pr-4 text-base font-medium border-b border-gray-400 text-white hover:bg-gray-50 hover:text-gray-700"
                  >
                    {page.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
