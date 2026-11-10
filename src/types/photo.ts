export interface PhotoProps {
  readonly alt?: string;
  readonly src: string;
}

export interface AlbumType {
  readonly id: string;
  readonly photos: ReadonlyArray<PhotoProps>;
  readonly title: string;
}
