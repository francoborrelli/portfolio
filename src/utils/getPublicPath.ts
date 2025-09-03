const getPath = (path: string) => `${process.env.PUBLIC_URL}/${path}`;

export const getSongPath = (song: string) => getPath(`/songs/${song}`);

export const getAlbumPath = (album: string, lang: string, ext: string) => {
  // For French and Italian, use English images as fallback since we don't have specific images for these languages
  const fallbackLang = ['fr', 'it'].includes(lang) ? 'en' : lang;
  return getPath(`images/albums/${album}-${fallbackLang}.${ext}`);
};

export const getSocialNetworkPath = (socialNetwork: string) =>
  getPath(`images/social/${socialNetwork}`);

export const getProjectPath = (project: string) => getPath(`images/projects/${project}`);

export const getExperiencePath = (experience: string) => getPath(`images/experience/${experience}`);

export const getEducationPath = (education: string) => getPath(`images/education/${education}`);

export const getPublicationPath = (publication: string) =>
  getPath(`images/publications/${publication}`);
