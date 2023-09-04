import {
  Loader2,
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
    <svg width="21.75" height="24" viewBox="0 0 29 32" {...props}>
      <g>
        <path
          fillRule="evenodd"
          width="21.75"
          height="24"
          className="fill-slate-900 dark:fill-slate-100"
          clipRule="evenodd"
          d="M16.7846 12.9286C15.8377 12.0194 15.1131 10.8934 14.6866 9.46086C14.2404 7.96203 14.2996 6.14438 14.8254 4.71066C15.3033 3.40717 16.1639 2.34588 17.2006 1.54386C18.2878 0.702526 19.5201 0.158182 21.1989 0.0208056C22.6782 -0.100689 24.0489 0.327719 25.0189 0.842284C26.0427 1.38583 26.828 2.13862 27.4929 2.9871C28.163 3.84193 28.6676 4.9604 28.8981 6.21386C29.1475 7.56896 28.9197 9.09003 28.4629 10.2228C27.789 11.8923 26.8503 13.1585 25.3157 14.011C24.8178 14.2877 24.2418 14.547 23.6929 14.6923C22.4395 15.0246 20.9178 15.002 19.6945 14.6121C18.5548 14.2492 17.6452 13.652 16.7846 12.9286Z"
        />
        <path
          fillRule="evenodd"
          width="21.75"
          height="24"
          className="fill-slate-900 dark:fill-slate-100"
          clipRule="evenodd"
          d="M16.8239 0.100529C16.849 0.259346 16.6569 0.332005 16.5667 0.380841C15.1877 1.13165 14.2432 2.05993 13.5583 3.56789C13.3211 4.0904 13.098 4.64387 13.0043 5.2716C12.7973 6.65251 12.9451 8.16444 12.9447 9.70099C12.9443 12.7118 12.9647 15.6546 12.9643 18.6201C12.9643 19.3586 12.9392 20.1007 12.9643 20.8451C12.9894 21.5817 12.9353 22.3297 12.9643 23.0702C13.0235 24.571 12.9909 26.077 13.0043 27.5599C13.0168 29.0373 12.9992 30.4976 12.9643 31.9294C12.4511 32.0366 11.9178 31.9893 11.3807 31.9893C7.63126 31.9897 3.72226 32.0211 0.118685 31.9695C0.0124328 31.5895 0.0594819 31.1837 0.0594819 30.7867C0.0594819 24.9494 0.000278378 18.5042 0.000278378 12.7078C0.000278378 11.0549 0.000278378 9.42425 0.000278378 7.77693C0.000278378 6.92488 -0.0103077 6.12206 0.0990816 5.41175C0.410782 3.38962 1.70659 1.98211 3.12748 1.08241C3.91359 0.584523 4.74009 0.291903 5.83908 0.120382C6.95924 -0.0543167 8.2974 0.0604283 9.52068 0.0604283C10.328 0.0604283 11.1388 0.0906035 11.9355 0.0604283C13.147 0.0143715 14.4122 0.0405762 15.6367 0.0405762C16.0315 0.0405762 16.4381 -0.00825985 16.8239 0.100529Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1308_6097">
          <rect
            width="21.75"
            height="24"
            className="fill-slate-900 dark:fill-slate-100"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  logoText: (props: LucideProps) => (
    <svg
      width="105"
      height="16"
      viewBox="0 0 105 16"
      className="fill-slate-900 dark:fill-slate-100"
      {...props}
    >
      <path
        className="fill-slate-900 dark:fill-slate-100"
        d="M0.51709 15.769V1C0.51709 0.447715 0.964805 0 1.51709 0H6.70525C7.88978 0 8.90072 0.213025 9.73806 0.639076C10.5805 1.05999 11.2213 1.658 11.6604 2.43311C12.1046 3.20308 12.3267 4.10908 12.3267 5.15111C12.3267 6.19827 12.102 7.09913 11.6527 7.85371C11.2034 8.60314 10.5524 9.17806 9.69977 9.57844C8.85222 9.97883 7.82596 10.179 6.62101 10.179H2.4777V7.49952H6.0849C6.71802 7.49952 7.24391 7.41225 7.66258 7.23773C8.08125 7.0632 8.3927 6.80141 8.59693 6.45236C8.80627 6.1033 8.91093 5.66955 8.91093 5.15111C8.91093 4.62753 8.80627 4.18608 8.59693 3.82676C8.3927 3.46744 8.0787 3.19538 7.65492 3.01059C7.23625 2.82066 6.7078 2.7257 6.06959 2.7257H3.83327V15.769H0.51709ZM8.98752 8.59288L12.8858 15.769H9.22493L5.41094 8.59288H8.98752Z"
      />
      <path
        className="fill-slate-900 dark:fill-slate-100"
        d="M19.651 16C18.441 16 17.3994 15.7536 16.5263 15.2608C15.6583 14.7629 14.9895 14.0597 14.5197 13.1511C14.05 12.2374 13.8152 11.1569 13.8152 9.90953C13.8152 8.69297 14.05 7.62528 14.5197 6.70645C14.9895 5.78762 15.6507 5.07154 16.5033 4.55823C17.3611 4.04491 18.3669 3.78826 19.5208 3.78826C20.2969 3.78826 21.0194 3.91402 21.6882 4.16554C22.3622 4.41193 22.9493 4.78409 23.4497 5.282C23.9552 5.77992 24.3483 6.40616 24.6291 7.16073C24.9099 7.91017 25.0503 8.78794 25.0503 9.79403V10.6949H15.1171V8.66217H21.9792C21.9792 8.18993 21.8771 7.77157 21.6729 7.40712C21.4687 7.04267 21.1853 6.75778 20.8228 6.55245C20.4654 6.342 20.0493 6.23677 19.5744 6.23677C19.0792 6.23677 18.6401 6.35226 18.2572 6.58325C17.8793 6.80911 17.5832 7.11453 17.3688 7.49952C17.1543 7.87937 17.0445 8.30285 17.0394 8.76997V10.7026C17.0394 11.2878 17.1467 11.7934 17.3611 12.2194C17.5806 12.6455 17.8895 12.974 18.2878 13.205C18.686 13.436 19.1583 13.5515 19.7046 13.5515C20.0671 13.5515 20.399 13.5002 20.7003 13.3975C21.0015 13.2948 21.2593 13.1408 21.4738 12.9355C21.6882 12.7302 21.8516 12.4787 21.9639 12.1809L24.9814 12.3811C24.8282 13.11 24.5142 13.7466 24.0394 14.2907C23.5697 14.8296 22.9621 15.2506 22.2167 15.5534C21.4763 15.8511 20.6211 16 19.651 16Z"
      />
      <path
        className="fill-slate-900 dark:fill-slate-100"
        d="M36.8378 7.31473L33.8509 7.49952C33.7998 7.24286 33.6901 7.01187 33.5216 6.80654C33.3531 6.59609 33.131 6.42926 32.8553 6.30606C32.5847 6.17774 32.2605 6.11357 31.8826 6.11357C31.3772 6.11357 30.9508 6.22137 30.6036 6.43696C30.2565 6.64742 30.0829 6.92974 30.0829 7.28393C30.0829 7.56625 30.1952 7.80494 30.4198 8C30.6445 8.19506 31.03 8.35162 31.5763 8.46968L33.7054 8.90087C34.8491 9.13699 35.7017 9.51684 36.2634 10.0404C36.825 10.564 37.1058 11.2518 37.1058 12.1039C37.1058 12.8791 36.8786 13.5592 36.4242 14.1444C35.9749 14.7295 35.3571 15.1864 34.5708 15.5149C33.7896 15.8383 32.8885 16 31.8673 16C30.3101 16 29.0694 15.674 28.1452 15.0221C27.2262 14.3651 26.6875 13.4719 26.5293 12.3426L29.7382 12.1732C29.8352 12.6506 30.0701 13.0151 30.4428 13.2666C30.8155 13.513 31.2929 13.6362 31.875 13.6362C32.4468 13.6362 32.9063 13.5258 33.2535 13.3051C33.6058 13.0792 33.7845 12.7892 33.7896 12.435C33.7845 12.1373 33.6594 11.8935 33.4144 11.7036C33.1693 11.5085 32.7915 11.3596 32.2809 11.257L30.2437 10.8489C29.0949 10.6179 28.2397 10.2175 27.678 9.64774C27.1215 9.07796 26.8433 8.35162 26.8433 7.46872C26.8433 6.70901 27.0475 6.05454 27.4559 5.50529C27.8695 4.95605 28.449 4.53256 29.1945 4.23484C29.945 3.93712 30.8232 3.78826 31.829 3.78826C33.3148 3.78826 34.484 4.10395 35.3367 4.73532C36.1944 5.3667 36.6948 6.2265 36.8378 7.31473Z"
      />
      <path
        className="fill-slate-900 dark:fill-slate-100"
        d="M46.5746 10.7334V4.94225C46.5746 4.38997 47.0223 3.94225 47.5746 3.94225H48.8371C49.3894 3.94225 49.8371 4.38997 49.8371 4.94225V15.769H46.7048V13.6208H46.5822C46.3167 14.3138 45.8751 14.8707 45.2573 15.2916C44.6446 15.7125 43.8966 15.923 43.0133 15.923C42.227 15.923 41.5352 15.7433 40.9378 15.384C40.3405 15.0247 39.8733 14.514 39.5363 13.8518C39.2044 13.1896 39.0359 12.3965 39.0308 11.4726V4.94225C39.0308 4.38997 39.4785 3.94225 40.0308 3.94225H41.2934C41.8457 3.94225 42.2934 4.38997 42.2934 4.94225V10.8874C42.2985 11.5855 42.4849 12.1373 42.8525 12.5428C43.2201 12.9483 43.7128 13.1511 44.3306 13.1511C44.7237 13.1511 45.0913 13.0613 45.4334 12.8816C45.7755 12.6968 46.0512 12.4248 46.2606 12.0654C46.475 11.7061 46.5797 11.2621 46.5746 10.7334Z"
      />
      <path
        className="fill-slate-900 dark:fill-slate-100"
        d="M52.3174 15.769V4.94225C52.3174 4.38997 52.7651 3.94225 53.3174 3.94225H54.4268C54.9791 3.94225 55.4268 4.38997 55.4268 4.94225V6.02887H55.5647C55.8097 5.3359 56.2182 4.78922 56.79 4.38883C57.3619 3.98845 58.046 3.78826 58.8425 3.78826C59.6493 3.78826 60.336 3.99102 60.9027 4.39653C61.4695 4.79692 61.8473 5.34103 62.0362 6.02887H62.1587C62.3987 5.3513 62.8327 4.80975 63.4607 4.40423C64.0938 3.99358 64.8418 3.78826 65.7047 3.78826C66.8024 3.78826 67.6934 4.13988 68.3775 4.84312C69.0668 5.54123 69.4114 6.53192 69.4114 7.81521V15.769H66.1565V8.46198C66.1565 7.80494 65.9829 7.31216 65.6357 6.98364C65.2886 6.65512 64.8546 6.49086 64.3338 6.49086C63.7415 6.49086 63.2794 6.68078 62.9476 7.06063C62.6157 7.43535 62.4498 7.9307 62.4498 8.54668V15.3699C62.4498 15.5084 62.2781 15.5729 62.1869 15.4687L60.8683 13.9621L59.5496 15.4687C59.4584 15.5729 59.2868 15.5084 59.2868 15.3699V8.39269C59.2868 7.81264 59.1208 7.35066 58.7889 7.00674C58.4622 6.66282 58.0307 6.49086 57.4946 6.49086C57.1321 6.49086 56.8054 6.58325 56.5143 6.76805C56.2284 6.94771 56.0012 7.2018 55.8327 7.53032C55.6642 7.85371 55.58 8.23356 55.58 8.66988V15.769H52.3174Z"
      />
      <path
        className="fill-slate-900 dark:fill-slate-100"
        d="M77.2202 16C76.0101 16 74.9686 15.7536 74.0955 15.2608C73.2275 14.7629 72.5586 14.0597 72.0889 13.1511C71.6192 12.2374 71.3843 11.1569 71.3843 9.90953C71.3843 8.69297 71.6192 7.62528 72.0889 6.70645C72.5586 5.78762 73.2198 5.07154 74.0725 4.55823C74.9303 4.04491 75.9361 3.78826 77.09 3.78826C77.8661 3.78826 78.5885 3.91402 79.2574 4.16554C79.9313 4.41193 80.5185 4.78409 81.0189 5.282C81.5243 5.77992 81.9175 6.40616 82.1983 7.16073C82.4791 7.91017 82.6195 8.78794 82.6195 9.79403V10.6949H72.6863V8.66217H79.5484C79.5484 8.18993 79.4463 7.77157 79.2421 7.40712C79.0378 7.04267 78.7545 6.75778 78.392 6.55245C78.0346 6.342 77.6184 6.23677 77.1436 6.23677C76.6483 6.23677 76.2093 6.35226 75.8263 6.58325C75.4485 6.80911 75.1524 7.11453 74.9379 7.49952C74.7235 7.87937 74.6137 8.30285 74.6086 8.76997V10.7026C74.6086 11.2878 74.7158 11.7934 74.9303 12.2194C75.1498 12.6455 75.4587 12.974 75.857 13.205C76.2552 13.436 76.7275 13.5515 77.2738 13.5515C77.6363 13.5515 77.9682 13.5002 78.2694 13.3975C78.5707 13.2948 78.8285 13.1408 79.0429 12.9355C79.2574 12.7302 79.4208 12.4787 79.5331 12.1809L82.5506 12.3811C82.3974 13.11 82.0834 13.7466 81.6086 14.2907C81.1388 14.8296 80.5313 15.2506 79.7858 15.5534C79.0455 15.8511 78.1903 16 77.2202 16Z"
      />
      <path
        className="fill-slate-900 dark:fill-slate-100"
        d="M89.9802 16C88.7702 16 87.7286 15.7536 86.8555 15.2608C85.9876 14.7629 85.3187 14.0597 84.849 13.1511C84.3792 12.2374 84.1444 11.1569 84.1444 9.90953C84.1444 8.69297 84.3792 7.62528 84.849 6.70645C85.3187 5.78762 85.9799 5.07154 86.8326 4.55823C87.6903 4.04491 88.6962 3.78826 89.8501 3.78826C90.6261 3.78826 91.3486 3.91402 92.0174 4.16554C92.6914 4.41193 93.2786 4.78409 93.7789 5.282C94.2844 5.77992 94.6775 6.40616 94.9583 7.16073C95.2392 7.91017 95.3796 8.78794 95.3796 9.79403V10.6949H85.4463V8.66217H92.3085C92.3085 8.18993 92.2063 7.77157 92.0021 7.40712C91.7979 7.04267 91.5145 6.75778 91.152 6.55245C90.7946 6.342 90.3785 6.23677 89.9037 6.23677C89.4084 6.23677 88.9693 6.35226 88.5864 6.58325C88.2086 6.80911 87.9124 7.11453 87.698 7.49952C87.4835 7.87937 87.3738 8.30285 87.3687 8.76997V10.7026C87.3687 11.2878 87.4759 11.7934 87.6903 12.2194C87.9099 12.6455 88.2188 12.974 88.617 13.205C89.0153 13.436 89.4875 13.5515 90.0339 13.5515C90.3964 13.5515 90.7282 13.5002 91.0295 13.3975C91.3307 13.2948 91.5886 13.1408 91.803 12.9355C92.0174 12.7302 92.1808 12.4787 92.2931 12.1809L95.3106 12.3811C95.1575 13.11 94.8435 13.7466 94.3686 14.2907C93.8989 14.8296 93.2913 15.2506 92.5459 15.5534C91.8056 15.8511 90.9503 16 89.9802 16Z"
      />
      <path
        className="fill-slate-900 dark:fill-slate-100"
        d="M97.3793 15.769V4.94225C97.3793 4.38997 97.827 3.94225 98.3793 3.94225H99.5423C100.095 3.94225 100.542 4.38997 100.542 4.94225V6.00578H100.665C100.879 5.27174 101.239 4.71736 101.745 4.34264C102.25 3.96278 102.832 3.77286 103.491 3.77286C103.654 3.77286 103.83 3.78312 104.019 3.80366V3.80366C104.315 3.83576 104.517 4.09663 104.517 4.39371V6.15072C104.517 6.47354 104.201 6.71814 103.881 6.67565V6.67565C103.611 6.63972 103.363 6.62175 103.139 6.62175C102.659 6.62175 102.23 6.72698 101.852 6.93744C101.479 7.14277 101.183 7.43022 100.963 7.79981C100.749 8.16939 100.642 8.59544 100.642 9.07796V15.769H97.3793Z"
        fill="#0F172A"
      />
    </svg>
  ),
  loader: (props: LucideProps) => <Loader2 {...props} />,
  google: (props: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#FBC02D"
      />
      <path
        d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
        fill="#E53935"
      />
      <path
        d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.6057 17.5458 13.3577 18.0003 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z"
        fill="#4CAF50"
      />
      <path
        d="M21.8055 10.0415L21.7975 10H21H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#1565C0"
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
  chevronRight: (props: LucideProps) => (
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
      <path d="m9 18 6-6-6-6" />
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
  menu: (props: LucideProps) => (
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  search: (props: LucideProps) => (
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  facebook: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="fill-white dark:fill-slate-900"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  twitter: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="fill-white dark:fill-slate-900"
      {...props}
    >
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
        className="fill-white dark:fill-slate-900"
      />
    </svg>
  ),
  telegram: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="fill-white dark:fill-slate-900"
      {...props}
    >
      <g clipPath="url(#clip0_1454_6170)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1851 2.95331C13.3498 2.88397 13.5302 2.86006 13.7073 2.88405C13.8844 2.90805 14.0519 2.97909 14.1922 3.08977C14.3326 3.20044 14.4407 3.34672 14.5053 3.51337C14.57 3.68001 14.5888 3.86094 14.5598 4.03731L13.0478 13.2086C12.9011 14.0933 11.9304 14.6006 11.1191 14.16C10.4404 13.7913 9.43242 13.2233 8.52575 12.6306C8.07242 12.334 6.68375 11.384 6.85442 10.708C7.00109 10.13 9.33442 7.95798 10.6678 6.66664C11.1911 6.15931 10.9524 5.86664 10.3344 6.33331C8.79909 7.49198 6.33575 9.25398 5.52109 9.74998C4.80242 10.1873 4.42775 10.262 3.97975 10.1873C3.16242 10.0513 2.40442 9.84064 1.78575 9.58398C0.949753 9.23731 0.99042 8.08798 1.78509 7.75331L13.1851 2.95331Z"
          className="fill-white dark:fill-slate-900"
        />
      </g>
      <defs>
        <clipPath id="clip0_1454_6170">
          <rect
            width="16"
            height="16"
            className="fill-white dark:fill-slate-900"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  whatsapp: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="fill-white dark:fill-slate-900"
      {...props}
    >
      <path
        d="M8.00066 1.33398C11.6827 1.33398 14.6673 4.31865 14.6673 8.00065C14.6673 11.6827 11.6827 14.6673 8.00066 14.6673C6.82251 14.6692 5.6651 14.3574 4.64733 13.764L1.33666 14.6673L2.23799 11.3553C1.64406 10.3372 1.33203 9.17932 1.33399 8.00065C1.33399 4.31865 4.31866 1.33398 8.00066 1.33398ZM5.72866 4.86732L5.59533 4.87265C5.50901 4.87791 5.42465 4.90059 5.34733 4.93932C5.27501 4.98027 5.20899 5.03147 5.15133 5.09132C5.07133 5.16665 5.02599 5.23198 4.97733 5.29532C4.73074 5.61592 4.59798 6.00953 4.59999 6.41398C4.60133 6.74065 4.68666 7.05865 4.81999 7.35598C5.09266 7.95732 5.54133 8.59398 6.13333 9.18398C6.27599 9.32598 6.41599 9.46865 6.56666 9.60132C7.30225 10.249 8.17883 10.716 9.12666 10.9653L9.50533 11.0233C9.62866 11.03 9.75199 11.0207 9.87599 11.0147C10.0702 11.0046 10.2597 10.9521 10.4313 10.8607C10.5186 10.8157 10.6038 10.7667 10.6867 10.714C10.6867 10.714 10.7153 10.6953 10.77 10.654C10.86 10.5873 10.9153 10.54 10.99 10.462C11.0453 10.4047 11.0933 10.3373 11.13 10.2607C11.182 10.152 11.234 9.94465 11.2553 9.77198C11.2713 9.63998 11.2667 9.56798 11.2647 9.52332C11.262 9.45198 11.2027 9.37799 11.138 9.34665L10.75 9.17265C10.75 9.17265 10.17 8.91998 9.81533 8.75865C9.77821 8.74245 9.73845 8.73318 9.69799 8.73132C9.65238 8.72663 9.60629 8.73177 9.56283 8.74637C9.51936 8.76097 9.47953 8.78471 9.44599 8.81598C9.44266 8.81465 9.39799 8.85265 8.91599 9.43665C8.88833 9.47383 8.85022 9.50192 8.80653 9.51735C8.76284 9.53279 8.71554 9.53487 8.67066 9.52332C8.62723 9.51167 8.58468 9.49697 8.54333 9.47932C8.46066 9.44465 8.43199 9.43132 8.37533 9.40732C7.99271 9.24035 7.63845 9.01475 7.32533 8.73865C7.24133 8.66532 7.16333 8.58532 7.08333 8.50798C6.82105 8.2568 6.59248 7.97265 6.40333 7.66265L6.36399 7.59932C6.33574 7.55676 6.3129 7.51085 6.29599 7.46265C6.27066 7.36465 6.33666 7.28598 6.33666 7.28598C6.33666 7.28598 6.49866 7.10865 6.57399 7.01265C6.64733 6.91932 6.70933 6.82865 6.74933 6.76398C6.82799 6.63732 6.85266 6.50732 6.81133 6.40665C6.62466 5.95065 6.43133 5.49665 6.23266 5.04598C6.19333 4.95665 6.07666 4.89265 5.97066 4.87998C5.93466 4.87598 5.89866 4.87198 5.86266 4.86932C5.77313 4.86487 5.68342 4.86576 5.59399 4.87198L5.72799 4.86665L5.72866 4.86732Z"
        className="fill-white dark:fill-slate-900"
      />
    </svg>
  ),
  linkedin: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="fill-white dark:fill-slate-900"
      {...props}
    >
      <path
        d="M4.6276 2.334C4.62743 2.68762 4.48678 3.02669 4.23661 3.27661C3.98643 3.52654 3.64723 3.66684 3.2936 3.66667C2.93998 3.66649 2.60091 3.52584 2.35099 3.27567C2.10107 3.0255 1.96076 2.68629 1.96094 2.33267C1.96111 1.97904 2.10176 1.63998 2.35193 1.39005C2.60211 1.14013 2.94132 0.999823 3.29494 1C3.64856 1.00018 3.98763 1.14082 4.23755 1.391C4.48747 1.64117 4.62778 1.98038 4.6276 2.334ZM4.6676 4.654H2.00094V13.0007H4.6676V4.654ZM8.88094 4.654H6.2276V13.0007H8.85427V8.62067C8.85427 6.18067 12.0343 5.954 12.0343 8.62067V13.0007H14.6676V7.714C14.6676 3.60067 9.96094 3.754 8.85427 5.774L8.88094 4.654Z"
        className="fill-white dark:fill-slate-900"
      />
    </svg>
  ),
}
