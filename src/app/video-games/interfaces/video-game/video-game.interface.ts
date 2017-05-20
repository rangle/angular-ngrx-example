export interface IVideoGame {
  readonly id: string;
  readonly title: string;
  readonly platform?: string;
  readonly description?: string;
  readonly youtubeUrl?: string;
  readonly imageUrl?: string;
  readonly favorite?: boolean;
}
