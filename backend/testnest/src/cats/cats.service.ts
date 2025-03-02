import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findOne(id: number) {
    throw new Error('Method not implemented.');
  }
  private readonly cats: string[] = ['minou', 'patrick minou'];

  findAll(): string[] {
    return this.cats;
  }
  create(cat: string) {
    this.cats.push(cat);
  }
}
