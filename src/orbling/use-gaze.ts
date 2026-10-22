import { useEffect, type RefObject } from "react";

const EASE = 0.3;

function clamp(value: number) {
  return Math.max(-1, Math.min(1, value));
}

function follow(root: HTMLElement) {
  const eyes = root.querySelector<HTMLElement>(".orbling-eyes")!;
  const body = root.querySelector<HTMLElement>(".orbling-body")!;
  const aim = { x: 0, y: 0 };
  const look = { x: 0, y: 0 };
  let center = { x: 0, y: 0, reach: 0 };
  let frame = 0;

  function measure() {
    const box = root.getBoundingClientRect();
    center = { x: box.left + box.width / 2, y: box.top + box.height / 2, reach: Math.max(box.width * 4, 240) };
  }

  function draw() {
    look.x += (aim.x - look.x) * EASE;
    look.y += (aim.y - look.y) * EASE;
    eyes.style.setProperty("--ry", `${look.x * 28}deg`);
    eyes.style.setProperty("--rx", `${look.y * -24}deg`);
    body.style.rotate = `${look.x * 6}deg`;
    body.style.translate = `${look.x * 0.02}em ${look.y * 0.015}em`;
    const moving = Math.abs(aim.x - look.x) + Math.abs(aim.y - look.y) > 0.002;
    frame = moving ? requestAnimationFrame(draw) : 0;
  }

  function aimAt(event: PointerEvent) {
    aim.x = clamp((event.clientX - center.x) / center.reach);
    aim.y = clamp((event.clientY - center.y) / center.reach);
    if (!frame) frame = requestAnimationFrame(draw);
  }

  measure();
  window.addEventListener("pointermove", aimAt, { passive: true });
  window.addEventListener("scroll", measure, { passive: true });
  window.addEventListener("resize", measure);

  return () => {
    window.removeEventListener("pointermove", aimAt);
    window.removeEventListener("scroll", measure);
    window.removeEventListener("resize", measure);
    cancelAnimationFrame(frame);
    eyes.style.removeProperty("--ry");
    eyes.style.removeProperty("--rx");
    body.style.removeProperty("rotate");
    body.style.removeProperty("translate");
  };
}

export function useGaze(ref: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (active && ref.current) return follow(ref.current);
  }, [ref, active]);
}
