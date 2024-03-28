import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SocialLogin() {
  return (
    <>
      <div className="w-full bg-neutral-400 h-px" />
      <div className="flex flex-col gap-2">
        <Link
          className="primary-btn h-10 flex items-center justify-center gap-2"
          href={"/sms"}
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h- -ml-4"/>
          </span>
          <span>Sign up with SMS</span>

        </Link>

        <Link
          className="primary-btn h-10 flex items-center justify-center gap-2"
          href={"/github/start"}
        >
          <svg
            className="w-6 h-6 "
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            viewBox="0 0 20 20"
          >
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
            />
          </svg>
          <span>Sign up with Github</span>
        </Link>
        <Link
          className="primary-btn h-10 flex items-center justify-center gap-2"
          href={"/google/start"}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            viewBox="-0.5 0 48 48"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#FBBC05"
                d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 0 0 .213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 0 1 9.827 24"
              />
              <path
                fill="#EB4335"
                d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 0 0-21.09 13.071l7.908 6.04a13.849 13.849 0 0 1 13.182-9.51"
              />
              <path
                fill="#34A853"
                d="M23.714 37.867a13.849 13.849 0 0 1-13.182-9.51l-7.909 6.038a23.43 23.43 0 0 0 21.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"
              />
              <path
                fill="#4285F4"
                d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"
              />
            </g>
          </svg>
          <span>Sign up with Google</span>
        </Link>
      </div>
    </>
  );
}
