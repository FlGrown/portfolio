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

export interface CaseStudyType {
  readonly id: string;
  readonly meta: ReadonlyArray<MetaInfoType>;
  readonly number: string;
  readonly sections: ReadonlyArray<SectionType>;
  readonly title: string;
}
