export interface InspectionPoint {
  Id: string;
  PostedTrafficLight: string;
  InspLotNumber: string;
  InspOperationNumber: string;
  InspPoint: boolean;
  UserFieldChar18: string;
  UserFieldChar10: string;
  UserFieldNumc10: string;
  UserFieldNumc3: string;
  UserDate?: string;
  UserTime: string;
  ShopFloorItemId: string;
  PhysicalSample: string;
  PartialLot: string;
  Equipment: string;
  IsPosted: boolean;
  IsDeleted: boolean;
  TrafficLight: string;
}
