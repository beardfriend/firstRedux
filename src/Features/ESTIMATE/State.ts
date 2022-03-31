export interface EstimateType {
  status: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  getStatus: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  viewStatus: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  setStatus: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  delStatus: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  ClientGETstatus: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  bolType: {
    isList: boolean;
    isEdit: boolean;
    isClientList: boolean;
  };
  list: any;
  view: any;

  ClientList: any;
  ClientView: any;

  estimateForm: {
    requisitionEntity: { [property: string]: string };
    title: string | undefined;
    partnerName: string | undefined;
    partnerPhoneNum: string | undefined;
    partnerPhoneNumOpen: string | undefined;
    estimateEmail: string | undefined;
    workFromdate: string | undefined | Date;
    workTodate: string | undefined | Date;
    estimateAmount: string | undefined;
    estimateProvideServiceList: { [key: string]: string }[];
  };
  other: {
    serviceBol: { [property: string]: boolean };
  };
  default: {
    readonly service: string[];
  };
}

export const EstimateInitial: EstimateType = {
  status: null,
  getStatus: null,
  viewStatus: null,
  setStatus: null,
  delStatus: null,
  ClientGETstatus: null,
  bolType: {
    isList: false,
    isClientList: false,
    isEdit: false
  },
  list: [],
  view: null,

  ClientList: [],
  ClientView: null,

  estimateForm: {
    requisitionEntity: {},
    title: undefined,
    partnerName: undefined,
    partnerPhoneNum: undefined,
    partnerPhoneNumOpen: 'Y',
    estimateEmail: undefined,
    workFromdate: new Date().toISOString(),
    workTodate: new Date().toISOString(),
    estimateAmount: undefined,
    estimateProvideServiceList: []
  },
  other: {
    serviceBol: {}
  },
  default: {
    service: ['DEMOLITION', 'RESTORATION', 'CLEANING']
  }
};
