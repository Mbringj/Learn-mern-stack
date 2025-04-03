import { CatsService } from './cats.service';
import { CreateCatDto } from './DTO/create-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    findAll(age: number, breed: string): void;
    findOne(id: number): void;
    create(createCatDto: CreateCatDto): string;
}
