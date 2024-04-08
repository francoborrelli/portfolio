const getPath = (path: string) => `${process.env.PUBLIC_URL}/${path}`;

export const getSongPath = (song: string) => getPath(`/images/songs/${song}`);

export const getAlbumPath = (album: string) => getPath(`images/albums/${album}`);

export const getSocialNetworkPath = (socialNetwork: string) =>
  getPath(`images/social/${socialNetwork}`);
