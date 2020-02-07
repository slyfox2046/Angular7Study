export class User {
  constructor(
    public id: number,
    public name: string,
    public job: string,
    public age?: number
  ) {}
}
