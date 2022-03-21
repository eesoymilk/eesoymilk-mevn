export default interface ShortUrl {
  _id?: string;
  url: string;
  shortUrl?: string;
  expireAt: Date;
}
