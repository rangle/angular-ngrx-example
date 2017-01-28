export interface IVideoGame {
  id: string,
  title: string,
  description: string,
  youtubeUrl: string
}

function videoGameTitleMatches(videoGame: IVideoGame, searchQuery: string) {
  return videoGame.title.toLowerCase().includes(searchQuery.toLowerCase());
}

function videoGameDescriptionMatches(videoGame, searchQuery: string) {
  return videoGame.description.toLowerCase().includes(searchQuery.toLowerCase());
}

export function matchesVideoGame(videoGame, searchQuery: string) {
  return videoGameTitleMatches(videoGame, searchQuery) ||
    videoGameDescriptionMatches(videoGame, searchQuery);
}
