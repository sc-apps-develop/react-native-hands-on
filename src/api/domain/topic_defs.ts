export interface TopicAttr {
  title: string;
  level: 'information' | 'important' | 'caution' | 'other';
  text: string;
  isFavorite?: boolean;
  createdAt: string;
}
