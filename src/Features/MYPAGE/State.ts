interface MypageType {
  status: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  email: string;
  name: string;
  phone: string;
  formData: {
    name: string;
    phone: string;
  };
}
export const MapageInitial: MypageType = {
  status: null,
  email: '',
  name: '',
  phone: '',
  formData: {
    name: '',
    phone: ''
  }
};
export interface PartnerTypes {
  status: 'LOADING' | 'SUCCESS' | 'FAIL' | null;
  bolType: {
    isChanged: boolean;
  };
  partnerProfileEntity: {
    readonly createdDate: string;
    readonly modifiedDate: string;
    companyNm: string | undefined;
    career: string | undefined;
    introduce: string | undefined;
    region1DepthName: string | undefined;
    region2DepthName: string | undefined;
    region3DepthName: string | undefined;
    roadName: string | undefined;
    mainBuildingNo: string | undefined;
    subBuildingNo: string | undefined;
    detailRegion: string | undefined;
    x: string | undefined;
    y: string | undefined;
  };
  partnerProvideServiceList: { [key: string]: string }[];
  partnerActivityAreaList: {
    [key: string]: string;
  }[];
  other: {
    businessBol: { [property: string]: boolean };
    serviceBol: { [property: string]: boolean };
  };
  default: {
    readonly service: string[];
    readonly businessRegi: string[];
  };
  user: {
    readonly email: string;
    name: string;
    phoneNum: string;
  };

  formData: {
    partnerProfileEntity: {
      companyNm: string | undefined;
      career: string | undefined;
      introduce: string | undefined;
      region1DepthName: string | undefined;
      region2DepthName: string | undefined;
      region3DepthName: string | undefined;
      roadName: string | undefined;
      mainBuildingNo: string | undefined;
      subBuildingNo: string | undefined;
      detailRegion: string | undefined;
      x: string | undefined;
      y: string | undefined;
    };
    partnerProvideServiceList: { [key: string]: string }[];
    partnerActivityAreaList: { [key: string]: string }[];
  };
}

export const PartnerInitial: PartnerTypes = {
  status: null,
  bolType: {
    isChanged: false
  },
  partnerProfileEntity: {
    createdDate: '',
    modifiedDate: '',
    companyNm: '',
    career: '',
    introduce: '',
    region1DepthName: '',
    region2DepthName: '',
    region3DepthName: '',
    roadName: '',
    mainBuildingNo: '',
    subBuildingNo: '',
    detailRegion: '',
    x: '',
    y: ''
  },
  partnerProvideServiceList: [],
  partnerActivityAreaList: [],
  other: {
    businessBol: {},
    serviceBol: {}
  },
  user: {
    email: '',
    name: '',
    phoneNum: ''
  },
  formData: {
    partnerProfileEntity: {
      companyNm: '',
      career: '',
      introduce: '',
      region1DepthName: '',
      region2DepthName: '',
      region3DepthName: '',
      roadName: '',
      mainBuildingNo: '',
      subBuildingNo: '',
      detailRegion: '',
      x: '',
      y: ''
    },
    partnerProvideServiceList: [],
    partnerActivityAreaList: []
  },
  default: {
    service: ['DEMOLITION', 'CLEANING', 'RESTORATION'],
    businessRegi: [
      '??????',
      '??????',
      '??????',
      '??????',
      '??????',
      '??????',
      '??????',
      '??????',
      '??????',
      '?????????',
      '??????',
      '??????',
      '?????????',
      '??????',
      '??????',
      '??????',
      '??????',
      '??????',
      '?????????',
      '??????',
      '??????',
      '??????',
      '??????',
      '??????'
    ]
  }
};
