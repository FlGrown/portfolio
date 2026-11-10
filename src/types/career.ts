export type BrickTone = "accent" | "yellow" | "ink" | "red" | "teal";

export interface CareerChapterType {
  readonly body: string;
  readonly id: string;
  readonly org: string;
  readonly role: string;
  readonly tone: BrickTone;
  /** Brick width as a percentage of the stack. */
  readonly width: number;
  readonly years: string;
}
