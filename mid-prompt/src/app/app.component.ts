import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "mid-prompt-root",
  standalone: true,
  imports: [RouterOutlet],
  host: { class: "flex flex-col min-h-full" },
  template: `
    <header class="bg-indigo-600 pb-24">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative flex items-center justify-center py-5 lg:justify-between">

          <!-- Logo -->
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <a href="#">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                   alt="Your Company">
            </a>
          </div>

          <!-- Right section on desktop -->
          <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
            <button type="button"
                    class="relative flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                   aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
          </div>
        </div>

        <div class="border-t border-white border-opacity-20 py-5 lg:block">
          <div class="grid grid-cols-3 items-center gap-8">
            <div class="col-span-2">
              <h1 class="text-white rounded-md bg-white bg-opacity-0 px-3 py-2 text-2xl font-medium hover:bg-opacity-1">Midjourney Prompt ChatGPT Generator</h1>
<!--              <nav class="flex space-x-4">-->
<!--                &lt;!&ndash; Current: "text-white", Default: "text-indigo-100" &ndash;&gt;-->
<!--                <a href="#"-->
<!--                   class="text-white rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"-->
<!--                   aria-current="page">Home</a>-->
<!--                <a href="#"-->
<!--                   class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Profile</a>-->
<!--                <a href="#"-->
<!--                   class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Resources</a>-->
<!--                <a href="#"-->
<!--                   class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Company-->
<!--                  Directory</a>-->
<!--                <a href="#"-->
<!--                   class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Openings</a>-->
<!--              </nav>-->
            </div>
            <div>
<!--              <div class="mx-auto w-full max-w-md">-->
<!--                <label for="mobile-search" class="sr-only">Search</label>-->
<!--                <div class="relative text-white focus-within:text-gray-600">-->
<!--                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">-->
<!--                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--                      <path fill-rule="evenodd"-->
<!--                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"-->
<!--                            clip-rule="evenodd" />-->
<!--                    </svg>-->
<!--                  </div>-->
<!--                  <input id="mobile-search"-->
<!--                         class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"-->
<!--                         placeholder="Search" type="search" name="search">-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="-mt-24 pb-8 min-h-fit flex-1">
      <router-outlet></router-outlet>
    </main>

    <footer>
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left"><span
          class="block sm:inline">&copy; 2021 Your Company, Inc.</span> <span
          class="block sm:inline">All rights reserved.</span></div>
      </div>
    </footer>

  `
})
export class AppComponent {
}
