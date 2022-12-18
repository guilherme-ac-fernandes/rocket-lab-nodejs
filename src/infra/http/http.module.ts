import { Module } from '@nestjs/common';
import { SendNotification } from '../../application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
// import { DatabaseModule } from '@infra/database/database.module';

// import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
// import { CancelNotification } from '@application/use-cases/cancel-notification';
// import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
// import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
// import { ReadNotification } from '@application/use-cases/read-notification';
// import { UnreadNotification } from '@application/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
