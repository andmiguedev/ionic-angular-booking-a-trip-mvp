export class OnlineProfile {
   constructor(
      public id: string,
      // public profileURI?: string,
      public firstName: string,
      public lastName: string,
      public emailAddress: string,
      public dayOfBirth: string,
      public gender: string,
      public country: string,
      public plannedTrips: number,
      public visitedPlaces: number
   ) {}
}