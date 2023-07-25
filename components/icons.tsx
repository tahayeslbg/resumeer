import {
  Loader2,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg width="32" height="32" viewBox="0 0 32 32" {...props}>
      <path
        d="M15.6712 32L0 21.2285L15.6712 10.457L31.3424 21.2285L15.6712 32Z"
        className="fill-slate-900 dark:fill-slate-100"
      />
      <path
        d="M16.4548 21.2285H31.3424L15.6712 10.457H0.783569L16.4548 21.2285Z"
        className="fill-slate-700 dark:fill-slate-200"
      />
      <rect
        width="18.825"
        height="18.825"
        transform="matrix(0.824103 -0.56644 0.824103 0.56644 0.972565 10.6631)"
        className="fill-slate-700 dark:fill-slate-200 opacity-50"
      />
    </svg>
  ),
  logoText: (props: LucideProps) => (
    <svg
      width="115"
      height="19"
      viewBox="0 0 115 19"
      className="fill-slate-900 dark:fill-white"
      {...props}
    >
      <path
        d="M0.721591 18V0.545454H7.26705C8.60795 0.545454 9.73295 0.778409 10.642 1.24432C11.5568 1.71023 12.2472 2.36364 12.7131 3.20454C13.1847 4.03977 13.4205 5.0142 13.4205 6.12784C13.4205 7.24716 13.1818 8.21875 12.7045 9.04261C12.233 9.8608 11.5369 10.4943 10.6165 10.9432C9.69602 11.3864 8.56534 11.608 7.22443 11.608H2.5625V8.98295H6.7983C7.58239 8.98295 8.22443 8.875 8.72443 8.65909C9.22443 8.4375 9.59375 8.11648 9.83239 7.69602C10.0767 7.26989 10.1989 6.74716 10.1989 6.12784C10.1989 5.50852 10.0767 4.98011 9.83239 4.54261C9.58807 4.09943 9.21591 3.7642 8.71591 3.53693C8.21591 3.30398 7.57102 3.1875 6.78125 3.1875H3.88352V18H0.721591ZM9.73864 10.0909L14.0597 18H10.5312L6.28693 10.0909H9.73864ZM21.6586 18.2557C20.3461 18.2557 19.2125 17.983 18.258 17.4375C17.3091 16.8864 16.579 16.108 16.0676 15.1023C15.5563 14.0909 15.3006 12.9006 15.3006 11.5312C15.3006 10.1847 15.5563 9.00284 16.0676 7.9858C16.5847 6.96307 17.3063 6.16761 18.2324 5.59943C19.1586 5.02557 20.2466 4.73864 21.4966 4.73864C22.3034 4.73864 23.0648 4.86932 23.7807 5.13068C24.5023 5.38636 25.1387 5.78409 25.6898 6.32386C26.2466 6.86364 26.6841 7.55114 27.0023 8.38636C27.3205 9.21591 27.4796 10.2045 27.4796 11.3523V12.2983H16.7495V10.2188H24.5222C24.5165 9.62784 24.3887 9.10227 24.1387 8.64205C23.8887 8.17614 23.5392 7.80966 23.0904 7.54261C22.6472 7.27557 22.1301 7.14205 21.5392 7.14205C20.9086 7.14205 20.3546 7.29545 19.8773 7.60227C19.4 7.90341 19.0279 8.30114 18.7608 8.79545C18.4995 9.28409 18.3659 9.82102 18.3603 10.4062V12.2216C18.3603 12.983 18.4995 13.6364 18.7779 14.1818C19.0563 14.7216 19.4455 15.1364 19.9455 15.4261C20.4455 15.7102 21.0307 15.8523 21.7012 15.8523C22.15 15.8523 22.5563 15.7898 22.9199 15.6648C23.2836 15.5341 23.5989 15.3438 23.8659 15.0938C24.133 14.8438 24.3347 14.5341 24.4711 14.1648L27.3517 14.4886C27.1699 15.25 26.8233 15.9148 26.312 16.483C25.8063 17.0455 25.1586 17.483 24.3688 17.7955C23.579 18.1023 22.6756 18.2557 21.6586 18.2557ZM40.2923 8.36932L37.4798 8.67614C37.4002 8.39205 37.261 8.125 37.0621 7.875C36.869 7.625 36.6076 7.4233 36.2781 7.26989C35.9485 7.11648 35.5451 7.03977 35.0678 7.03977C34.4258 7.03977 33.886 7.17898 33.4485 7.45739C33.0167 7.7358 32.8036 8.09659 32.8093 8.53977C32.8036 8.92045 32.9428 9.23011 33.2269 9.46875C33.5167 9.70739 33.994 9.90341 34.6587 10.0568L36.8917 10.5341C38.1303 10.8011 39.0508 11.2244 39.6531 11.804C40.261 12.3835 40.5678 13.142 40.5735 14.0795C40.5678 14.9034 40.3263 15.6307 39.8491 16.2614C39.3775 16.8864 38.7212 17.375 37.8803 17.7273C37.0394 18.0795 36.0735 18.2557 34.9826 18.2557C33.3803 18.2557 32.0906 17.9205 31.1133 17.25C30.136 16.5739 29.5536 15.6335 29.3661 14.429L32.3746 14.1392C32.511 14.7301 32.8008 15.1761 33.244 15.4773C33.6871 15.7784 34.2638 15.929 34.9741 15.929C35.707 15.929 36.2951 15.7784 36.7383 15.4773C37.1871 15.1761 37.4116 14.804 37.4116 14.3608C37.4116 13.9858 37.2667 13.6761 36.9769 13.4318C36.6928 13.1875 36.2496 13 35.6474 12.8693L33.4144 12.4006C32.1587 12.1392 31.2298 11.6989 30.6275 11.0795C30.0252 10.4545 29.7269 9.66477 29.7326 8.71023C29.7269 7.90341 29.9457 7.20455 30.3888 6.61364C30.8377 6.01705 31.4599 5.55682 32.2553 5.23295C33.0565 4.90341 33.9798 4.73864 35.0252 4.73864C36.5593 4.73864 37.7667 5.06534 38.6474 5.71875C39.5337 6.37216 40.082 7.25568 40.2923 8.36932ZM51.3173 12.4943V4.90909H54.4025V18H51.411V15.6733H51.2747C50.9792 16.4062 50.4934 17.0057 49.8173 17.4716C49.1468 17.9375 48.3201 18.1705 47.3372 18.1705C46.4792 18.1705 45.7207 17.9801 45.0616 17.5994C44.4082 17.2131 43.8968 16.6534 43.5275 15.9205C43.1582 15.1818 42.9735 14.2898 42.9735 13.2443V4.90909H46.0588V12.767C46.0588 13.5966 46.286 14.2557 46.7406 14.7443C47.1951 15.233 47.7917 15.4773 48.5304 15.4773C48.9849 15.4773 49.4252 15.3665 49.8514 15.1449C50.2775 14.9233 50.627 14.5938 50.8997 14.1562C51.1781 13.7131 51.3173 13.1591 51.3173 12.4943ZM57.4311 18V4.90909H60.38V7.13352H60.5334C60.8061 6.38352 61.2578 5.7983 61.8885 5.37784C62.5192 4.9517 63.272 4.73864 64.147 4.73864C65.0334 4.73864 65.7805 4.95455 66.3885 5.38636C67.0021 5.8125 67.4339 6.39489 67.6839 7.13352H67.8203C68.1101 6.40625 68.5987 5.8267 69.2862 5.39489C69.9794 4.95739 70.8004 4.73864 71.7493 4.73864C72.9538 4.73864 73.9368 5.11932 74.6981 5.88068C75.4595 6.64205 75.8402 7.75284 75.8402 9.21307V18H72.7464V9.69034C72.7464 8.87784 72.5305 8.28409 72.0987 7.90909C71.6669 7.52841 71.1385 7.33807 70.5135 7.33807C69.7692 7.33807 69.1868 7.57102 68.7663 8.03693C68.3516 8.49716 68.1442 9.09659 68.1442 9.83523V18H65.1186V9.5625C65.1186 8.88636 64.9141 8.34659 64.505 7.94318C64.1016 7.53977 63.5731 7.33807 62.9197 7.33807C62.4766 7.33807 62.0731 7.4517 61.7095 7.67898C61.3459 7.90057 61.0561 8.21591 60.8402 8.625C60.6243 9.02841 60.5163 9.5 60.5163 10.0398V18H57.4311ZM84.6216 18.2557C83.3091 18.2557 82.1756 17.983 81.2211 17.4375C80.2722 16.8864 79.5421 16.108 79.0307 15.1023C78.5193 14.0909 78.2637 12.9006 78.2637 11.5312C78.2637 10.1847 78.5193 9.00284 79.0307 7.9858C79.5478 6.96307 80.2693 6.16761 81.1955 5.59943C82.1216 5.02557 83.2097 4.73864 84.4597 4.73864C85.2665 4.73864 86.0279 4.86932 86.7438 5.13068C87.4654 5.38636 88.1017 5.78409 88.6529 6.32386C89.2097 6.86364 89.6472 7.55114 89.9654 8.38636C90.2836 9.21591 90.4426 10.2045 90.4426 11.3523V12.2983H79.7125V10.2188H87.4853C87.4796 9.62784 87.3517 9.10227 87.1017 8.64205C86.8517 8.17614 86.5023 7.80966 86.0534 7.54261C85.6103 7.27557 85.0932 7.14205 84.5023 7.14205C83.8716 7.14205 83.3176 7.29545 82.8404 7.60227C82.3631 7.90341 81.9909 8.30114 81.7239 8.79545C81.4625 9.28409 81.329 9.82102 81.3233 10.4062V12.2216C81.3233 12.983 81.4625 13.6364 81.7409 14.1818C82.0193 14.7216 82.4086 15.1364 82.9086 15.4261C83.4085 15.7102 83.9938 15.8523 84.6642 15.8523C85.1131 15.8523 85.5193 15.7898 85.883 15.6648C86.2466 15.5341 86.562 15.3438 86.829 15.0938C87.0961 14.8438 87.2978 14.5341 87.4341 14.1648L90.3148 14.4886C90.133 15.25 89.7864 15.9148 89.275 16.483C88.7693 17.0455 88.1216 17.483 87.3318 17.7955C86.5421 18.1023 85.6387 18.2557 84.6216 18.2557ZM98.7042 18.2557C97.3917 18.2557 96.2582 17.983 95.3036 17.4375C94.3548 16.8864 93.6246 16.108 93.1133 15.1023C92.6019 14.0909 92.3462 12.9006 92.3462 11.5312C92.3462 10.1847 92.6019 9.00284 93.1133 7.9858C93.6303 6.96307 94.3519 6.16761 95.278 5.59943C96.2042 5.02557 97.2923 4.73864 98.5423 4.73864C99.3491 4.73864 100.11 4.86932 100.826 5.13068C101.548 5.38636 102.184 5.78409 102.735 6.32386C103.292 6.86364 103.73 7.55114 104.048 8.38636C104.366 9.21591 104.525 10.2045 104.525 11.3523V12.2983H93.7951V10.2188H101.568C101.562 9.62784 101.434 9.10227 101.184 8.64205C100.934 8.17614 100.585 7.80966 100.136 7.54261C99.6928 7.27557 99.1758 7.14205 98.5849 7.14205C97.9542 7.14205 97.4002 7.29545 96.9229 7.60227C96.4457 7.90341 96.0735 8.30114 95.8065 8.79545C95.5451 9.28409 95.4116 9.82102 95.4059 10.4062V12.2216C95.4059 12.983 95.5451 13.6364 95.8235 14.1818C96.1019 14.7216 96.4911 15.1364 96.9911 15.4261C97.4911 15.7102 98.0763 15.8523 98.7468 15.8523C99.1957 15.8523 99.6019 15.7898 99.9655 15.6648C100.329 15.5341 100.645 15.3438 100.912 15.0938C101.179 14.8438 101.38 14.5341 101.517 14.1648L104.397 14.4886C104.216 15.25 103.869 15.9148 103.358 16.483C102.852 17.0455 102.204 17.483 101.414 17.7955C100.625 18.1023 99.7212 18.2557 98.7042 18.2557ZM106.991 18V4.90909H109.983V7.09091H110.119C110.358 6.33523 110.767 5.75284 111.346 5.34375C111.932 4.92898 112.599 4.72159 113.349 4.72159C113.52 4.72159 113.71 4.73011 113.92 4.74716C114.136 4.75852 114.315 4.77841 114.457 4.80682V7.64489C114.327 7.59943 114.119 7.55966 113.835 7.52557C113.557 7.4858 113.287 7.46591 113.025 7.46591C112.463 7.46591 111.957 7.58807 111.508 7.83239C111.065 8.07102 110.716 8.40341 110.46 8.82955C110.204 9.25568 110.077 9.74716 110.077 10.304V18H106.991Z"
        className="fill-slate-900 dark:fill-white"
      />
    </svg>
  ),
  loader: (props: LucideProps) => <Loader2 {...props} />,
  google: (props: LucideProps) => (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.5 8C0.5 3.5888 4.0888 0 8.5 0C10.2816 0 11.9678 0.573181 13.3765 1.6576L11.5174 4.07253C10.6464 3.40206 9.60301 3.04762 8.5 3.04762C5.76926 3.04762 3.54762 5.26926 3.54762 8C3.54762 10.7307 5.76926 12.9524 8.5 12.9524C10.6994 12.9524 12.5684 11.5114 13.2125 9.52381H8.5V6.47619H16.5V8C16.5 12.4112 12.9112 16 8.5 16C4.0888 16 0.5 12.4112 0.5 8Z"
        className="fill-slate-900 dark:fill-white"
      />
    </svg>
  ),
  chevronLeft: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  chevronDown: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  arrowUp: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  ),
  arrowDown: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  ),
  close: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  eye: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  eyeOff: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  ),
  userSettings: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <circle cx="19" cy="11" r="2" />
      <path d="M19 8v1" />
      <path d="M19 13v1" />
      <path d="m21.6 9.5-.87.5" />
      <path d="m17.27 12-.87.5" />
      <path d="m21.6 12.5-.87-.5" />
      <path d="m17.27 10-.87-.5" />
    </svg>
  ),
  file: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  ),
  logout: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  ),
  plus: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  ),
  minus: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M5 12h14" />
    </svg>
  ),
  bold: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>
  ),
  italic: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  ),
  strike: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M16 4H9a3 3 0 0 0-2.83 4" />
      <path d="M14 12a4 4 0 0 1 0 8H6" />
      <line x1="4" x2="20" y1="12" y2="12" />
    </svg>
  ),
  code: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  underline: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <line x1="4" x2="20" y1="20" y2="20" />
    </svg>
  ),
  clearMarks: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M4 7V4h16v3" />
      <path d="M5 20h6" />
      <path d="M13 4 8 20" />
      <path d="m15 15 5 5" />
      <path d="m20 15-5 5" />
    </svg>
  ),
  clearNodes: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M21 6H3" />
      <path d="M7 12H3" />
      <path d="M7 18H3" />
      <path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" />
      <path d="M11 10v4h4" />
    </svg>
  ),
  bulletList: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  ),
  orderedList: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  ),
  alignCenter: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="17" x2="7" y1="12" y2="12" />
      <line x1="19" x2="5" y1="18" y2="18" />
    </svg>
  ),
  alignLeft: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="15" x2="3" y1="12" y2="12" />
      <line x1="17" x2="3" y1="18" y2="18" />
    </svg>
  ),
  alignRight: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="21" x2="9" y1="12" y2="12" />
      <line x1="21" x2="7" y1="18" y2="18" />
    </svg>
  ),
  link: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  undo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
    </svg>
  ),
  redo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="m15 14 5-5-5-5" />
      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" />
    </svg>
  ),
  magic: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  ),
  education: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  bag: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  user: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  ),
  users: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M14 19a6 6 0 0 0-12 0" />
      <circle cx="8" cy="9" r="4" />
      <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
    </svg>
  ),
  trash: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  ),
  edit: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  bulb: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
  table: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
    </svg>
  ),
  puzzle: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  ),
  award: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  backpack: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
    </svg>
  ),
  languages: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  ),
  check: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  benefit1: (props: LucideProps) => (
    <svg
      width="236"
      height="236"
      viewBox="0 0 236 236"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="15"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M183.395 8L228.002 19.6242L216.047 63.0146" />
      <path d="M24.0352 204L24.0352 228" />
      <path d="M74.1484 179L74.1484 228" />
      <path d="M124.258 155L124.258 228" />
      <path d="M174.371 130L174.371 228" />
      <path d="M224.484 106L224.484 228" />
      <path d="M8 143L223.135 22.8335" />
    </svg>
  ),
  benefit2: (props: LucideProps) => (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="15"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M27.5 110C27.5 126.317 32.3385 142.267 41.4038 155.835C50.469 169.402 63.3537 179.976 78.4286 186.22C93.5035 192.464 110.092 194.098 126.095 190.915C142.098 187.732 156.798 179.874 168.336 168.336C179.874 156.798 187.732 142.098 190.915 126.095C194.098 110.092 192.464 93.5035 186.22 78.4286C179.976 63.3537 169.402 50.469 155.835 41.4038C142.267 32.3385 126.317 27.5 110 27.5C86.9362 27.5868 64.7989 36.5862 48.2167 52.6167L27.5 73.3333" />
      <path d="M27.5 27.5V73.3333H73.3333" />
      <path d="M110 64.1667V110L146.667 128.333" />
    </svg>
  ),
  format: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12v-1h6v1" />
      <path d="M11 17h2" />
      <path d="M12 11v6" />
    </svg>
  ),
  target: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  heartHandShake: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="stroke-slate-900 dark:stroke-white"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  ),
}
