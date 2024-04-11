const getPath = (path: string) => `${process.env.PUBLIC_URL}/${path}`;

export const getSongPath = (song: string) => getPath(`/songs/${song}`);

export const getAlbumPath = (album: string) => getPath(`images/albums/${album}`);

export const getSocialNetworkPath = (socialNetwork: string) =>
  getPath(`images/social/${socialNetwork}`);

export const getProjectPath = (project: string) => getPath(`images/projects/${project}`);

export const getExperiencePath = (experience: string) => getPath(`images/experience/${experience}`);

export const getEducationPath = (education: string) => getPath(`images/education/${education}`);
