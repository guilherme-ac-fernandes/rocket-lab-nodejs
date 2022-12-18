import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
// import { Notification } from '@application/entities/notification';
// import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
// import { PrismaNotificationMapper } from '@infra/database/prisma/mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
