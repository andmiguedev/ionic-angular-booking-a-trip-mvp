export class PopularPlace {
  constructor(
    public id: string,
    public imageURI: string,
    public name: string,
    public tagline: string,
    public rating: number,
    public views: number
  ) {}
}
