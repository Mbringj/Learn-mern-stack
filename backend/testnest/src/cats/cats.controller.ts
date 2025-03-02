import {
  Body,
  Controller,
  HttpCode,
  Header,
  Get,
  Query,
  Post,
  Redirect,
  Param,
  Req,
  HttpException,
  HttpStatus,
  UseFilters,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './DTO/create-cat.dto';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { RolesGuard } from './guard/role.guard';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  // initialize controller
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @HttpCode(404)
  @Header('Cache-Control', 'no-store')
  findAll(@Query('age') age: number, @Query('breed') breed: string) {
    try {
      this.catsService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catsService.findOne(id);
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  create(@Body() createCatDto: CreateCatDto) {
    return 'THis action adds a new cats';
  }
}
