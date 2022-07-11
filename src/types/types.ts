export interface IBoxes {
  isNotEmpty: boolean;
  image: any;
  index: number;
  isEmptyBox: (
    isNotEmpty: boolean,
    item: string,
    setItemLarge: (el: string) => void
  ) => void;
}

export interface IImage {
  image: any;
  size: string;
  box: string;
}

interface ILocation {
  address: string;
  country: number;
  country_name: string;
  latitude: string;
  longitude: string;
  name: string;
  postal: string;
  region: string;
  uid: string;
  working_hours: Array<string>;
}

interface IData {
  device: string;
  description: string;
  is_online: boolean;
  name: string;
  partner_type: number;
  point_code: null;
  type: number;
  uid: string;
  location: ILocation;
}

interface IInfoDevice {
  data: IData;
  extra: object;
  ids: null;
  message: null;
  status_code: number;
  success: boolean;
}

interface IParams {
  depth: number;
  height: number;
  label: string;
  width: number;
}

export interface IPackage {
  has_empty: boolean;
  image: IImage;
  params: IParams;
  type: string;
}

export interface IStates {
  boxesSmallMid: Array<IPackage>;
  boxesLarge: Array<IPackage>;
  images: Array<IImage>;
  infoDevice: IInfoDevice | null;
}
