import { Content } from './content';

interface NotificationProps {
  // id: string;
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _props: NotificationProps;

  constructor(props: NotificationProps) {
    this._props = props;
  }

  public set recipientId(recipientId: string) {
    this._props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this._props.recipientId;
  }

  public set content(content: Content) {
    this._props.content = content;
  }

  public get content(): Content {
    return this._props.content;
  }

  public set category(category: string) {
    this._props.category = category;
  }

  public get category(): string {
    return this._props.category;
  }

  // public read() {
  //   this._props.readAt = new Date();
  // }

  // public unread() {
  //   this._props.readAt = null;
  // }

  public set readAt(readAt: Date | null | undefined) {
    this._props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this._props.readAt;
  }

  // public cancel() {
  //   this._props.canceledAt = new Date();
  // }

  // public get canceledAt(): Date | null | undefined {
  //   return this._props.canceledAt;
  // }

  public get createdAt(): Date {
    return this._props.createdAt;
  }
}
