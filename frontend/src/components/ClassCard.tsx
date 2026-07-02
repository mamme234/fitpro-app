import React from "react";
import classNames from "classnames";

type Props = {
  id: number;
  title: string;
  trainer: string;
  start: string;
  capacity: number;
};

export default function ClassCard({ title, trainer, start, capacity }: Props) {
  const date = new Date(start);
  return (
    <article className="card p-4 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500">Trainer: <span className="text-gray-700">{trainer}</span></p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">When</div>
          <div className="text-sm font-medium">{date.toLocaleString()}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Capacity</div>
          <div className="text-sm font-medium">{capacity}</div>
        </div>
      </div>

      <div className="mt-4">
        <button className={classNames(
          "w-full py-2 rounded-md text-white font-medium",
          "bg-gradient-to-r from-primary-500 to-accent-500 hover:opacity-95"
        )}>
          Book class
        </button>
      </div>
    </article>
  );
}
