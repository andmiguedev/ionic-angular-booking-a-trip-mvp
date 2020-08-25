export class TourSchedule {
  constructor(
    public id: string,
    public imageURI: string,
    public name: string,
    public startDate: string,
    public localTime: string,
    public numberPlaces: number
  ) {}
}
