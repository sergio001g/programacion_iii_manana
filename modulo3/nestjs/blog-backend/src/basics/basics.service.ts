import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
    getMyFirstGet(): object {
        return {
            service: 'Blog Backend',
            controller: '/basics',
            function: 'Get Example'
        };
    }

    getConParametros(parametro: string): object {
        return {
            service: 'Blog Backend',
            controller: '/basics/:parametro',
            function: 'Get con Parametros',
            parametroRecibido: parametro
        };
    }

    postFunction(bodyPost: object): object {
        return {
            service: 'Blog Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de petición Post',
            bodyRecibido: bodyPost
        };
    }

    putFunction(bodyPost: object, parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo put',
            function: 'Ejemplo de petición Put',
            bodyRecibido: bodyPost,
            parametro: parametro
        };
    }

    deleteFunction(parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function: 'Ejemplo de petición Delete',
            parametro: parametro
        };
    }

    calculoTriangulo(bodyPost: any): object {
        const result: number = (bodyPost.base * bodyPost.altura) / 2;
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post/calculo-area-triangulo',
            function: 'Cálculo del área de un triángulo',
            parametro: bodyPost,
            resultado: result
        };
    }

    areaRectangulo(ancho: number, alto: number): object {
        const result: number = ancho * alto;
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post/calculo-area-rectangulo',
            function: 'Cálculo del área de un rectángulo',
            ancho: ancho,
            alto: alto,
            resultado: result
        };
    }

}
