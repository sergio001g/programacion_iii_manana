import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
    constructor(private readonly basicsService: BasicsService) {}

        @Get()
        getMyFirstGet(): object {
            return this.basicsService.getMyFirstGet();
        }

        @Get(':parametro')
        getConParametros(@Param('parametro') parametro: string) {
            return this.basicsService.getConParametros(parametro);
        }

        @Post()
        create(@Body() bodyPost: object) {
            return this.basicsService.postFunction(bodyPost);
        }

        @Put(':id')
        update(@Body() bodyPost: object,
        @Param('id') id: string
        ) {
            return this.basicsService.putFunction(bodyPost, id);
        }

        @Delete(':id')
        delete(@Param('id') id: string) {
            return this.basicsService.deleteFunction(id);
        }

        @Post('calculo-area-triangulo')
        calculoTriangulo(@Body() bodyPost: object) {
            return this.basicsService.calculoTriangulo(bodyPost);
        }

        @Post('calculo-area-rectangulo')
        areaRectangulo(
            @Param('ancho') ancho: number,
            @Param('alto') alto: number
        ) {
            return this.basicsService.areaRectangulo(ancho, alto);
        }

}
