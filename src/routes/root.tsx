import { TrophyIcon, TicketIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { EVENTS } from "../data/eventData";

const TIMELINE = ["giaimini-1", "giaico-1"];

export default function Root() {
  return (
    <div className="flex justify-center align-middle w-full">
      <div className="p-5 bg-gray-900 antialiased min-w-96">
        <ol className="relative border-s border-gray-700">
          {TIMELINE.map((eventId) => {
            const { id, time, icon, title, description } = EVENTS[eventId];
            return (
              <li key={time} className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                  {icon}
                </span>
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                  {time}
                </time>
                <h3 className="text-lg font-semibold text-white underline">
                  <Link to={`/event/${id}`}>{title}</Link>
                </h3>
                <p className="text-base font-normal text-gray-400">
                  {description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
