import { DictionaryDto } from './posts.interface';

export interface IPostService {
  getCuttingById(id: number): Promise<DictionaryDto>;
  getSortById(id: number): Promise<DictionaryDto>;
  getCatchAreaById(id: number): Promise<DictionaryDto>;
  getTypeOfProcessingById(id: number): Promise<DictionaryDto>;
}
