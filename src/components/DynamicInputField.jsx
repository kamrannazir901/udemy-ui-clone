import React, { useEffect, useRef, useState } from "react";
import { icons } from "../assets/Data";
import Button from "../components/Button";
import { supabase } from "../../supabase";

const DynamicInputField = ({
  type = "text",
  values,
  onChange,
  className = "",
  icon = null,
  min,
  placeHolders,
}) => {
  const [focusedInputs, setFocusedInputs] = useState(values.map(() => false));
  const [dragIndex, setDragIndex] = useState(null);
  const dragRefs = useRef([]);

  const handleFocus = (index) => {
    const update = [...focusedInputs];
    update[index] = true;
    setFocusedInputs(update);
  };

  const handleBlur = (index) => {
    const update = [...focusedInputs];
    update[index] = false;
    setFocusedInputs(update);
  };

  const handleChange = (v, i) => {
    if (v.length <= 160) {
      const update = [...values];
      update[i] = v;
      onChange(update);
    }
  };

  const handleDelete = (i) => {
    if (values.length > min) {
      const update = [...values];
      update.splice(i, 1);
      onChange(update);
    }
  };

  const dragStart = (e, i) => {
    setDragIndex(i);
    e.target.classList.add("is-dragging");
  };

  const dragEnd = (e, i) => {
    setDragIndex(null);
    e.target.classList.remove("is-dragging");
  };
  const dragOver = (e, i) => {
    // e.preventDefault();
    if (dragIndex === null || dragIndex === i) return;
    const updated = [...values];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(i, 0, moved);
    setDragIndex(i);
    onChange(updated);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        {values.map((v, i) => {
          return (
            <div
              ref={(el) => (dragRefs.current[i] = el)}
              onDragStart={(e) => {
                dragStart(e, i);
              }}
              onDragEnd={(e) => {
                dragEnd(e, i);
              }}
              onDragOver={(e) => {
                dragOver(e, i);
              }}
              // onDrop={() => handleDrop(i)}
              draggable={false}
              key={i}
              className="flex items-stretch group"
            >
              <div
                className={`flex-1 hover:bg-gray-100 border-lightBlack ${
                  focusedInputs[i] ? "border-purple border-2" : "border-[1px]"
                } relative rounded overflow-hidden`}
              >
                {icon !== null && icon !== undefined && (
                  <span className=" absolute right-2 top-1/2 -translate-y-1/2">
                    {160 - v.length}
                  </span>
                )}

                <input
                  type={type}
                  value={v}
                  placeholder={placeHolders[i % min || 0]}
                  onFocus={() => handleFocus(i)}
                  onBlur={() => handleBlur(i)}
                  onChange={(e) => handleChange(e.target.value, i)}
                  className={`block text-sm w-full h-full pl-4 pr-10 bg-transparent outline-none ${className}`}
                />
              </div>
              <span
                onClick={() => handleDelete(i)}
                className="text-2xl opacity-0 group-hover:opacity-100 border p-2.5 link text-purple hover:bg-purple-100 border-purple rounded"
              >
                {icons.trash}
              </span>
              <span
                onMouseDown={() => {
                  dragRefs.current[i]?.setAttribute("draggable", true);
                }}
                onMouseUp={() => {
                  dragRefs.current[i]?.setAttribute("draggable", false);
                }}
                onMouseLeave={() => {
                  dragRefs.current[i]?.setAttribute("draggable", false);
                }}
                className="text-2xl opacity-0 group-hover:opacity-100 border p-2.5 cursor-move text-purple hover:bg-purple-100 border-purple rounded"
              >
                {icons.menuIcon}
              </span>
            </div>
          );
        })}
      </div>

      <div className="w-fit mt-4">
        <Button
          icon="+"
          text="Add more to your response"
          iconleft={true}
          className="!py-2 text-sm border-none"
          onClick={() => {
            const update = [...values];
            update.push("");
            onChange(update);
          }}
        />
      </div>
    </>
  );
};

export default DynamicInputField;
