declare module 'gallagher';

declare namespace gallagher {

  type Party = {
    votes: number;
    seats: number;
    [key: string]: any;
  };

}

declare function gallagher (
  parties: gallagher.Party[]
): any;

export = gallagher;
