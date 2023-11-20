import React from "react";
import Navbar from "../Navbar";
import { FormattedMessage } from "react-intl";

const Header: React.FC = () => {
  return (
    <header className="w-full absolute pt-6">
      <div className="flex items-center md:justify-end space-x-5 justify-center pb-5 max-w-7xl w-full mx-auto">
        <a
          href="tel:+375333482482"
          className="flex justify-end text-white text-xl"
        >
          <FormattedMessage id="PHONE" />
        </a>

        <a href="viber://chat?number=%2B375333482482">
          <svg
            id="Layer_1"
            width={50}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <circle
              style={{
                fill: "#6F3FAA",
              }}
              cx={256}
              cy={256}
              r={256}
            />
            <path
              style={{
                fill: "#512D84",
              }}
              d="M367.061,140.443c-62.312-15.05-124.735-32.654-188.637-10.288 c-41.374,15.515-41.374,60.337-39.65,98.263c0,10.343-12.067,24.135-6.896,36.202c10.343,34.478,18.963,68.956,55.165,86.195 c5.172,3.448,0,10.343,3.448,15.515c-1.724,0-5.172,1.724-5.172,3.448c0,8.263,3.708,20.902,1.245,29.05L296.57,508.788 c113.09-18.01,201.478-110.068,213.914-224.921L367.061,140.443z"
            />
            <g>
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M391.427,179.924l-0.084-0.338c-6.84-27.653-37.678-57.325-65.998-63.498l-0.319-0.066 c-45.806-8.738-92.251-8.738-138.047,0l-0.329,0.066c-28.31,6.173-59.149,35.847-65.998,63.498l-0.076,0.338 c-8.456,38.617-8.456,77.781,0,116.398l0.076,0.338c6.558,26.472,35.099,54.782,62.362,62.567v30.868 c0,11.173,13.615,16.66,21.357,8.597l31.275-32.509c6.784,0.379,13.571,0.591,20.356,0.591c23.057,0,46.125-2.181,69.023-6.549 l0.319-0.066c28.32-6.173,59.158-35.847,65.998-63.498l0.084-0.338C399.882,257.705,399.882,218.543,391.427,179.924z  M366.676,290.723c-4.567,18.041-27.981,40.469-46.585,44.613c-24.355,4.632-48.904,6.611-73.428,5.932 c-0.488-0.014-0.957,0.176-1.296,0.526c-3.481,3.572-22.835,23.442-22.835,23.442l-24.288,24.928 c-1.776,1.852-4.896,0.591-4.896-1.964v-51.136c0-0.845-0.603-1.562-1.433-1.726c-0.005-0.002-0.009-0.002-0.014-0.003 c-18.604-4.144-42.01-26.572-46.585-44.613c-7.611-34.906-7.611-70.292,0-105.198c4.575-18.041,27.981-40.469,46.585-44.613 c42.536-8.09,85.664-8.09,128.191,0c18.613,4.144,42.018,26.572,46.585,44.613C374.296,220.431,374.296,255.817,366.676,290.723z"
              />
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M296.47,314.327c-2.86-0.869-5.585-1.452-8.118-2.501c-26.231-10.883-50.371-24.923-69.492-46.444 c-10.874-12.238-19.385-26.055-26.579-40.677c-3.412-6.934-6.287-14.139-9.218-21.299c-2.672-6.528,1.264-13.272,5.408-18.192 c3.889-4.617,8.894-8.149,14.314-10.754c4.23-2.032,8.402-0.86,11.492,2.725c6.678,7.752,12.814,15.9,17.78,24.886 c3.055,5.527,2.217,12.283-3.32,16.044c-1.346,0.914-2.572,1.988-3.825,3.02c-1.1,0.905-2.134,1.819-2.888,3.044 c-1.377,2.241-1.443,4.886-0.557,7.323c6.827,18.761,18.334,33.351,37.219,41.21c3.022,1.257,6.056,2.72,9.538,2.315 c5.83-0.681,7.718-7.077,11.804-10.418c3.993-3.265,9.097-3.308,13.398-0.586c4.303,2.724,8.473,5.646,12.619,8.601 c4.07,2.9,8.121,5.735,11.874,9.042c3.61,3.179,4.853,7.349,2.82,11.662c-3.72,7.901-9.135,14.472-16.944,18.668 C301.59,313.178,298.956,313.561,296.47,314.327C293.61,313.458,298.956,313.561,296.47,314.327z"
              />
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M256.071,165.426c34.309,0.962,62.49,23.731,68.529,57.651c1.029,5.78,1.395,11.688,1.853,17.555 c0.193,2.467-1.205,4.811-3.867,4.844c-2.75,0.033-3.987-2.269-4.167-4.734c-0.353-4.882-0.598-9.787-1.271-14.627 c-3.551-25.559-23.931-46.704-49.371-51.241c-3.829-0.683-7.745-0.862-11.624-1.269c-2.451-0.257-5.661-0.405-6.204-3.453 c-0.455-2.555,1.701-4.589,4.134-4.72C254.742,165.393,255.407,165.424,256.071,165.426 C290.382,166.388,255.407,165.424,256.071,165.426z"
              />
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M308.212,233.019c-0.057,0.429-0.086,1.436-0.338,2.384c-0.91,3.444-6.134,3.875-7.335,0.4 c-0.357-1.031-0.41-2.205-0.412-3.315c-0.012-7.266-1.591-14.526-5.256-20.849c-3.767-6.499-9.523-11.96-16.272-15.267 c-4.082-1.998-8.495-3.241-12.969-3.98c-1.955-0.324-3.931-0.519-5.896-0.793c-2.381-0.331-3.653-1.848-3.539-4.194 c0.105-2.198,1.712-3.781,4.108-3.644c7.873,0.446,15.479,2.15,22.48,5.856c14.234,7.539,22.366,19.437,24.74,35.326 c0.107,0.721,0.279,1.433,0.334,2.155C307.991,228.88,308.076,230.665,308.212,233.019 C308.155,233.446,308.076,230.665,308.212,233.019z"
              />
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M286.872,232.188c-2.87,0.052-4.406-1.538-4.703-4.168c-0.205-1.834-0.369-3.694-0.807-5.48 c-0.862-3.517-2.731-6.775-5.689-8.93c-1.396-1.017-2.979-1.758-4.636-2.238c-2.105-0.609-4.293-0.441-6.392-0.955 c-2.281-0.559-3.543-2.407-3.184-4.546c0.326-1.948,2.22-3.468,4.349-3.313c13.302,0.96,22.809,7.837,24.166,23.497 c0.097,1.105,0.209,2.272-0.036,3.331C289.518,231.193,288.178,232.1,286.872,232.188 C284.001,232.239,288.178,232.1,286.872,232.188z"
              />
            </g>
            <path
              style={{
                fill: "#D1D1D1",
              }}
              d="M391.427,179.924l-0.084-0.338c-3.834-15.501-15.212-31.635-29.458-43.911l-19.259,17.068 c11.452,9.125,21.264,21.766,24.052,32.78c7.62,34.907,7.62,70.292,0,105.2c-4.567,18.041-27.982,40.469-46.585,44.613 c-24.355,4.632-48.904,6.611-73.428,5.932c-0.488-0.014-0.957,0.176-1.296,0.526c-3.481,3.572-22.835,23.442-22.835,23.442 l-24.288,24.928c-1.776,1.852-4.896,0.593-4.896-1.964v-51.136c0-0.845-0.603-1.562-1.433-1.726c-0.005,0-0.009-0.002-0.014-0.002 c-10.573-2.355-22.692-10.618-32.028-20.621l-19.03,16.863c11.885,12.929,27.214,23.381,42.168,27.651v30.868 c0,11.173,13.615,16.66,21.357,8.597l31.275-32.509c6.784,0.379,13.569,0.591,20.356,0.591c23.057,0,46.125-2.181,69.023-6.549 l0.319-0.065c28.32-6.173,59.158-35.845,65.998-63.498l0.084-0.338C399.882,257.705,399.882,218.543,391.427,179.924z"
            />
            <path
              style={{
                fill: "#FFFFFF",
              }}
              d="M296.47,314.327C298.956,313.561,293.61,313.458,296.47,314.327L296.47,314.327z"
            />
            <path
              style={{
                fill: "#D1D1D1",
              }}
              d="M317.921,281.664c-3.753-3.305-7.806-6.142-11.874-9.042c-4.146-2.955-8.316-5.877-12.619-8.601 c-4.301-2.722-9.404-2.679-13.398,0.586c-4.086,3.341-5.973,9.737-11.804,10.418c-3.481,0.405-6.516-1.059-9.538-2.315 c-11.619-4.834-20.435-12.226-27.098-21.559l-14.16,12.55c0.481,0.557,0.94,1.129,1.429,1.679 c19.122,21.521,43.263,35.561,69.492,46.444c2.531,1.05,5.258,1.634,8.118,2.501c-2.86-0.869,2.488-0.765,0,0 c2.488-0.765,5.12-1.15,7.327-2.332c7.811-4.196,13.224-10.768,16.944-18.668C322.774,289.013,321.531,284.843,317.921,281.664z"
            />
            <g>
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M256.159,165.431c-0.029,0-0.057-0.003-0.086-0.003 C256.045,165.426,256.081,165.428,256.159,165.431z"
              />
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M256.072,165.426c0.029,0,0.057,0.003,0.086,0.003C258.062,165.497,289.03,166.35,256.072,165.426z"
              />
            </g>
            <g>
              <path
                style={{
                  fill: "#D1D1D1",
                }}
                d="M305.285,185.837l-6.037,5.351c9.487,9.23,16.029,21.463,17.899,34.925 c0.672,4.842,0.919,9.745,1.272,14.627c0.179,2.467,1.415,4.768,4.167,4.736c2.663-0.033,4.06-2.376,3.867-4.844 c-0.459-5.866-0.824-11.776-1.853-17.555C321.957,208.229,315.07,195.518,305.285,185.837z"
              />
              <path
                style={{
                  fill: "#D1D1D1",
                }}
                d="M307.521,224.939c-1.729-11.578-6.532-21.026-14.51-28.224l-6.02,5.335 c3.113,2.763,5.806,6.008,7.88,9.587c3.665,6.323,5.244,13.583,5.256,20.849c0.002,1.11,0.055,2.284,0.412,3.317 c1.203,3.477,6.425,3.046,7.335-0.4c0.252-0.95,0.281-1.957,0.338-2.384c-0.057,0.429-0.138-2.353,0,0 c-0.138-2.353-0.222-4.139-0.357-5.923C307.802,226.371,307.629,225.659,307.521,224.939z"
              />
            </g>
            <g>
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M308.212,233.019C308.076,230.665,308.155,233.446,308.212,233.019L308.212,233.019z"
              />
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M286.872,232.188c0.045-0.003,0.088-0.026,0.131-0.031c-0.121,0-0.307,0.003-0.498,0.01 C286.629,232.17,286.742,232.189,286.872,232.188z"
              />
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M286.872,232.188c-0.129,0.002-0.243-0.017-0.367-0.021 C285.884,232.184,285.243,232.217,286.872,232.188z"
              />
              <path
                style={{
                  fill: "#FFFFFF",
                }}
                d="M287.003,232.157c-0.045,0.005-0.088,0.028-0.131,0.031 C287.208,232.165,287.179,232.157,287.003,232.157z"
              />
            </g>
            <path
              style={{
                fill: "#D1D1D1",
              }}
              d="M280.814,207.525l-6.128,5.432c0.338,0.205,0.669,0.419,0.99,0.652 c2.958,2.155,4.827,5.413,5.689,8.93c0.438,1.786,0.6,3.644,0.807,5.48c0.283,2.513,1.71,4.058,4.336,4.148 c0.191-0.005,0.379-0.009,0.498-0.01c1.264-0.14,2.531-1.026,2.936-2.774c0.245-1.057,0.133-2.226,0.036-3.331 C289.216,217.297,285.906,211.29,280.814,207.525z"
            />
          </svg>
        </a>

        <a href="https://t.me/REMKMM">
          <svg
            width="50"
            height="50"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={16} cy={16} r={14} fill="url(#paint0_linear_87_7225)" />
            <path
              d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_87_7225"
                x1={16}
                y1={2}
                x2={16}
                y2={30}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#37BBFE" />
                <stop offset={1} stopColor="#007DBB" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
