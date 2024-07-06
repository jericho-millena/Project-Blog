<template>
    <nav class="bg-neutral-600 border-gray-200">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        <!-- Centered KOE -->
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <span class="text-3xl font-body whitespace-nowrap text-white">KOE</span>
        </div>

        <!-- Right side menu and user profile -->
        <div class="flex items-center order-2 space-x-0 rtl:space-x-reverse">
          <!-- User profile button -->
          <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="C:\Users\Jericho James\blog\myblog\src\components\images\profile.jpg" alt="user photo">
          </button>
          
          <!-- Mobile menu toggle button -->
          <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <!-- Hidden full-width menu for desktop -->
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul class="flex flex-col font-body p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-neutral-600 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:hover:text-custom-brown dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">BLOG</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:hover:text-custom-brown dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">TRAVELS</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:hover:text-custom-brown dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">PHOTOS</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:hover:text-custom-brown dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">ABOUT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  