import './ErrorPage.scss'
import {Link} from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div class="bl_wrapper">
      <svg id="svg_tramp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
        <path d="M470 421.2c16.1-.4 32.2-.6 47.8 4.6 17 5.6 24 15.4 24.2 33.2 1.5 4.5-.6 8.1-2.8 11.7-6.4 10.6-16.8 15.9-27.8 20.1-19.6 7.5-40.2 10.4-60.9 12.8-2 .2-4 .2-5.7-1.3-.8-1.5-.1-2.9.4-4.3 2.9-7.5 3.5-15.1.9-22.9-.6-1.8-1.6-3.8-.1-5.7 5.8-2.5 12-2.2 18-3.3 10.6-1.9 21.3-3.7 31.6-7.3 1.8-.6 3.8-1 5.5-2.5-4.2-1.2-8.3-1.3-12.4-1.5-24.7-.9-49.1 1.9-73.5 6.1-2 .3-3.9.7-5.9.4-11.8-2.4-23.3-5.7-32.8-13.6-3.4-2.8-6.8-5.4-9.3-9-2.6-3.8-6.1-5.3-10.7-5-3.8.2-7.7.4-11.5-.3-1.4-.3-4.9 0-2.4-3.4 2.3-1.3 4.9-1 7.3-1h54c2.7 0 5.3.1 7.9-.8 4.8-3.1 9.7-5.6 15.7-3.8.9.3 2-.2 2.9-.7 7.2-4.2 13.6-2.4 19.7 2.3.6.4 1.2.5 1.9.6 1 .1 2 .3 2.9.7 3.7 1.5 6.8 2.1 6.8-3.6 0-1.4 1.2-2.2 2.8-2.2 2-.1 3.8.4 5.5-.3z"
          fill="#535353" />
        <path d="M342.1 430.8c4.1 2.6 8.7 1.4 13 1.1 6.6-.5 10.6 2.1 14.9 7.1 9.3 11.1 21.9 17.4 36.2 20 .9.2 1.9.5 2.8.8-.9 1.5-2.4 1.9-3.8 1.9-15.6 0-31.4 1.8-46.8-.8-25.7-4.3-51.4-6.8-77.4-5.9-1.5 0-3 .1-4.5.4-1.1.2-2.2.3-3.8 1.2 7.2 3.2 14.2 4.9 21.3 6.5 9.6 2.2 19.3 3.2 29 4.8 1.6.3 3.3.4 4.8 1.2 1.6 1 2.1 2.6 1.6 4.3-2.3 8.7-2.3 17.3.9 25.8.6 1.7.2 3.3-1.8 4-4.2 1.3-8.3.1-12.3-.4-17.9-2.2-35.5-5.4-52.5-11.5-7.8-2.8-14.9-6.5-21.3-11.7-4.9-4-8.4-8.9-10.3-15-.6-1.9-1.3-3.8 0-5.7.7-19.7 9.6-30.2 29.5-35 16.1-3.9 32.3-3.3 48.6-2.7.3.2.7.4.7.7.4 7.8 6.2 7.4 11.6 7.6 4 .1 7.9.2 11.9-.1 1.9-.3 3.9-.5 5.8-.7 1.2-.2 2.6 0 1.9 2.1z"
          fill="#414040" />
        <path class="st2"
          d="M443.5 134.3c1.9 5.7 3.2 14.6 4.7 15.7 7.7 5.6 6.7 14-2.1 18.3-1.4 1.9-3.3 2.7-5.6 2.7-27.1-.1-54.2.5-81.3-.2-8.9.6-17.8.2-26.7.3-2 0-3.9-.5-5.4-2-.4-.3-.7-.6-1.1-.9 1.9-2.4 4.6-1.4 6.9-1.5 6.4-.3 12.8-.3 19.1.3 2.4 0 2.9-6.8 2.6-4.9-.2 1.8-.1 3.8-2.4 4.4-2.4-.5-3.4-2.4-4.3-4.4-.6-1.9 1.4-10.6 3.6-11.9 3.7-2.2 4.6-5.4 5.4-9.4 4.1-21.1 16.2-36 35.8-44.9 2.4-1.1 4.9-.7 7.2-1.6 19.4 4.3 32.6 16.1 41 33.8.7 1.2 2.5 6.1 2.6 6.2z" />
        <path d="M405 306.1c4.6.2 9-1.4 13.4-2.5.1 2.6-2.4 1.9-3.1 3.8 3.9 1.8 6.5-2.1 7.4-3.5 2.9-4.8 6.8-7.8 12.2-7.2 2.5.3 3.6-1.6 3.4-3.3-.9-6.5 3.7-11 5.5-16.5 13.5 5.7 26.9 11.6 38.3 21.1 14.4 12.1 26.6 25.8 30.1 45.1 3.1 17-2.3 31.5-14.3 43.6-1.5-1.2-1.6-2.9-1.6-4.5-.1-9.6-4.6-16.1-13.7-19.3-.9-.3-1.9-.7-2.6-1.5-.7-.8-.8-1.9-.4-2.8 3.9-10.9-2-18.7-8.2-26.4-2.1-2.6-4.7-4.7-6.9-7.1-1.1-1.1-2.2-2.2-3.6-3.1-2.4-3.3-3.7.3-5.4.9-12.1 0-23.9-2.7-35.8-3.7-2.6-.2-5.3-.2-7.8-1-5.8-.4-11.6.6-17.4 1.1-8.3.7-16.6 1.3-24.9 2.1-1.7.2-3.3 0-4.7-1.2-1.4-6.7 4.1-13.8 10.8-13.9 9.8 0 19.5.7 29.3-.2z"
          fill="#597a8c" />
        <path class="st4"
          d="M405 306.1c-4.5 1.8-9.2.5-13.7.8-2.6.2-5.3 0-8 0-11.8 0-13.9 1.4-18.3 12.8-1.9 2.7-5 2.7-7.7 2.9-12.3.7-24.5 2.1-36.8 2.8-1.3.1-2.7 0-3.9-.7-1.6-.8-1-2.6-1.7-3.9-2 .7-3.3 2.2-5 3.3-1.4.9-2.4 2.1-3.6 3.2-2.7 2.7-5.1 5.7-7.4 8.8-5.1 6.7-8 13.8-5.3 22.3.3 1 .2 2-.3 2.9-1 1.4-2.6 1.9-4.1 2.7-8 3.9-11.6 10.4-11.4 19.2 0 1.7.8 3.7-1 5.1-16.1-14.1-21.2-36.6-12.3-56.7 9.5-21.5 26.5-35.7 46.9-46.3 4.5-2.4 9.4-4.2 14.1-6.3 1.4-.7 3.3-.7 3.9-2.7 1.7 6.2 4.7 11.7 9.4 16.1 3.1 2.9 2.6 4.8-1.6 6 .5.5 1.1 1.1 1.2 1.1 5.5-4 9.9 0 13.2 3 4.9 4.5 10.2 3.5 15.6 3.5 12.5.1 25.2.1 37.8.1z" />
        <path d="M461.9 321.2c1.3.5.3 25.1.6 29.9-.4 2.4-1.7 4.5-.3 7.2 1.5 2.8-.9 3.8-3.1 4.5-4.6 1.5-8.4 4-11.2 8-9.2 13.1-4.9 29.2 9.6 36 1.9.9 4.1 1.5 5.4 3.5 1.6 3.2-1.1 6.3 0 9.5.1.4.1.8.2 1.1-.1.7-.4 1.3-.5 1.9-.5 5.5-.6 5.6-6.1 3.9-2-.6-3.1.4-4.5 1.1-4.3.6-6.3-3.8-10.5-4.5-3.6-.6-6.1 0-8.8 1.4-2.9 1.5-5.6 2.3-8.8.9-4.2-1.9-6.6 2.1-9.7 3.5-2.2 0-2-1.8-1.4-2.7 3.1-4.8 2-9.8 1.4-14.8-.1-.8-5.2-30.1-6.3-35.3-.3-.8-1.6-8.4-2-11.5-1.1-7.4 3-42 4-46 .3-1.1 32.2 1.5 47.1 3.2 1.3-1.8 3.2-.8 4.9-.8z"
          fill="#c6b4af" />
        <path class="st6"
          d="M427.1 502.4c-1.1 3.7-3 7-7 8.5-.4-.3-.9-.7-1.3-1-.6-2.8 1.4-4.6 2.3-6.9 3.7-9.8 5.3-19.9 1.7-30-2.5-7.2-6.4-7.8-11.6-2.2-1.3 1.5-2.4 3.3-4 4.4-7.4 5-7.3 12.5-6.5 20.1.4 3.7 2 6.8 5.7 8.8 2.4 1.3 5.1 2.7 5.6 5.9-.9 1-2.1 1-3.2 1h-42.4c-1.2 0-10.5.9-11.4-.1.1-1.6 9.5-3.2 10.5-4.1 1.7-1.9 4.1-2.8 6-4.5 4.6-6.9 4.6-14.5 1.4-21.4-2.5-5.5-7.8-9.4-12.6-13.1-2.6-2-5.5-.3-7.3 3.7-2.9 6.4-3 13.2-1.8 20 .9 5.1 1.9 10.1 4.7 14.6.7 1.1 1.2 2.4.6 3.8-.4.3-.9.7-1.3 1-6-2.7-7.4-8.3-8.4-13.9-2.1-10.8-2-21.5 3-32-5.8-.5-10.8.8-15.5 3.5-1.8 1.1-3.6 2.6-6 1.8-20.7-2.6-41.5-4.9-61.9-14.5 8.4-3 15.8-3.1 23.1-3.2 18-.4 35.9.9 53.6 4.2 21.9 4.1 44 3.3 66.1 3 13.1-1.8 26.2-3.9 39.4-5.2 18.5-1.9 37.1-3.3 55.6.2.8.1 1.5.4 2.4 1.1-18.9 9.5-39.6 11.9-60.2 14.4" />
        <path class="st7"
          d="M359 169.1c26.9-.1 53.7-.1 80.6-.2 2.1 0 4.3.2 6.4-.6 0 5.5.1 10.9-.1 16.4-.1 3.1.8 4.4 4.2 4.4 6.4.1 10.9 4.7 10.9 10.4 0 6.5-3.9 10.4-11.1 10.5-3.1 0-4.3 1.1-4.1 4-.5-.1-69.3-1.7-71.1-.6-5.3 0-10.6.6-15.8-.3v.1c-2.9-3.6 1.1-34.9-.9-37.7-.9-2.4-.8-4.5 1-6.4z" />
        <path d="M630.7 446c-.4 10.1-1.3 21.2-1.7 31.2-.2 4.2-.1 5.2-5 4.9-7.3-.5-14.6-.2-21.9-.3-.8-.1-1.5-1.5-2.1-.7-2.4 3.2-5.3 1.6-8.1 1-1.3 0-2.7-.1-4-.1-6.7 0-7.1 2.6-7.8-9.1-.7-11.2-1.5-20.3-2.1-31.8"
          fill="#308894" />
        <path d="M461.9 410c-11.3-2.8-18.1-9.8-20.3-21.4-2.2-11.9 6.2-25.1 18-27.7.6-.1 1.2-.4 2.3-.7-3-3.2-4.8-6.3 0-8.9.8-1.4 2-1.5 3.4-1.3 3.1 1.1 4.9 3.7 6.8 6.1 1.4 1.7 2.9 3 4.8 4.1 8.5 3.7 13.9 10.2 15.9 19.2 1.7 7.3 1.1 14.3-4.9 19.8-5.7 7.5-13.6 11-22.8 11.8-1.1.2-2.2 0-3.2-1z"
          fill="#edba9d" />
        <path class="st7"
          d="M308.1 410.2c-8.8.2-15.2-4.3-21-10.2-9.8-11.2-7-29 5.9-37.2 1.5-1 3.1-2 4.7-2.7 3.9-2.4 6.3-6.4 9.9-9.1 1.3-.9 2.6-1.3 4.2-1.1 3.4.7 5.1 2.9 4.7 6.2-.4 3 1.1 4.1 3.5 4.9 13.2 8.3 18.1 21.2 12.8 34.3-3.4 8.4-9.9 13.5-18.5 15.9-1.1.3-2.1.4-3.2.3-1.2-.1-2.2-.6-3-1.3z" />
        <path class="st6"
          d="M231.9 459c3 14.5 13.2 22.5 25.9 28.1 16.3 7.1 33.6 10.4 51 12.9 6.4.9 12.9 1.5 19.3 2.2 6.4.4 11.5 3.4 16 7.7-14.8.2-29.5-1.4-44.2-2.7-17.2-1.5-34.3-3.8-51.2-7.3-12.9-2.6-25.7-5.5-37.4-11.9-1.6-.9-3.2-1.8-4.6-3-6.6-5.8-6.3-11.2.9-16.2 7.3-5 15.7-7.8 24.3-9.8z" />
        <path class="st10"
          d="M349.1 161.9c1 1.4 2 2.7 2.9 4.1.6.6 2.3.1 1.9 1.8-9.3.1-18.6.2-27.9.2-8.1-4-9.4-13-2.5-17.6.3-.2.7-.6 1.1-1.1 6.6-7.9 12.5-52.1 52.2-55.8 7.7-1.5 15.5-1.2 23.2.7-7 3.7-14.5 6.4-20.7 11.6-12.2 10.3-19.5 23.2-21.2 39.1-.3 2.4-.7 4-3.2 4.8-3.1 1-4.5 3.7-5.8 6.4-.7-.1-1.7-1.4-2-.6-.8 2.3-.8 4.8 0 7.1.3.7 1.2-.6 2-.7z" />
        <path class="st6"
          d="M445 502.2c23.3-2 46.4-5.4 68.4-14 6.4-2.5 12.2-5.8 17.5-10.2 6-5 9.3-11.5 11.1-18.9 7.5 3 15.5 4.9 22.3 9.8 7.5 5.4 7.9 11.1.5 16.8-7 5.3-15.4 7.9-23.7 10.1-22.3 6-45 9.4-68 11.4-14 1.2-28 3-42.1 2.8 3.7-4.3 8.8-6.2 14-7.8z" />
        <path d="M327 213.5c-.5-3.9-1.7-3.5-4.1-3.5-7.2 0-11.6-4.4-11.3-10.9.2-6.2 4.9-10.5 11.8-10 3.3.2 3.9-.8 3.8-3.7-.2-5.5-.1-11-.1-16.5 10.7 0 21.3.1 32 .1v6.6c-.7 1.3-2.2 1.5-3.3 2-5.4 2.3-5.7 2.7-7.1 9 3.7 1.3 6.5-4.4 10.4-1.6 0 1.5-.3 3 1.2 4-2.9 4.2-2.5 8.5-.2 12.8-2.2 3.5-.5 7.5-1.1 11.2-8.8 1.1-20.3.6-29.1.4"
          fill="#e0a88c" />
        <path d="M445 502.2c-3.9 4-8.9 6-14.1 7.7-3.6.3-7.2.7-10.8 1 9.7-8.7 10.7-35.8 2.5-47.6 9-1 16.9.7 23.5 6.9 5.3 10.9 5.2 21.6-1.1 32z"
          fill="#4b687d" />
        <path class="st4"
          d="M344.1 509.9c-5.9-1.5-10.5-5.5-16-7.7 1.2-.4 1.4-1.1.9-2.2-4.5-9.3-4.4-18.7-.6-28.2.2-.4-.2-.9-.3-1.4 6.9-5.4 14.7-8.1 23.6-7.2.4 0 .9.2 1.4.3-8.2 8.8-8.4 37.3 2 47.5-3.8-.4-7.4-.7-11-1.1z" />
        <path class="st13"
          d="M411.9 510c18.6 3.3-3.7-3.4-8.6-5.9-.5-.4-1-.8-1.4-1.3-5.4-6.3-3.3-22.9 3.3-28.1 2.6-2 4.4-4.9 6.8-7.2 4.2-4.1 8.3-3.5 11.2 1.8 3.7 6.8 3.2 14.2 2.7 21.4-.5 7-3.7 13.3-8.5 18.8-2.3 1.6-3.2 1.6-5.5.5zM366.1 508c-1 .7-8.8 1.3-9.8 1.9-2.3 1 2.3 1.6 0 0-8.2-11.4-8.9-24.1-5.9-37.2 1.8-7.7 8.3-11.7 14.1-3.7 3.4 4.7 10.1 6.7 10.9 13.6.9 7.5 2 14.9-3.4 21.4-1.6.1-1.6-1.3-1.1-1.9 3.2-3.9 1.8-8.5 2.2-12.8.5-1.5.5-3.1.5-4.2-.3.8.2 2.2-.3 3.5-.4 2.8 0 5.6-.3 8.4-.2 1.7 0 4-3 3.2-1.3-2.9 0-6-.5-9 0-1.4.7-2.8.5-4.2.2 1.3-.4 2.6-.5 3.9-.3 2.4.6 5-.6 7.3-2.3.5-2.8-1-2.8-2.7-.1-1.9-.2-3.8.1-5.7.7-2.7.2-5.4.3-8.2-.3-.7-.8.4-.2 0 .7 2.2.2 4.5.3 6.8-.8 2.8-.2 5.7-.6 8.6-.1.6-.3 1-.7 1.5-.9.5-1.9 1.5-2.6-.3-.1-3.3-.1-6.6 0-10 1.1-3.3-.1-6.9.8-10.2.2-.6.8.2.2 0-1.3 3.3.2 6.8-1 10.1-.1 3.5-.1 7 0 10.5-.6 3.8 2 6.4 3.4 9.4z" />
        <path d="M310.9 410.2c1 0 2.1-.1 3.1-.1 4.4-.6 19.1 17 21 21.1-6.5 0-12.9-.4-19.4 0-4.7.3-6.3-1.4-5.7-5.9.2-1.3 0-2.6 0-4v-4.1c.9-2.3-1.5-5 1-7z"
          fill="#99867f" />
        <path class="st15"
          d="M298.9 361.1c-15 6.9-20.9 22.8-11.7 38.8-5.2-2.3-8.1-6.7-10.3-11.7-2.6-14.5 2.7-23.4 16.3-27.4 1.9-1.5 3.8-1.7 5.7.3z" />
        <path d="M581.9 499.1c.3 2.1-.4 1 1.1 1 12.5 0 27.2 1 39.7 1 1.5 0 4.2.2 4.5-1.8 4 1.1 3.1-.7 3.2 1.7.2 2-2.1 2.5-3.6 2.8-15.3 3.3-30.5 3.3-45.8 0-1.5-.3-3.8-.8-3.6-2.8.4-2.5 2.7-1.9 4.5-1.9z"
          fill="#b2b2b2" />
        <path class="st15"
          d="M488.1 399.1c6-13.8 4.6-24.6-4.4-32.8-2.3-2.1-5.1-3.5-7.7-5.3 1.3-1.2 2.6-1.3 3.9-.2 13.6 2.7 18.7 10 18.1 26.1-2.4 4.9-4.3 10-9.9 12.2z" />
        <path d="M451.9 427.8c1-3.1 1.6-7 5.8-2.1 1.7 2 3.9 1.5 4.2-1.7.1-1.2.1-2.3 1.1-3.1 2.3.1 4.7.2 7 .3-1.1.2-2.2.7-3.3.6-3-.1-4.3 1.2-3.8 4.1.8 4.7-1.7 4.8-5 3.9-2-.6-4-1.3-6-2z"
          fill="#9a8882" />
        <path d="M445.9 255.7V214c-.4-.5-.9-.8-1.4-1.1-14.3-.7-28.6.1-42.8-.3-8.4-.3-23.6 5.1-26.2 1.2-1.7-1.5-47.9-2.7-48.3-1-.2.8.5 2.9.4 4.6-.2 9.8-.3 34.1-.2 37 .1 4.3-.8 8.6.6 12.8-.2 3.1 1.1 11.3-2.9 14.3-.8 3.1 4.4.6 6 3.3 1.4 2.3 2.8 4.5 4.5 6.6 1.5 1.7 3.2 3.2 1.3 6-1.1 1.7.6 3.6 2.4 3.2 2.8-.7 4.9 0 6.9 1.1 2.7 1.6 5.1 3.9 8.2 4.6 3.1.7 4.5 11.4 4.4 9.7-.8-10.8 8-8.1 11.7-8.3 1.9-.1 3.7-.1 5.6-.2 1.3 2.9.3 4.3 1.3 3.5.8-.8 2.5-4 3.4-3.6.7.3 2 5.8 2.2 6.8.1.9 1.4-4.1 3.2-6.8 14.5 1.4 12 4.8 14.2 8.4.7 1.1 3-7.3 4.5-8.1.7.1 6.5 0 8.3-1.1 1.4-.8 1.5 4.5 4.9 2.8 4.9-2.3 13.6-11.6 16-11.4 4.2.3 5.8-2.2 6-5.7.1-3.1 4.4-12.7 3.9-15.2.3-.9.5-2.6.9-2.6 4.3-.3.5-11.7 5.8-14.3-5.5.4-4.8-2.2-4.8-4.5z"
          fill="#595959" />
        <path d="M461.9 410c1.2 0 2.4-.1 3.3.9-.8 3-1.6 5.9-2.4 8.9-1.7-3.2-.6-6.5-.9-9.8z" fill="#5a5959" />
        <path d="M310.9 410.2c-.1 2.3.9 4.8-.9 6.9-1.1-2.2-1.8-4.5-1.8-7 .8.1 1.7.1 2.7.1z" fill="#484746" />
        <path class="st2"
          d="M374.7 212.9c.1-1.3.1-2.7.3-4 .1-1.1.2-2.4.6-3.4 1.9-4.6 7.9-6.3 16.5-4.5 4.1.9 6.3 3.8 5.9 8-.3 3.8-.3 6 0 10.1.3 4 .2 8 0 12-.2 4.6-2.9 7.4-7.5 7.7-2.2.2-4.3.1-6.5 0-6.3-.1-9-2.8-9.1-9.2-.1-5.3-.1-10.7-.1-16-.3-.1-.5-.2-.4-.4.1-.2.2-.3.3-.3z" />
        <path d="M380.9 246.8c4.8-4.7 6.5-4.7 10.9-.4-3.6 1.1-6.8.5-10.9.4z" fill="#e3b398" />
        <path d="M335 431.1c-3.6-3.7-8.5-2.6-13.8-3.4 2.2-.9 3.1-4.7 1.8-5.7-1.2-.8-3.6-10.7-9-12 7.4-3 13.9-7.1 17.1-14.9 5.2-12.9 1.1-24.3-12.1-33.2.8-3.2 3.6-2.8 5.9-2.9 5.9-.3 11.8.2 17.6-.4 1.2-.2 2.4-.2 3.6-.2 12.1-.5 24.2-1.2 36.3-1.5 7.5-.2 15.2 0 22.6-2.1 2.8-.3 5.7-1.3 8 1.4-.6.3-1.2.8-1.8.8-4.8-.5 3.7 48.1 5.7 48 1.7 0 3.5.1 5.2.2-1 3.1-3 16.5-8.7 22.2-.5.5-2.4 3.8-4.3 3.8-22.2-.2-72.1-.2-74.1-.1z"
          fill="#b6a39a" />
        <path d="M353.9 167.8c-.6-.6-1.2-1.2-1.9-1.8 2.1-3.4.5-7.1 1-10.6.2-1.6-.3-3.8 2-3.8s2.2 2.3 1.9 3.8c-.8 4.2 2.6 9.4-3 12.4z"
          fill="#a8492a" />
        <path class="st24"
          d="M438.8 159.4c1-2.8-1.3-7.5 2-7.5 4 0 2 4.7 2.1 7.3.1 2.4 1.7 7-1.8 7-3.8-.1-1.1-4.7-2.3-6.8zM404.2 158.7c-1 2.8 1.3 7.5-2 7.5-4 0-2-4.7-2-7.3-.1-2.4-1.8-7 1.8-7 3.7 0 1 4.6 2.2 6.8zM391.9 159c1-2.5-1.5-7 2-7.1 3.7-.1 2 4.5 1.9 6.9-.1 2.6 1.9 7.3-2 7.4-3.3 0-1-4.8-1.9-7.2z" />
        <path class="st25"
          d="M349.1 161.9c-.3 1.7.5 4.4-1.9 4.5-2.9.1-2-2.8-2.1-4.6-.1-1.8-.1-3.6 0-5.4.1-1.8-.8-4.7 2.1-4.7 2.4 0 1.6 2.7 1.9 4.4-.1 1.9 0 3.9 0 5.8z" />
        <path class="st24"
          d="M435.1 159.3c-.8 2.4 1.2 6.8-1.9 6.8-4 .1-2-4.4-2.1-6.9-.1-2.7-1.5-7.4 2.2-7.4 3.1.2 1 5 1.8 7.5z" />
        <path d="M388 159.2c0 1.3.1 2.7 0 4-.1 1.2.2 3-1.7 2.9-1.5-.1-2.1-1.6-2.1-3-.1-3-.1-6 0-9 0-1.2.3-2.5 1.7-2.6 1.8-.1 2.1 1.4 2.1 2.7v5z"
          fill="#a64728" />
        <path class="st24"
          d="M365.1 158.8c-.6 2.7 1.1 7.2-2.5 7.1-3 0-1.5-4.5-1.4-6.9.1-2.5-1.7-7.1 1.8-7.2 3.7 0 1.1 4.7 2.1 7z" />
        <path class="st10"
          d="M368.9 158.8c.7-2.4-1-6.7 1.5-6.6 3.3.1 1.5 4.3 1.6 6.6.1 2.4 1.1 7.1-1.2 7-3.7-.3-.8-4.7-1.9-7zM380.2 158.8c-1 2.6 1.2 7-1.8 7-2.7 0-1.4-4.5-1.4-6.9 0-2.4-1.4-6.8 1.4-6.8 3.1.1.7 4.6 1.8 6.7zM411.3 158.6c-.9 2.7 1.1 7.2-1.6 7.2-3.1 0-1.4-4.3-1.5-6.7 0-2.4-1.3-6.9 1.3-6.9 3.2 0 .5 4.4 1.8 6.4zM427.2 158.9c-.8 2.6.9 6.9-1.5 6.9-3.3-.1-1.5-4.3-1.6-6.6-.1-2.4-1.1-7.1 1.2-7 3.7.3.5 4.7 1.9 6.7zM419.3 158.6c-.9 2.7 1.1 7.2-1.7 7.2-3 0-1.4-4.4-1.5-6.8 0-2.4-1.3-6.9 1.3-6.9 3.2.1.6 4.5 1.9 6.5z" />
        <path d="M449 158.8c0 1 .1 1.7 0 2.3-.2 1.3.6 3.5-1.6 3.4-1.8 0-1.3-2-1.4-3.2-.1-.7-.1-1.3 0-2 .5-2.2-1.4-6.1 1.6-6.2 2.6 0 .8 4 1.4 5.7z"
          fill="#a44427" />
        <path d="M333 361c-4.7.5-9.5-1-14 1-3.3-.6-3.8-2.3-2.8-7.3.7-3.4-4.2-5.4-7.1-4.4-2.9-2.4.9-5.7-1.3-8.4-.4-5.3-3.9-10.2-1.9-15.8.4-1.6 20-3.1 25-3.3 11.3-.6 61.3-5 74.9-6.1 2.1-.2 4.2-.9 6.3.3-1.2 4.6-3.2 9.1-1.1 13.9-4.7 1.2-1.8 19.4-3.7 24.7"
          fill="#c0ada5" />
        <path d="M479.8 360.8c-1.3.1-2.6.1-3.9.2-4.8-1.8-6.4-6.8-10-9.9-4.2-4.3-3.5-9.8-3.9-15 1.3-4-3.3-11.3-.1-14.9 6.4 5.2 14.7 13.9 18.3 21.3 3 6.2 3.6 12.3-.4 18.3z"
          fill="#d6d4d4" />
        <path d="M306 326c1.1 5.3 3.3 10.5 3.2 16.1 1.9 3.6.1 6.8-1.1 10-3 3.1-5.3 6.8-9.1 9-1.9-.1-3.8-.2-5.7-.2-3.9-7.4-2.8-14.4 1.4-21.2 3-5.1 6.4-10 11.3-13.7z"
          fill="#d6d4d3" />
        <path d="M462 336.1c2.5 4.7 2.8 10 3.9 15-1.3 0-2.6.1-3.9.1-1.9-1.6-3.8-2.4-1.4-5.9 2-2.8-2.9-2.9-4.7-5.1 3.2.1 6.1-.3 6.1-4.1z"
          fill="#607d8f" />
        <path d="M366.1 508c-3.1-1.8-6.9-3.3-4.1-8.1.6-.1.6-.8 1.1-1 .6-.3 1.3-.6 1.9-1 .4.4.5.8.5 1.3V499.6c0-.6 0-1.3-.5-1.8.4-3-.9-6.1 1-9 .3-.6.6-.6 1 0 1 2.9-1.9 6.7 2 9 .8.4.1 1.7 1.1 2 2.4-.4 1.7-2.3 1.9-3.9.3-2.7-.8-5.6.9-8.1.7 0 .6.7 1 1 .8 5.2-.7 10.2-1.9 15.1-2 1.5-4 2.8-5.9 4.1z"
          fill="#cdcfd0" />
        <path class="st34"
          d="M359 185.1c-3.3.1-5.6 2.5-8.5 3.6-1.2.5-2.3 1.8-3.6 1-1.8-1-.2-2.7-.3-3.9-.1-3.8 6.4-10.4 10.1-10.8.8-.1 1.6.4 2.4.7 1.5.1 3 .3 4.4.2 6.7-.4 6.7-.4 10.1 6.2-5 1.1-9.8 2-14.6 3zM424 191.6c-7-5.3-14.1-7.6-21.7-9-1.3-.3-4.6.4-3.8-2.3.7-2.2 2.3-5.6 5.3-5.1 5.6.8 11.4.4 16.8 2.9 2.1 1 2.1 2.8 2.4 4.5.4 2.5.6 5.1 1 9z" />
        <path class="st25"
          d="M323 159.3v-2.2c.1-1.7.1-3.7 2.2-3.7 2.5.1 1.5 2.4 1.7 3.9.1.6.1 1.3 0 2-.3 1.9.9 5.2-2.1 5.1-2.8-.2-1.4-3.5-1.8-5.1z" />
        <path class="st35"
          d="M333.1 159c-.9 2.3 1.3 6.7-1.7 6.7-2.7 0-1.4-4.4-1.4-6.8 0-2.4-1.4-6.8 1.4-6.8 2.9.1.9 4.6 1.7 6.9zM338 158c.7-1.8-1.4-5.8 1.6-5.8 2.6 0 1 4.1 1.4 6.4.2 1.4.1 3 0 4.4-.1 1.2.2 3.1-1.6 3-1.7-.1-1.3-2-1.4-3.2V158z" />
        <path d="M418.4 473.4c2.6 9.1.9 18.4 1.3 27.6-.4-9.3-2.3-18.4-1.3-27.6z" fill="#c0c5c9" />
        <path d="M402 496c-1.9-3.9-.4-7.9-.7-11.8 2.4 3.7 1.4 7.8 1.6 11.8-.3.6-.6.6-.9 0z" fill="#c2c7c9" />
        <path class="st38" d="M411.9 485c-1.6-3-1-6.1.1-9.2 1.5 3 .8 6.1.9 9.2-.3.6-.6.6-1 0z" />
        <path class="st39" d="M415.9 499c-1.8-2.9-.6-6.1-.8-9.1.2-.4.5-.8 1-1 1.8 3.2.6 6.7.9 10.1-.4.6-.7.6-1.1 0z" />
        <path class="st40" d="M416 496.3c-1.6-3-2.1-22.4-1-25.5 1.3 2.6.9 5.5.9 8.3-.2.4.5 17 .1 17.2z" />
        <path d="M413.1 497c1.8 2.6.6 5.3 1 9.1-3.1-3.5-1.7-6.5-2-9.1.3-.6.7-.6 1 0z" fill="#ced2d4" />
        <path class="st39" d="M409.1 486c1.8 2.9.6 6.1.9 9.1-.3.6-.7.6-1 0-1.7-2.5-.7-5.4-.9-8.1.2-.5.5-.8 1-1z" />
        <path d="M405 487c-1.6-2.1-.9-4.2-.5-7.4 2.1 2.7 1.4 4.7 1.5 6.5-.3.4-.6.7-1 .9z" fill="#ccd0d2" />
        <path class="st43" d="M413.1 497h-1c0-4-.1-8-.1-12h1c0 4 0 8 .1 12z" />
        <path class="st44" d="M405 487l1-1c0 3.6.1 7.3.1 10.9.4 1-.1 1.2-1 1-.1-3.6-.1-7.2-.1-10.9z" />
        <path d="M409.1 486c-.3.3-.6.7-1 1 .1-2.6-.5-5.2.4-8.1 1 2.5.3 4.8.6 7.1z" fill="#b9c1c5" />
        <path d="M408.9 495h1c-.1 2.6.5 5.2-1 7.8V495z" fill="#bac1c5" />
        <path d="M405.1 497.9c.3-.3.7-.6 1-1 1.1 1.4 1.4 2.9 0 4.5-1.5-.9-1-2.3-1-3.5z" fill="#ccd1d3" />
        <path d="M415.9 499h1c-.1 2.3.5 4.6-1 6.8V499z" fill="#bac0c4" />
        <path class="st49" d="M423 482c.2 3.9-.3 19.4-1.2 15.7 0-1.9.2-18.6.2-21.3 1.5 2.3.8 4 1 5.6z" />
        <path d="M402 496h1v4.6c-1.4-1.9-.9-3.3-1-4.6z" fill="#c0c5c8" />
        <path d="M362.1 488c0-4-.4-8.1 1.2-12 .4 4 1.7 8-.2 12-.4.6-.7.6-1 0z" fill="#c9ced0" />
        <path d="M355.1 491c.2-3.7-1-7.5.9-11 .3-.6.6-.6 1 0-.3 3.7 1 7.5-.9 11-.4.5-.7.6-1 0z" fill="#c7cccf" />
        <path d="M359.1 482c0-3.7-.6-7.4 1.8-12.2-.2 5 1 8.7-.9 12.2-.3.5-.6.6-.9 0z" fill="#c1c6ca" />
        <path class="st38" d="M358.1 502c.3-3.4-.9-6.8.9-10 .3-.6.7-.6 1 0-.3 3.3.9 6.8-.9 10-.4.6-.7.6-1 0z" />
        <path class="st40" d="M369.1 490c.1-3.1-.5-6.2.9-10.6 1.4 4.4 1.6 7.4.1 10.6-.4.6-.7.6-1 0z" />
        <path d="M352.9 485.9v6.3c-2.5-2.3-2.4-4.7-1-7.2.5.2.8.5 1 .9z" fill="#ced1d4" />
        <path class="st43" d="M369.1 490h1v9.9c-.5 1.5-1 2.9-1.2-.1 0-.6 0-1.3.1-1.9 0-2.6 0-5.2.1-7.9z" />
        <path class="st55" d="M362.1 488h1v10.9c-.3.5.2 1.7-1.1 1 0-3.9 0-7.9.1-11.9z" />
        <path d="M355.1 491h.9v9.8h-.9V491z" fill="#bac2c6" />
        <path class="st43" d="M359.9 492h-1c.1-3.3.1-6.6.2-10h.9c0 3.3 0 6.6-.1 10z" />
        <path class="st49" d="M366.9 489h-1v-8.8h1v8.8z" />
        <path class="st44" d="M352.9 485.9c-.3-.3-.7-.6-1-1v-7.8h1v8.8z" />
        <path class="st55" d="M356.9 480h-1c.2-2.3-.4-4.6.5-7.2 1 2.6.4 4.9.5 7.2z" />
        <path d="M373.9 488.9l-1-1v-3.7h1v4.7z" fill="#b9c1c4" />
        <path class="st49" d="M358.1 502h1v3.7h-1V502zM365 498c1.5 1.5 1 3.2 0 4.8V498z" />
        <symbol id="eyes">
          <path d="M415.1 195.3c.1 3.9-2.5 6.7-6.4 6.8-3.9.1-6.7-2.5-6.8-6.3-.1-3.9 2.5-6.7 6.3-6.8 3.9-.1 6.8 2.5 6.9 6.3z"
            fill="#672f12" />
          <circle cx="408.3" cy="195.4" r="3.8" />
          <ellipse cx="407.9" cy="193.9" rx="1.1" ry="1" fill="#fff" />
        </symbol>

        <path class="st60"
          d="M593.3 460.9c1.1 0 1.8-.1 2.1-.1.2 0 .4 0 .5.1.1.1.2.3.2.6s-.1.6-.3.8c-.2.2-.5.3-.9.3h-2.2c-.6 1.8-1 3.2-1.1 4.1-.1.7-.2 1.2-.4 1.5-.1.2-.4.4-.8.4-.3 0-.5-.1-.7-.3-.2-.2-.2-.5-.2-.8 0-.7.4-2.3 1.3-4.8-3.3.1-5.2.1-5.9.1-.3 0-.6-.1-.8-.4-.2-.2-.3-.5-.3-.8 0-.4.4-1.2 1.2-2.5.8-1.3 1.7-2.5 2.7-3.6s1.8-1.6 2.4-1.6c.6 0 .9.2.9.5 0 .2-.2.5-.5.7-.9.6-1.8 1.6-2.8 3.1-.9 1.4-1.5 2.4-1.7 2.9.6 0 2.4-.1 5.5-.2.8-2.1 1.4-3.6 1.9-4.7s.9-1.8 1.1-2.2.5-.5.9-.5.5.2.5.6c0 .2-.2.7-.5 1.3-.3.7-.6 1.5-1 2.4l-1.1 3.1zM611.1 458.3c0 1.5-.4 3.1-1.3 4.7s-2 3-3.3 4c-1.3 1-2.6 1.6-3.9 1.6-1.3 0-2.4-.4-3.2-1.3-.8-.9-1.2-2.1-1.2-3.7 0-1.5.5-3 1.4-4.6.9-1.6 2.1-2.9 3.4-3.9 1.4-1 2.7-1.5 3.9-1.5 1.3 0 2.3.4 3.1 1.3.7.7 1.1 1.9 1.1 3.4zm-11 5.5c0 .9.2 1.6.7 2.1.5.6 1.1.8 1.8.8 1 0 2-.4 3-1.3s1.9-2.1 2.5-3.5c.7-1.4 1-2.7 1-4 0-.9-.2-1.6-.6-2-.4-.5-.9-.7-1.7-.7-1 0-2 .4-3.1 1.3s-1.9 2-2.6 3.4c-.6 1.4-1 2.7-1 3.9zM622.4 460.9c1.1 0 1.8-.1 2.1-.1.2 0 .4 0 .5.1.1.1.2.3.2.6s-.1.6-.3.8c-.2.2-.5.3-.9.3h-2.2c-.6 1.8-1 3.2-1.1 4.1-.1.7-.2 1.2-.4 1.5-.1.2-.4.4-.8.4-.3 0-.5-.1-.7-.3-.2-.2-.2-.5-.2-.8 0-.7.4-2.3 1.3-4.8-3.3.1-5.2.1-5.9.1-.3 0-.6-.1-.8-.4-.2-.2-.3-.5-.3-.8 0-.4.4-1.2 1.2-2.5.8-1.3 1.7-2.5 2.7-3.6s1.8-1.6 2.4-1.6c.6 0 .9.2.9.5 0 .2-.2.5-.5.7-.9.6-1.8 1.6-2.8 3.1-.9 1.4-1.5 2.4-1.7 2.9.6 0 2.4-.1 5.5-.2.8-2.1 1.4-3.6 1.9-4.7s.9-1.8 1.1-2.2.5-.5.9-.5.5.2.5.6c0 .2-.2.7-.5 1.3-.3.7-.6 1.5-1 2.4l-1.1 3.1z" />
        <path class="st61"
          d="M631.3 430.7l-4.2 70.3-45.2-.9-5.1-68.6c-.3-3.7-8-7 6.4-6.9l42.5.3c16.6 0 5.8 2.5 5.6 5.8zM576.8 431.4h54.5" />


        <path class="st62"
          d="M350.7 422.6c7.3.1 14.4-2 21.7-2.4 7.5-.4 15 0 22.4 1.3 6.2 1.1 11.8 2.3 18.1 1.7 6.9-.6 13.7-1.8 20.4-3.2 3.1-.7 1.8-5.5-1.3-4.8-6.8 1.5-13.8 2.7-20.8 3.2-6.8.5-13.3-1.6-20.1-2.4-6.5-.8-13.1-1.1-19.7-.7-6.9.4-13.8 2.4-20.8 2.3-3.1-.1-3.1 4.9.1 5z" />


        <path class="st62"
          d="M424 416.3c5.5-.6 10.6 2.1 16.1.5-1.1-.8-2.1-1.6-3.2-2.4.7-.9.7-1.1 0-.6-.5.3-.9.5-1.4.8l-2.4 1.2c-1.9.8-3.8 1.5-5.8 2.1-3.1.9-1.8 5.8 1.3 4.8 3.1-.9 6-2.1 8.9-3.6 2-1 4.4-2.1 4.3-4.7-.1-1.6-1.5-2.9-3.2-2.4-4.8 1.4-9.8-1.2-14.8-.7-3 .3-3 5.3.2 5z" />



        <text transform="matrix(1 0 0 1 354 346)" class="text_forgiveness">Are</text>
        <text transform="matrix(1 0 0 1 351 372)">
          <tspan x="0" y="0" class="text_forgiveness">You</tspan>
          <tspan x="0" y="31" class="text_forgiveness">Lost ?</tspan>
        </text>
      </svg>
      <Link class="btn_home" to="/"> GO HOME </Link>
    </div>
  )
};
