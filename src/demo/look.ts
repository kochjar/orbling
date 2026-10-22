import type { Mood, Palette } from "../orbling";

export type Look = { mood: Mood; palette: Palette; hue: number };

export type LookProps = { look: Look; onLook: (patch: Partial<Look>) => void };
