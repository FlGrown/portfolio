export interface MetaInfoType {
  readonly label: string;
  readonly value: string;
}

export interface SectionType {
  readonly intro?: string;
  readonly items?: ReadonlyArray<string>;
  readonly paragraphs?: ReadonlyArray<string>;
  readonly title: string;
  readonly type: "text" | "bullets" | "outcomes" | "reflection";
}

export interface StatType {
  readonly label: string;
  readonly value: string;
}

export interface SummaryType {
  readonly built: ReadonlyArray<string>;
  readonly hindsight: string;
  readonly problem: string;
  readonly tradeoff: string;
}

export interface CaseStudyType {
  readonly id: string;
  readonly meta: ReadonlyArray<MetaInfoType>;
  readonly number: string;
  readonly period: string;
  readonly role: string;
  readonly sections: ReadonlyArray<SectionType>;
  readonly stack: string;
  readonly stat: StatType;
  readonly summary: SummaryType;
  readonly title: string;
  readonly video?: string;
}
