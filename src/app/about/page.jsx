import Link from "next/link";
import React from "react";

const getData = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await req.json();
  return data;
};
async function About() {
  const data = await getData();
  console.log(data);
  return (
    <div className="mt-14">
      <ul className="h-96  overflow-auto">
        {data.map((todo) => {
          return (
            <li class="flex justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {todo.title}
              </h5>

              <Link
                href={`about/${todo.id}`}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default About;
