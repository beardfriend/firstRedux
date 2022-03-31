export interface RequsetType {
  status: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  Delstatus: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  ViewStatus: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  bolType: {
    isList: boolean;
  };
  list: any;
  allList: any;
  view: any;
  partnerView: [];
  requestForm: {
    title: string | undefined;
    phoneNum: string | undefined;
    dueDate: string | undefined;
    content: string | undefined;
    area: string | undefined;
    phoneNumOpen: string;
    floor: string | undefined;
    elevator: string | undefined;
    state: string;
    deadline: string | undefined;
    detailRegion: string | undefined;
    region1DepthName: string | undefined;
    region2DepthName: string | undefined;
    region3DepthName: string | undefined;
    roadName: string | undefined;
    mainBuildingNo: string | undefined;
    subBuildingNo: string | undefined;
    x: string | undefined;
    y: string | undefined;
    requisitionRequestServiceList: { [key: string]: string }[];
  };
  other: {
    serviceBol: { [property: string]: boolean };
  };
  default: {
    readonly service: string[];
  };
  user: {
    readonly email: string;
    name: string;
    phoneNum: string;
  };
}
export const RequestInitial: RequsetType = {
  status: null,
  Delstatus: null,
  ViewStatus: null,
  bolType: {
    isList: false
  },
  list: [],
  allList: [],
  view: [],
  partnerView: [],
  requestForm: {
    title: undefined,
    phoneNum: undefined,
    dueDate: '',
    content: undefined,
    area: '',
    floor: '',
    state: 'PROCEEDING',
    phoneNumOpen: 'y',
    elevator: 'y',
    deadline: '',
    detailRegion: '',
    region1DepthName: undefined,
    region2DepthName: undefined,
    region3DepthName: undefined,
    roadName: '',
    mainBuildingNo: '',
    subBuildingNo: '',
    x: '',
    y: '',
    requisitionRequestServiceList: []
  },
  other: {
    serviceBol: {}
  },
  default: {
    service: ['DEMOLITION', 'RESTORATION', 'CLEANING']
  },
  user: {
    email: '',
    name: '',
    phoneNum: ''
  }
};
