export type Country = {
  name: {
    common: string;
  };
  population: number;
  languages: { [key: string]: string };
  region: string;
  flags: { png: string };
  area: number;
  maps: {
    googleMaps: string;
  };
};
