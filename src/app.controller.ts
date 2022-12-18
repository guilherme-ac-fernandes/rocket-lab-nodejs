import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prima: PrismaService) {}

  @Get()
  list() {
    return this.prima.notification.findMany();
  }

  @Post()
  async create() {
    await this.prima.notification.create({
      data: {
        id: randomUUID(),
        content: 'Nova solicitação de amizada',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
