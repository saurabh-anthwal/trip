import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white">
    <footer className="bg-white text-[#111] py-12 max-w-7xl mx-auto">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Flexbox Layout for 5 Columns */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Left Section - Logo & Description */}
          <div className="flex-1 min-w-[250px] max-w-[306px]">
            <h2 className="text-3xl font-bold">
              <span className="text-black font-extrabold italic">trip</span>
              <span className="text-orange-500 font-extrabold italic">
                lanza
              </span>
            </h2>
            <p className="mt-4 text-gray-600 leading-6">
              Embark on the adventure of a lifetime with us, whether it’s a
              thrilling tour, vibrant city exploration, or a peaceful mountain
              retreat. Your perfect getaway awaits!
            </p>
            <div className="flex gap-4 mt-4 text-orange-500 text-xl">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>

          {/* Product Section */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4 text-black">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Culture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4 text-black">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Server status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Report a bug
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Chat support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Contacts us
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                >
                  <path
                    d="M17.6071 3.71436V11.9325C17.6071 12.4774 17.3906 12.9999 17.0053 13.3852C16.62 13.7705 16.0975 13.987 15.5526 13.987H3.22542C2.68053 13.987 2.15795 13.7705 1.77265 13.3852C1.38736 12.9999 1.1709 12.4774 1.1709 11.9325V3.71436"
                    stroke="#170F49"
                    stroke-width="1.38064"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.6071 3.71419C17.6071 3.1693 17.3906 2.64672 17.0053 2.26142C16.62 1.87613 16.0975 1.65967 15.5526 1.65967H3.22542C2.68053 1.65967 2.15795 1.87613 1.77265 2.26142C1.38736 2.64672 1.1709 3.1693 1.1709 3.71419L8.3001 8.16567C8.62663 8.36975 9.00394 8.47796 9.389 8.47796C9.77406 8.47796 10.1514 8.36975 10.4779 8.16567L17.6071 3.71419Z"
                    stroke="#170F49"
                    stroke-width="1.38064"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                official.triplanza@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M11.6104 17.4117L11.6194 17.4179C12.3956 17.9121 13.3171 18.1267 14.2317 18.0263C15.1464 17.9259 15.9994 17.5164 16.6498 16.8655L17.2148 16.3005C17.34 16.1753 17.4394 16.0268 17.5071 15.8632C17.5749 15.6997 17.6098 15.5244 17.6098 15.3474C17.6098 15.1704 17.5749 14.9951 17.5071 14.8316C17.4394 14.668 17.34 14.5194 17.2148 14.3943L14.8317 12.013C14.7065 11.8878 14.558 11.7884 14.3944 11.7207C14.2309 11.6529 14.0556 11.618 13.8786 11.618C13.7016 11.618 13.5263 11.6529 13.3628 11.7207C13.1992 11.7884 13.0506 11.8878 12.9255 12.013C12.6728 12.2656 12.3302 12.4075 11.9729 12.4075C11.6156 12.4075 11.2729 12.2656 11.0202 12.013L7.20972 8.20154C6.95712 7.94886 6.81522 7.6062 6.81522 7.24891C6.81522 6.89162 6.95712 6.54896 7.20972 6.29628C7.33494 6.17115 7.43426 6.02257 7.50203 5.85904C7.5698 5.6955 7.60468 5.52022 7.60468 5.3432C7.60468 5.16618 7.5698 4.9909 7.50203 4.82736C7.43426 4.66383 7.33494 4.51525 7.20972 4.39012L4.82747 2.00877C4.57479 1.75616 4.23213 1.61426 3.87484 1.61426C3.51755 1.61426 3.17489 1.75616 2.92221 2.00877L2.35629 2.57379C1.70557 3.22431 1.29625 4.07736 1.19596 4.992C1.09568 5.90664 1.31043 6.82812 1.80475 7.60418L1.81014 7.61316C4.42071 11.4756 7.74751 14.8018 11.6104 17.4117V17.4117Z"
                    stroke="#170F49"
                    stroke-width="1.38064"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                +91 9760417744
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                >
                  <path
                    d="M15.1548 8.13896C15.1548 13.4434 9.72182 16.7113 8.59276 17.3338C8.53022 17.3683 8.45995 17.3864 8.38852 17.3864C8.31709 17.3864 8.24682 17.3683 8.18427 17.3338C7.05437 16.7113 1.62305 13.4434 1.62305 8.13896C1.62305 3.91027 4.16026 0.950195 8.38894 0.950195C12.6176 0.950195 15.1548 3.91027 15.1548 8.13896Z"
                    stroke="#170F49"
                    stroke-width="1.38064"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.00586 7.71644C5.00586 8.61366 5.36228 9.47412 5.9967 10.1085C6.63113 10.743 7.49159 11.0994 8.38881 11.0994C9.28602 11.0994 10.1465 10.743 10.7809 10.1085C11.4153 9.47412 11.7718 8.61366 11.7718 7.71644C11.7718 6.81923 11.4153 5.95876 10.7809 5.32434C10.1465 4.68991 9.28602 4.3335 8.38881 4.3335C7.49159 4.3335 6.63113 4.68991 5.9967 5.32434C5.36228 5.95876 5.00586 6.81923 5.00586 7.71644V7.71644Z"
                    stroke="#170F49"
                    stroke-width="1.38064"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Aamwala, Dehradun, Uttarakhand 248001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-[#6F6C90] text-right text-[16px]">
          All Rights Reserved |
          <span className="text-[#FF7F00] font-semibold text-[16px]">
            Triplanza X Indranova Design Studio
          </span>
        </div>
      </div>
    </footer>
    </div>
  );
}
