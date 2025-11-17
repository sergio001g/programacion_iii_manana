import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World desde los Poderosos Programadores del Tercer Semestre!';
  }
}
