import * as React from "react";
import { useEffect, useRef } from "react";
import { Accordion } from "@ark-ui/react/accordion";
import { toRoman } from "../../utils/to-roman";

export interface SectionGroupProps {
  value: string[];
  onValueChange: (details: { value: string[] }) => void;
  children: React.ReactNode;
}

export function SectionGroup({ value, onValueChange, children }: SectionGroupProps) {
  return (
    <Accordion.Root
      value={value}
      onValueChange={onValueChange}
      multiple
      collapsible
    >
      {children}
    </Accordion.Root>
  );
}

export interface SectionProps {
  id: string;
  title: string;
  num: number;
  registerRef: (el: HTMLElement | null) => void;
  children: React.ReactNode;
}

export function Section({
  id,
  title,
  num,
  registerRef,
  children,
}: SectionProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerRef(wrapRef.current);
  }, [registerRef]);

  return (
    <div ref={wrapRef} id={id} className="wf-section">
      <Accordion.Item value={id}>
        <h2 className="wf-section__heading" id={id + "-heading"}>
          <Accordion.ItemTrigger asChild>
            <button className="wf-section__head" type="button">
              <span className="wf-section__num" aria-hidden="true">{toRoman(num)}</span>
              <span className="wf-section__title">{title}</span>
              <Accordion.ItemIndicator asChild>
                <span className="wf-section__chevron" aria-hidden="true">▾</span>
              </Accordion.ItemIndicator>
            </button>
          </Accordion.ItemTrigger>
        </h2>
        <Accordion.ItemContent className="wf-section__body">
          <div>{children}</div>
        </Accordion.ItemContent>
      </Accordion.Item>
    </div>
  );
}
